import { createApp } from "vue";
import "@fontsource/merriweather/300.css";
import "@fontsource/merriweather/700.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/source-sans-3/700.css";

import "./style.css";
import App from "./App.vue";
import router from "./router";
import vuetify from "./vuetify";

createApp(App).use(router).use(vuetify).mount("#app");
