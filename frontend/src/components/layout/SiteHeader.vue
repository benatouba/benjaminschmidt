<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

import type { NavigationItem } from "@/types/site";

const props = defineProps<{
  name: string;
  headline: string;
  navItems: NavigationItem[];
}>();

const route = useRoute();
const { locale, t } = useI18n({ useScope: "global" });

const locales = [
  { code: "en", flag: "GB" },
  { code: "de", flag: "DE" },
  { code: "es", flag: "ES" },
] as const;

const setLocale = (code: string) => {
  locale.value = code;
  localStorage.setItem("locale", code);
};

const isActive = (target: string) => {
  if (target === "/") {
    return route.path === "/";
  }

  return route.path.startsWith(target);
};
</script>

<template>
  <header class="header-shell">
    <v-app-bar class="top-bar" elevation="0" color="transparent" height="84">
      <v-container class="header-container px-4 px-sm-6 px-md-8" fluid>
        <div>
          <p class="name">{{ props.name }}</p>
          <p class="headline">{{ props.headline }}</p>
        </div>

        <div class="nav-area">
          <nav class="nav-links" aria-label="Primary">
            <v-btn
              v-for="item in props.navItems"
              :key="item.to"
              :to="item.to"
              :variant="isActive(item.to) ? 'flat' : 'text'"
              :color="isActive(item.to) ? 'primary' : undefined"
              class="nav-link"
              size="small"
            >
              {{ t(item.label) }}
            </v-btn>
          </nav>

          <v-btn-toggle
            :model-value="locale"
            class="lang-switcher"
            density="compact"
            color="primary"
            mandatory
          >
            <v-btn
              v-for="loc in locales"
              :key="loc.code"
              :value="loc.code"
              size="x-small"
              variant="text"
              @click="setLocale(loc.code)"
            >
              {{ t(`lang.${loc.code}`) }}
            </v-btn>
          </v-btn-toggle>
        </div>
      </v-container>
    </v-app-bar>
  </header>
</template>

<style scoped>
.header-shell {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(9px);
}

.top-bar {
  border-bottom: 1px solid rgb(15 76 92 / 14%);
  background: rgb(246 244 238 / 78%);
}

.header-container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
}

.name {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: 0.04em;
  color: rgb(9 40 48);
}

.headline {
  margin: 0.1rem 0 0;
  font-size: 0.92rem;
  color: rgb(15 76 92 / 84%);
}

.nav-area {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.35rem;
}

.nav-link {
  letter-spacing: 0.01em;
  text-transform: none;
  font-weight: 600;
  opacity: 0.9;
}

.lang-switcher {
  flex-shrink: 0;
  border: 1px solid rgb(15 76 92 / 18%);
  border-radius: 8px;
}

@media (width <= 920px) {
  .headline {
    display: none;
  }

  .nav-links {
    justify-content: flex-start;
  }

  .header-container {
    grid-template-columns: 1fr;
  }

  .nav-area {
    flex-wrap: wrap;
  }
}

@media (width <= 640px) {
  .name {
    font-size: 1rem;
  }

  .nav-link {
    min-width: 72px;
    padding-inline: 0.35rem;
    font-size: 0.87rem;
  }
}
</style>
