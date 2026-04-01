import { createI18n } from "vue-i18n";

import { messages as de } from "./locales/de";
import { messages as en } from "./locales/en";
import { messages as es } from "./locales/es";

const savedLocale = typeof localStorage !== "undefined" ? localStorage.getItem("locale") : null;

const i18n = createI18n({
  legacy: false,
  locale: savedLocale ?? "en",
  fallbackLocale: "en",
  messages: { en, de, es },
});

export default i18n;
