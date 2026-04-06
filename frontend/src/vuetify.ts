import "vuetify/styles";

import { h } from "vue";
import { createVuetify } from "vuetify";
import type { IconProps, IconSet } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import { mdiFallbackIconPath, mdiIconPathByName } from "@/icons/mdi";

const mdiAliases = Object.fromEntries(
  Object.entries(mdiIconPathByName).map(([key, path]) => [key.replace(/^mdi-/, ""), path]),
);

const appAliases = {
  ...aliases,
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
    if (typeof props.icon !== "string") {
      return h(mdi.component, props);
    }

    return h(mdi.component, {
      ...props,
      icon: resolveIconPath(props.icon),
    });
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
