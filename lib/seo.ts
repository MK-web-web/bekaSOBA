import type { Metadata } from "next";
import { servicePages, serviceLines } from "@/lib/content";
import { site } from "@/lib/site";

type PageMeta = {
  title: string | { absolute: string };
  description: string;
  path: string;
};

function buildMetadata({ title, description, path }: PageMeta): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const pageSeo = {
  home: buildMetadata({
    title: "bekaSOBA — Cabinet de conseil et de soutien à Bamako",
    description:
      "bekaSOBA : cabinet de conseil et de soutien à Bamako. Conseil aux entreprises, gestion de projet, construction de A à Z, formation des équipes, numérique, IA et automatisation.",
    path: "/",
  }),
  services: buildMetadata({
    title: "Services — Conseil, formation et accompagnement",
    description:
      "Les trois piliers de bekaSOBA au Mali : conseil, formation des équipes, numérique, IA et création. Construction de A à Z pour les familles, les organisations et les entreprises.",
    path: "/services",
  }),
  contact: buildMetadata({
    title: "Contact — Démarrer un échange découverte gratuit",
    description:
      "Contactez bekaSOBA par WhatsApp, e-mail ou formulaire. Entretien découverte gratuit à Bamako — conseil, formation et soutien pour étudiants, professionnels, entreprises et écoles.",
    path: "/contact",
  }),
  about: buildMetadata({
    title: "À propos — Le cabinet bekaSOBA et son fondateur",
    description:
      "bekaSOBA, cabinet de conseil et de soutien à Bamako. Standards internationaux, réalités maliennes. Fondateur : Mahamadou Kane, boursier Fulbright, MBA (UF), PMP®.",
    path: "/about",
  }),
  pricing: buildMetadata({
    title: "Tarification — Transparente et alignée sur les résultats",
    description:
      "Prix de lancement bekaSOBA jusqu'au 31 décembre 2026 : tarifs fixes en FCFA ; packs et missions de conseil sur demande après une consultation gratuite de 30 minutes.",
    path: "/pricing",
  }),
  business: buildMetadata({
    title: {
      absolute:
        "Pour les entreprises, les porteurs de projet et les organisations | bekaSOBA",
    },
    description:
      "Conseil aux entreprises, gestion de projet, formation des équipes, automatisation IA et construction de A à Z à Bamako.",
    path: "/entreprises",
  }),
  privacy: buildMetadata({
    title: "Politique de confidentialité",
    description:
      "Comment bekaSOBA collecte et protège vos données — formulaire de contact, WhatsApp, Google Analytics et vos droits.",
    path: "/privacy",
  }),
} satisfies Record<string, Metadata>;

const serviceSeo: Record<string, PageMeta> = {
  conseil: {
    title: "Conseil aux entreprises, organisations et diaspora",
    description:
      "Conseil aux entreprises, gestion de projet, diagnostic IA et automatisation, construction de A à Z et accompagnement des écoles à Bamako.",
    path: "/services/conseil",
  },
  "construction-advisory": {
    title: {
      absolute:
        "Construction de A à Z — Représentation du maître d'ouvrage",
    },
    description:
      "Construction de A à Z et représentation du maître d'ouvrage. Notre fondateur a représenté le maître d'ouvrage sur 5 projets résidentiels à Bamako (2019–2023).",
    path: "/services/construction-advisory",
  },
  formation: {
    title: "Formation et développement des équipes",
    description:
      "Formations pratiques en gestion de projet, management d'équipe, outils numériques et IA, carrière et employabilité pour les organisations à Bamako.",
    path: "/services/formation",
  },
  numerique: {
    title: "Numérique, IA et création",
    description:
      "Présence en ligne, automatisations et assistants IA, sites et applications web, Pack Visible et studio de création à Bamako.",
    path: "/services/numerique",
  },
};

export function getServiceMetadata(slug: string): Metadata {
  const meta = serviceSeo[slug];
  if (!meta) {
    const service = serviceLines.find((s) => s.slug === slug);
    return buildMetadata({
      title: service?.name.fr ?? "Service bekaSOBA",
      description: service?.summary.fr ?? site.name,
      path: `/services/${slug}`,
    });
  }
  return buildMetadata(meta);
}

export const gscImportantUrls = [
  site.url,
  `${site.url}/services`,
  `${site.url}/contact`,
  `${site.url}/about`,
  `${site.url}/entreprises`,
  `${site.url}/pricing`,
  ...servicePages.map((s) => `${site.url}/services/${s.slug}`),
];
