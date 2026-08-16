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
        url: site.url,
        logo: `${site.url}${site.logo}`,
        email: contact.emailPlaceholder,
        telephone: contact.whatsappPlaceholder.replace(/\s/g, ""),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bamako",
          addressCountry: "ML",
        },
        sameAs: [
          "https://bighopemali.com",
          "https://djiguibamali.vercel.app",
          "https://mahamadou-kane.vercel.app",
        ],
        description:
          "Results-oriented consulting firm bridging U.S. professional standards with Malian realities.",
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
