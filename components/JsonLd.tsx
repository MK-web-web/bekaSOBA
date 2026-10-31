import { contact } from "@/lib/content";
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
        foundingDate: "2021-08-20",
        slogan: "Standards internationaux, réalités maliennes",
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
        knowsAbout: [
          "Business consulting",
          "AI & automation diagnostic",
          "Project management consulting",
          "Construction from A to Z / Owner's Representation",
          "Project & team management training",
          "AI for project managers",
          "Career & employability programmes",
          "Digital solutions, automation & AI",
          "Creative studio",
        ],
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
