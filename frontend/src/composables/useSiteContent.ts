import { computed, shallowRef, watch } from "vue";
import { useI18n } from "vue-i18n";

import {
  githubStatCards,
  skillBadgeCatalog,
} from "@/data/showcase";
import { initialLocale, normalizeLocaleCode } from "@/i18n";

import type { AppLocale } from "@/i18n";
import type { SiteContent } from "@/types/site";

const localeContentLoaders: Record<AppLocale, () => Promise<{ content: SiteContent }>> = {
  en: () => import("@/i18n/locales/en"),
  de: () => import("@/i18n/locales/de"),
  es: () => import("@/i18n/locales/es"),
};

const localeContentCache = new Map<AppLocale, SiteContent>();
const pendingLoads = new Map<AppLocale, Promise<SiteContent>>();
const activeContent = shallowRef<SiteContent | null>(null);

const EMPTY_CONTENT: SiteContent = {
  navItems: [],
  profile: {
    name: "",
    headline: "",
    location: "",
    email: "",
    orcid: "",
    summary: "",
    interests: [],
    skills: [],
  },
  impactHighlights: [],
  careerStages: [],
  publications: [],
  projects: [],
  cvAppointments: [],
  education: [],
  honors: [],
  articleHistory: [],
  blogPosts: [],
  externalProfiles: [],
  services: [],
  contactLinks: [],
};

const loadLocaleContent = async (value: string | null | undefined): Promise<SiteContent> => {
  const locale = normalizeLocaleCode(value);
  const cached = localeContentCache.get(locale);

  if (cached) {
    return cached;
  }

  const pending = pendingLoads.get(locale);

  if (pending) {
    return pending;
  }

  const load = localeContentLoaders[locale]().then((module) => {
    localeContentCache.set(locale, module.content);
    pendingLoads.delete(locale);
    return module.content;
  });

  pendingLoads.set(locale, load);
  return load;
};

export const preloadSiteContent = async (value: string | null | undefined): Promise<void> => {
  activeContent.value = await loadLocaleContent(value);
};

void preloadSiteContent(initialLocale);

export function useSiteContent() {
  const { locale } = useI18n({ useScope: "global" });

  const syncActiveContent = async (value: string) => {
    const targetLocale = normalizeLocaleCode(value);
    const content = await loadLocaleContent(targetLocale);

    if (normalizeLocaleCode(locale.value) === targetLocale) {
      activeContent.value = content;
    }
  };

  watch(
    locale,
    (value) => {
      void syncActiveContent(value);
    },
    { immediate: true },
  );

  return computed(() => {
    const base = activeContent.value ?? EMPTY_CONTENT;

    return {
      ...base,
      skillBadges: skillBadgeCatalog,
      githubStats: githubStatCards,
    };
  });
}
