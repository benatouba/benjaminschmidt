import { computed } from "vue";
import { useI18n } from "vue-i18n";

import {
  githubStatCards,
  projectCatalogDe,
  projectCatalogEn,
  projectCatalogEs,
  skillBadgeCatalog,
} from "@/data/showcase";
import { content as de } from "@/i18n/locales/de";
import { content as en } from "@/i18n/locales/en";
import { content as es } from "@/i18n/locales/es";

import type { SiteContent } from "@/types/site";

const localeContent: Record<string, SiteContent> = { en, de, es };

export function useSiteContent() {
  const { locale } = useI18n({ useScope: "global" });
  return computed(() => {
    const base = localeContent[locale.value] ?? localeContent.en;
    const localizedProjects =
      locale.value === "de" ? projectCatalogDe : locale.value === "es" ? projectCatalogEs : projectCatalogEn;

    return {
      ...base,
      projects: localizedProjects,
      skillBadges: skillBadgeCatalog,
      githubStats: githubStatCards,
    };
  });
}
