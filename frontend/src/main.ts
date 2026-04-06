import { createApp } from "vue";
import "@fontsource/source-sans-3/latin-400.css";
import "@fontsource/source-sans-3/latin-600.css";
import "@fontsource/source-sans-3/latin-700.css";

import "./style.css";
import App from "./App.vue";
import { initialLocale, preloadLocaleMessages } from "./i18n";
import router from "./router";
import vuetify from "./vuetify";
import i18n from "./i18n";

import { preloadSiteContent } from "@/composables/useSiteContent";

const bootstrap = async () => {
  await Promise.all([
    preloadLocaleMessages(initialLocale),
    preloadSiteContent(initialLocale),
  ]);

  const app = createApp(App);

  app.use(router);
  app.use(vuetify);
  app.use(i18n);

  await router.isReady();
  app.mount("#app");
};

void bootstrap();
