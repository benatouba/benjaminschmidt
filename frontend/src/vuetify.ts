import "vuetify/styles";

import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";

const scientificTheme = {
  dark: true,
  colors: {
    background: "#1e1e2e",
    surface: "#313244",
    primary: "#fab387",
    secondary: "#a6adc8",
    accent: "#f9e2af",
    info: "#89dceb",
    success: "#a6e3a1",
    warning: "#f9e2af",
    error: "#f38ba8",
  },
};

export const vuetify = createVuetify({
  blueprint: md3,
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
