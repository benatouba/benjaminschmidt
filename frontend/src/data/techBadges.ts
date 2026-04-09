import { skillBadgeCatalog } from "@/data/showcase";

import type { SkillBadge } from "@/types/site";

export interface ResolvedTechBadge extends SkillBadge {
  known: boolean;
}

const normalize = (value: string) => value.trim().toLowerCase();

const knownBadges = new Map<string, SkillBadge>(
  skillBadgeCatalog.map((badge) => [normalize(badge.label), badge]),
);

const aliases: Record<string, string> = {
  vue: "vue 3",
  "vue.js": "vue 3",
  vuejs: "vue 3",
  vue3: "vue 3",
  javascript: "typescript",
  python3: "python",
  "python 3": "python",
};

const customBadges: Record<string, SkillBadge> = {
  openlayers: {
    label: "OpenLayers",
    image: "https://img.shields.io/badge/OpenLayers-1f6b75?style=flat-square",
    href: "https://openlayers.org/",
    width: 75,
    height: 20,
  },
  "cytoscape.js": {
    label: "Cytoscape.js",
    image: "https://img.shields.io/badge/Cytoscape.js-1e1e2e?style=flat-square",
    href: "https://js.cytoscape.org/",
    width: 81,
    height: 20,
  },
  pymc: {
    label: "PyMC",
    image: "https://img.shields.io/badge/PyMC-244d8f?style=flat-square",
    href: "https://www.pymc.io/",
    width: 41,
    height: 20,
  },
  panel: {
    label: "Panel",
    image: "https://img.shields.io/badge/Panel-1f2937?style=flat-square",
    href: "https://panel.holoviz.org/",
    width: 39,
    height: 20,
  },
};

const genericBadgeImage = (label: string) =>
  `https://img.shields.io/badge/${encodeURIComponent(label)}-45475a?style=flat-square`;

export function resolveTechBadge(label: string): ResolvedTechBadge {
  const key = normalize(label);
  const aliasKey = aliases[key];

  const known = knownBadges.get(aliasKey ?? key) ?? customBadges[key];

  if (known) {
    return { ...known, known: true };
  }

  return {
    label,
    image: genericBadgeImage(label),
    known: false,
  };
}

export function resolveKnownTechBadge(label: string): ResolvedTechBadge | null {
  const badge = resolveTechBadge(label);
  return badge.known ? badge : null;
}
