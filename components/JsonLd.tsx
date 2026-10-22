import { contact, serviceLines } from "@/lib/content";
import { site } from "@/lib/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: `${site.url}${site.logo}`,
        email: contact.emailPlaceholder,
        telephone: contact.whatsappPlaceholder.replace(/\s/g, ""),
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rue 429, Porte 52",
          addressLocality: "Hamdallaye ACI, Bamako",
          addressCountry: "ML",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.629445,
          longitude: -8.034999,
        },
        openingHours: "Sa-Th 07:00-23:00",
        founder: {
          "@type": "Person",
          name: "Mahamadou Kane",
          url: "https://mahamadoukane.vercel.app",
        },
        description:
          "Consulting and support firm in Bamako. International standards, Malian realities.",
        knowsAbout: serviceLines.map((s) => s.name.en),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: ["fr", "en"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
