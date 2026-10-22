import type { Metadata } from "next";
import { serviceLines } from "@/lib/content";
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
      "bekaSOBA : cabinet de conseil et de soutien à Bamako. Gestion de projet et d'entreprise, construction de A à Z, établissements scolaires, anglais professionnel, leadership, informatique et numérique.",
    path: "/",
  }),
  services: buildMetadata({
    title: "Services — Conseil, formation et accompagnement",
    description:
      "Six pôles de service bekaSOBA au Mali : gestion de projet et d'entreprise, construction de A à Z, services aux établissements scolaires, anglais professionnel, leadership, informatique et numérique.",
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
      "Prix de lancement bekaSOBA jusqu'au 31 décembre 2026 : tarifs fixes en FCFA et missions de conseil sur devis après une consultation gratuite de 30 minutes.",
    path: "/pricing",
  }),
  business: buildMetadata({
    title: {
      absolute:
        "Pour les entreprises — Lancement et diagnostic financier | bekaSOBA",
    },
    description:
      "Lancement d'entreprise, diagnostic financier et gestion de projet à Bamako. Consultation de cadrage gratuite de 30 minutes.",
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
  "project-management": {
    title: "Gestion de projet — Conseil et formation PMP®",
    description:
      "Conseil, formation et accompagnement en gestion de projet certifiés PMP® à Bamako. Planification, MS Project, Agile, préparation certification.",
    path: "/services/project-management",
  },
  "construction-advisory": {
    title: {
      absolute:
        "Construction de A à Z — Représentation du maître d'ouvrage",
    },
    description:
      "Accompagnement de projets de construction résidentielle au Mali : planification, budget, qualité, sécurité et suivi d'exécution côté maître d'ouvrage.",
    path: "/services/construction-advisory",
  },
  "education-mentoring": {
    title: "Établissements scolaires — Services aux écoles et universités",
    description:
      "Formation du personnel, outils de suivi des inscriptions et des frais, visibilité en ligne pour les écoles et universités à Bamako.",
    path: "/services/education-mentoring",
  },
  "professional-english": {
    title: "Anglais professionnel — Coaching immersif",
    description:
      "Coaching d'anglais professionnel à Bamako par un ancien boursier Fulbright — fluidité, confiance et anglais technique.",
    path: "/services/professional-english",
  },
  "leadership-development": {
    title: "Développement du leadership — Mentorat et programmes",
    description:
      "Mentorat en leadership à Bamako : communication d'équipe, prise de décision, développement du potentiel et programmes sur mesure pour managers et institutions.",
    path: "/services/leadership-development",
  },
  "digital-skills": {
    title: "Informatique & numérique — Formations et services",
    description:
      "Formations et services numériques au Mali : CV, design, Google Maps, sites web, applications web sur mesure, bureautique, IA.",
    path: "/services/digital-skills",
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
  ...serviceLines.map((s) => `${site.url}/services/${s.slug}`),
];
