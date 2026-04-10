import { createRouter, createWebHistory } from "vue-router";
import { handleHotUpdate, routes } from "vue-router/auto-routes";
import i18n from "@/i18n";
import { normalizeLocaleCode } from "@/i18n";

const BASE_TITLE = "Dr. Benjamin Schmidt";
const CHUNK_LOAD_ERROR_RE =
  /Failed to fetch dynamically imported module|Importing a module script failed|Unable to preload CSS/;
const CHUNK_RELOAD_MARKER = "route-chunk-reload";
const SUPPORTED_LOCALES = ["en", "de", "es"] as const;
const OG_LOCALE_BY_LANG: Record<(typeof SUPPORTED_LOCALES)[number], string> = {
  en: "en_US",
  de: "de_DE",
  es: "es_ES",
};
const MANAGED_ALT_ATTR = "data-managed-hreflang";
const MANAGED_OG_ALT_ATTR = "data-managed-og-locale-alternate";

const routeTitleKeys: Record<string, string> = {
  "/cv": "pages.cv.metaTitle",
  "/career": "pages.career.metaTitle",
  "/publications": "pages.publications.metaTitle",
  "/spotlights": "pages.spotlights.metaTitle",
  "/projects": "pages.projects.metaTitle",
  "/profiles": "pages.profiles.metaTitle",
  "/contact": "pages.contact.metaTitle",
  "/services": "pages.services.metaTitle",
};

const upsertLinkTag = (selector: string, attrs: Record<string, string>) => {
  if (typeof document === "undefined") {
    return;
  }

  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  for (const [key, value] of Object.entries(attrs)) {
    element.setAttribute(key, value);
  }
};

const upsertMetaProperty = (property: string, content: string) => {
  if (typeof document === "undefined") {
    return;
  }

  let element = document.head.querySelector<HTMLMetaElement>(`meta[property=\"${property}\"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const buildLocalizedUrl = (path: string, locale: string) => {
  if (typeof window === "undefined") {
    return "";
  }

  const url = new URL(path, window.location.origin);
  url.searchParams.set("lang", locale);
  return url.toString();
};

const syncOgLocaleAlternateTags = (activeLocale: (typeof SUPPORTED_LOCALES)[number]) => {
  if (typeof document === "undefined") {
    return;
  }

  document.head
    .querySelectorAll(`meta[property=\"og:locale:alternate\"][${MANAGED_OG_ALT_ATTR}=\"true\"]`)
    .forEach((node) => node.remove());

  for (const locale of SUPPORTED_LOCALES) {
    if (locale === activeLocale) {
      continue;
    }

    const element = document.createElement("meta");
    element.setAttribute("property", "og:locale:alternate");
    element.setAttribute("content", OG_LOCALE_BY_LANG[locale]);
    element.setAttribute(MANAGED_OG_ALT_ATTR, "true");
    document.head.appendChild(element);
  }
};

const syncAlternateLanguageTags = (path: string, activeLocale: (typeof SUPPORTED_LOCALES)[number]) => {
  if (typeof document === "undefined") {
    return;
  }

  document.head
    .querySelectorAll(`link[rel=\"alternate\"][${MANAGED_ALT_ATTR}=\"true\"]`)
    .forEach((node) => node.remove());

  for (const locale of SUPPORTED_LOCALES) {
    const element = document.createElement("link");
    element.setAttribute("rel", "alternate");
    element.setAttribute("hreflang", locale);
    element.setAttribute("href", buildLocalizedUrl(path, locale));
    element.setAttribute(MANAGED_ALT_ATTR, "true");
    document.head.appendChild(element);
  }

  const defaultElement = document.createElement("link");
  defaultElement.setAttribute("rel", "alternate");
  defaultElement.setAttribute("hreflang", "x-default");
  defaultElement.setAttribute("href", buildLocalizedUrl(path, "en"));
  defaultElement.setAttribute(MANAGED_ALT_ATTR, "true");
  document.head.appendChild(defaultElement);

  const canonicalHref = buildLocalizedUrl(path, activeLocale);
  upsertLinkTag('link[rel="canonical"]', { rel: "canonical", href: canonicalHref });
  upsertMetaProperty("og:url", canonicalHref);
  upsertMetaProperty("og:locale", OG_LOCALE_BY_LANG[activeLocale]);
  syncOgLocaleAlternateTags(activeLocale);
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0, left: 0 };
  },
});

router.afterEach((to) => {
  if (typeof window !== "undefined") {
    const marker = window.sessionStorage.getItem(CHUNK_RELOAD_MARKER);
    if (marker === to.fullPath) {
      window.sessionStorage.removeItem(CHUNK_RELOAD_MARKER);
    }
  }

  const titleKey = routeTitleKeys[to.path];
  if (titleKey) {
    const t = i18n.global.t;
    document.title = `${t(titleKey)} | ${BASE_TITLE}`;
  } else {
    document.title = `${BASE_TITLE} | Senior Full-Stack Engineer`;
  }

  const locale = normalizeLocaleCode(i18n.global.locale.value) as (typeof SUPPORTED_LOCALES)[number];
  document.documentElement.setAttribute("lang", locale);
  syncAlternateLanguageTags(to.path, locale);
});

router.onError((error, to) => {
  if (typeof window === "undefined") {
    return;
  }

  const message = error instanceof Error ? error.message : String(error);
  if (!CHUNK_LOAD_ERROR_RE.test(message)) {
    return;
  }

  const targetPath = to?.fullPath ?? window.location.pathname;
  const marker = window.sessionStorage.getItem(CHUNK_RELOAD_MARKER);

  if (marker === targetPath) {
    window.sessionStorage.removeItem(CHUNK_RELOAD_MARKER);
    return;
  }

  window.sessionStorage.setItem(CHUNK_RELOAD_MARKER, targetPath);
  window.location.assign(targetPath);
});

if (import.meta.hot) {
  handleHotUpdate(router);
}

export default router;
