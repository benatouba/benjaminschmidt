import "vuetify/styles";

import { h } from "vue";
import { createVuetify } from "vuetify";
import type { IconProps, IconSet } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { VSvgIcon } from "vuetify/lib/composables/icons.js";

import { mdiFallbackIconPath, mdiIconPathByName } from "@/icons/mdi";

const mdiAliases = Object.fromEntries(
  Object.entries(mdiIconPathByName).map(([key, path]) => [
    key.replace(/^mdi-/, ""),
    path,
  ]),
);

const appAliases = {
  ...mdiAliases,
};

const resolveIconPath = (value: string): string => {
  const normalized = value.trim();

  if (normalized.startsWith("M")) {
    return normalized;
  }

  if (normalized.startsWith("$")) {
    const alias = appAliases[normalized.slice(1) as keyof typeof appAliases];
    return typeof alias === "string" ? alias : mdiFallbackIconPath;
  }

  return mdiIconPathByName[normalized] ?? mdiFallbackIconPath;
};

const iconSet: IconSet = {
  component: (props: IconProps) => {
    return h(VSvgIcon, {
      ...props,
      icon:
        typeof props.icon === "string"
          ? resolveIconPath(props.icon)
          : props.icon,
    });
  },
};

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
  icons: {
    defaultSet: "mdi",
    aliases: appAliases,
    sets: {
      mdi: iconSet,
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
