import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const scientificTheme = {
  dark: false,
  colors: {
    background: "#f6f4ee",
    surface: "#fffdf7",
    primary: "#0f4c5c",
    secondary: "#5a7d7c",
    accent: "#d98f3d",
    info: "#1f6feb",
    success: "#3b7a57",
    warning: "#b97917",
    error: "#b23a48",
  },
};

export const vuetify = createVuetify({
  blueprint: md3,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "scientificTheme",
    themes: {
      scientificTheme,
    },
  },
  defaults: {
    VBtn: {
      rounded: "pill",
      variant: "flat",
    },
    VCard: {
      rounded: "xl",
      elevation: 1,
    },
  },
});

export default vuetify;
