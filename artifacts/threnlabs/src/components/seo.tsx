import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  keywords?: string;
  jsonLd?: Record<string, any>;
}

export function SEO({
  title,
  description,
  canonical,
  type = "website",
  image = "/opengraph.jpg",
  keywords = "Threnlabs, Thren, Thren AI, Threnlabs AI, B2B AI SaaS, Educational AI, ScholarsAnchor, Cosmos IDE",
  jsonLd,
}: SEOProps) {
  const siteTitle = "Threnlabs";
  const fullTitle = title 
    ? (title.includes("Threnlabs") ? title : `${title} | ${siteTitle}`) 
    : siteTitle;
  const defaultDescription = "Threnlabs (Thren) builds production-grade AI infrastructure. Cosmos: The Reasoning First Code Editor, ScholarsAnchor, Bullpen, and Smap.";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
