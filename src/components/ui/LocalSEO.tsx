export function LocalSEO() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Junk Removal LLC",
    description: "Professional junk removal in Atlanta, GA. Free estimates. Available 24/7.",
    telephone: "+1-404-409-8928",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Atlanta",
      addressRegion: "GA",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: "Atlanta" },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    url: "https://junkremovalatlanta.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
