import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

// Create a simple fallback server for SPA routing
const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  let filePath = path.join(distDir, urlPath);
  
  const fallbackFile = fs.existsSync(path.join(distDir, 'index-shell.html'))
    ? 'index-shell.html'
    : 'index.html';

  if (filePath.endsWith('/') || !path.extname(filePath)) {
    filePath = path.join(distDir, fallbackFile);
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(distDir, fallbackFile), (err2, content2) => {
          if (err2) {
            res.writeHead(500);
            res.end(`Error loading ${fallbackFile}`);
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content2, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Start the server and crawl routes
server.listen(0, '127.0.0.1', async () => {
  const port = server.address().port;
  console.log(`[Prerender] Server running at http://127.0.0.1:${port}`);

  const shellDest = path.join(distDir, 'index-shell.html');

  try {
    // Copy index.html to index-shell.html before overwriting it
    const shellSrc = path.join(distDir, 'index.html');
    fs.copyFileSync(shellSrc, shellDest);
    console.log('[Prerender] Created clean SPA shell template.');

    const browser = await chromium.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const routes = [
      '/',
      '/products',
      '/products/cosmos',
      '/products/scholarsanchor',
      '/technology',
      '/research',
      '/company',
    ];

    for (const route of routes) {
      const page = await browser.newPage();
      const url = `http://127.0.0.1:${port}${route}`;
      console.log(`[Prerender] Crawling route: ${route}`);
      
      try {
        await page.goto(url, { waitUntil: 'networkidle' });
        // Give React/Helmet extra time to render and update head/title/scripts
        await page.waitForTimeout(1000);

        const html = await page.content();

        // Determine where to save the file
        let destPath;
        if (route === '/') {
          destPath = path.join(distDir, 'index.html');
        } else {
          const routePath = route.startsWith('/') ? route.substring(1) : route;
          const targetDir = path.join(distDir, routePath);
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }
          destPath = path.join(targetDir, 'index.html');
        }

        fs.writeFileSync(destPath, html, 'utf-8');
        console.log(`[Prerender] Saved static page to: ${destPath}`);
      } finally {
        await page.close();
      }
    }

    // Update lastmod in sitemap.xml to the current date
    const sitemapSrcPath = path.join(__dirname, 'public', 'sitemap.xml');
    const sitemapDestPath = path.join(distDir, 'sitemap.xml');
    if (fs.existsSync(sitemapSrcPath)) {
      const today = new Date().toISOString().split('T')[0];
      let sitemapXml = fs.readFileSync(sitemapSrcPath, 'utf-8');
      // Replace all <lastmod>YYYY-MM-DD</lastmod> with today's date
      sitemapXml = sitemapXml.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
      fs.writeFileSync(sitemapDestPath, sitemapXml, 'utf-8');
      console.log(`[Prerender] Updated lastmod in sitemap.xml to ${today} and saved to: ${sitemapDestPath}`);
    }

    await browser.close();
    
    // Clean up index-shell.html
    if (fs.existsSync(shellDest)) {
      fs.unlinkSync(shellDest);
      console.log('[Prerender] Removed SPA shell template.');
    }
    
    console.log('[Prerender] Prerendering finished successfully!');
  } catch (error) {
    console.error('[Prerender] Error during prerendering:', error);
    if (fs.existsSync(shellDest)) {
      fs.unlinkSync(shellDest);
    }
    process.exit(1);
  } finally {
    server.close();
    console.log('[Prerender] Server stopped.');
  }
});
