import "vuetify/styles";

import { h } from "vue";
import { createVuetify } from "vuetify";
import type { IconProps, IconSet } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi as mdiSvg } from "vuetify/iconsets/mdi-svg";

import { mdiFallbackIconPath, mdiIconPathByName } from "@/icons/mdi";

const mdi: IconSet = {
  component: (props: IconProps) => {
    const rawIcon = props.icon;

    if (typeof rawIcon === "string") {
      const iconPath = rawIcon.startsWith("M")
        ? rawIcon
        : mdiIconPathByName[rawIcon] ?? mdiFallbackIconPath;

      return h(mdiSvg.component, {
        ...props,
        icon: iconPath,
      });
    }

    return h(mdiSvg.component, props);
  },
};

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
