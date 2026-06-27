const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Junk Removal LLC",
  description: "Professional junk removal in Atlanta, GA. Free estimates. Available 24/7.",
  telephone: "+1-404-409-8928",
  image: "https://tudominio.com/images/Truck.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Atlanta, GA",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    postalCode: "30301",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.749,
    longitude: -84.388,
  },
  areaServed: [
    { "@type": "City", name: "Atlanta" },
    { "@type": "City", name: "Buckhead" },
    { "@type": "City", name: "Decatur" },
    { "@type": "City", name: "Marietta" },
  ],
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  url: "https://tudominio.com",
  sameAs: [
    "https://www.facebook.com/tupagina",
    "https://www.google.com/maps?cid=TU_CID",
  ],
};