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
  keywords = "B2B AI SaaS, Educational AI, ScholarsAnchor, Cosmos IDE",
  jsonLd,
}: SEOProps) {
  const siteTitle = "Threnlabs";
  const fullTitle = title 
    ? (title.includes("Threnlabs") ? title : `${title} | ${siteTitle}`) 
    : siteTitle;
  const defaultDescription = "Threnlabs (Thren) builds production-grade AI infrastructure. Cosmos: The Reasoning First Code Editor, ScholarsAnchor, Bullpen, and Smap.";

  // Ensure all brand variations are always present first in search engine indexing keywords
  const brandKeywords = [
    "Threnlabs",
    "Thren",
    "thren_labs",
    "thren labs",
    "Thren AI",
    "Threnlabs AI",
    "Thren_labs AI",
    "Threnlabs Launchpad"
  ];

  // Combine brand-specific keywords with page-specific keywords
  const userKeywords = keywords ? keywords.split(",").map(k => k.trim()) : [];
  const combinedKeywords = Array.from(new Set([...brandKeywords, ...userKeywords]))
    .filter(Boolean)
    .join(", ");

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Threnlabs",
    "alternateName": ["Thren", "thren_labs", "thren labs", "Threnlabs AI", "Thren_labs AI"],
    "url": "https://threnlabs.com/",
    "logo": "https://threnlabs.com/logo.png",
    "description": description || defaultDescription,
    "sameAs": [
      "https://twitter.com/threnlabs"
    ]
  };

  // If a custom JSON-LD is provided, we check if it is of type Organization or Brand,
  // and inject our alternate names to ensure search engines link all queries.
  let activeJsonLd = jsonLd;
  if (activeJsonLd) {
    if (activeJsonLd["@type"] === "Organization" || activeJsonLd["@type"] === "Brand") {
      activeJsonLd = {
        ...activeJsonLd,
        "alternateName": Array.from(new Set([
          ...(Array.isArray(activeJsonLd.alternateName) ? activeJsonLd.alternateName : [activeJsonLd.alternateName].filter(Boolean)),
          "Thren",
          "thren_labs",
          "thren labs",
          "Threnlabs",
          "Threnlabs AI",
          "Thren_labs AI"
        ]))
      };
    }
  } else {
    activeJsonLd = defaultJsonLd;
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={combinedKeywords} />
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
      <script type="application/ld+json">
        {JSON.stringify(activeJsonLd)}
      </script>
    </Helmet>
  );
}

