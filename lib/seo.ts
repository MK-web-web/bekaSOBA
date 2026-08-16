import type { Metadata } from "next";
import { serviceLines } from "@/lib/content";
import { site } from "@/lib/site";

type PageMeta = {
  title: string;
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
    title: "bekaSOBA — Conseil et soutien axés sur les résultats au Mali",
    description:
      "bekaSOBA : cabinet de conseil et de soutien à Bamako. Gestion de projet, construction, accompagnement scolaire, anglais professionnel, leadership et compétences numériques.",
    path: "/",
  }),
  services: buildMetadata({
    title: "Services — Conseil, formation et accompagnement",
    description:
      "Cinq pôles de service bekaSOBA au Mali : gestion de projet PMP®, conseil en construction, accompagnement scolaire DEF, anglais & leadership, compétences numériques.",
    path: "/services",
  }),
  contact: buildMetadata({
    title: "Contact — Démarrer un échange découverte gratuit",
    description:
      "Contactez bekaSOBA par WhatsApp, e-mail ou formulaire. Entretien découverte gratuit à Bamako — conseil, formation et soutien pour particuliers, familles et organisations.",
    path: "/contact",
  }),
  about: buildMetadata({
    title: "À propos — Cabinet bekaSOBA et organisations sœurs",
    description:
      "bekaSOBA allie standards professionnels américains et réalités maliennes. Fondateur Fulbright, PMP®, MBA. Écosystème : Big Hope Mali, DJIGUI-BA-MALI.",
    path: "/about",
  }),
  pricing: buildMetadata({
    title: "Tarification — Transparente et alignée sur les résultats",
    description:
      "Approche tarifaire bekaSOBA : forfaits fixes, modèles hybrides et honoraires liés aux résultats. Propositions claires après un entretien découverte gratuit.",
    path: "/pricing",
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
    title: "Conseil en construction — Représentation du maître d'ouvrage",
    description:
      "Accompagnement de projets de construction résidentielle au Mali : planification, budget, qualité, sécurité et suivi d'exécution côté maître d'ouvrage.",
    path: "/services/construction-advisory",
  },
  "education-mentoring": {
    title: "Accompagnement scolaire — Préparation DEF",
    description:
      "Accompagnement scolaire inspiré du homeschooling à Bamako. Préparation DEF en mathématiques, physique, chimie, français et anglais.",
    path: "/services/education-mentoring",
  },
  "english-leadership": {
    title: "Anglais professionnel et leadership",
    description:
      "Coaching d'anglais immersif et mentorat en leadership à Bamako. Méthode d'acquisition naturelle avec coachs ayant vécu aux États-Unis.",
    path: "/services/english-leadership",
  },
  "digital-skills": {
    title: "Compétences numériques — Formation pratique",
    description:
      "Formation aux compétences numériques au Mali : bureautique, Canva, organisation digitale et notions web pour professionnels et organisations.",
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
  `${site.url}/pricing`,
  ...serviceLines.map((s) => `${site.url}/services/${s.slug}`),
];
