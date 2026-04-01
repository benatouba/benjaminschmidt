import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const scientificTheme = {
  dark: true,
  colors: {
    background: "#0f172a",
    surface: "#1e293b",
    primary: "#22d3ee",
    secondary: "#94a3b8",
    accent: "#22d3ee",
    info: "#38bdf8",
    success: "#4ade80",
    warning: "#fbbf24",
    error: "#f87171",
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
      rounded: "lg",
      variant: "flat",
    },
    VCard: {
      rounded: "lg",
      elevation: 0,
    },
    VChip: {
      rounded: "md",
    },
  },
});

export default vuetify;
