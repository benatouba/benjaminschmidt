import { createI18n } from "vue-i18n";

const localeModuleLoaders = {
  en: () => import("./locales/en"),
  de: () => import("./locales/de"),
  es: () => import("./locales/es"),
} as const;

export type AppLocale = keyof typeof localeModuleLoaders;

const localeCodes = Object.keys(localeModuleLoaders) as AppLocale[];

export const normalizeLocaleCode = (value: string | null | undefined): AppLocale => {
  return value && localeCodes.includes(value as AppLocale) ? (value as AppLocale) : "en";
};

const localeFromQuery = (() => {
  if (typeof window === "undefined") {
    return null;
  }

  const value = new URLSearchParams(window.location.search).get("lang");
  if (!value) {
    return null;
  }

  return normalizeLocaleCode(value);
})();

const savedLocale = typeof localStorage !== "undefined" ? localStorage.getItem("locale") : null;
export const initialLocale = localeFromQuery ?? normalizeLocaleCode(savedLocale);

const loadedLocales = new Set<AppLocale>();

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: "en",
  messages: {},
});

export const preloadLocaleMessages = async (value: string | null | undefined): Promise<AppLocale> => {
  const locale = normalizeLocaleCode(value);

  if (!loadedLocales.has(locale)) {
    const { messages } = await localeModuleLoaders[locale]();
    i18n.global.setLocaleMessage(locale, messages);
    loadedLocales.add(locale);
  }

  return locale;
};

export const setAppLocale = async (value: string | null | undefined): Promise<AppLocale> => {
  const locale = await preloadLocaleMessages(value);
  i18n.global.locale.value = locale;

  if (typeof localStorage !== "undefined") {
    localStorage.setItem("locale", locale);
  }

  return locale;
};

export default i18n;
