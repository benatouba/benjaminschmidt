import { createApp } from "vue";
import "@fontsource/merriweather/latin-300.css";
import "@fontsource/merriweather/latin-700.css";
import "@fontsource/source-sans-3/latin-400.css";
import "@fontsource/source-sans-3/latin-600.css";
import "@fontsource/source-sans-3/latin-700.css";

import "./style.css";
import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";
import vuetify from "./vuetify";

createApp(App).use(router).use(vuetify).use(i18n).mount("#app");
