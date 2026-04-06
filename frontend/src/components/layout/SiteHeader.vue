<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

import { preloadSiteContent } from "@/composables/useSiteContent";
import { setAppLocale } from "@/i18n";

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

const setLocale = async (code: string) => {
  const nextLocale = await setAppLocale(code);
  await preloadSiteContent(nextLocale);
  locale.value = nextLocale;
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
    <v-app-bar class="top-bar" elevation="0" color="transparent" height="80">
      <v-container class="header-container px-4 px-sm-6 px-md-8" fluid>
        <div class="identity">
          <p class="name">{{ props.name }}</p>
          <p class="headline">{{ props.headline }}</p>
        </div>

        <div class="nav-area">
          <nav class="nav-links" aria-label="Primary">
            <a
              v-for="item in props.navItems"
              :key="item.to"
              :href="item.to"
              :class="['nav-link', { active: isActive(item.to) }]"
              @click.prevent="$router.push(item.to)"
            >
              {{ t(item.label) }}
            </a>
          </nav>

          <div class="lang-switcher">
            <button
              v-for="loc in locales"
              :key="loc.code"
              :class="['lang-btn', { active: locale === loc.code }]"
              @click="setLocale(loc.code)"
            >
              {{ t(`lang.${loc.code}`) }}
            </button>
          </div>
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
}

.top-bar {
  border-bottom: 1px solid var(--border-color);
  background: rgba(15, 23, 42, 0.85) !important;
  backdrop-filter: blur(12px) saturate(180%);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.identity {
  flex-shrink: 0;
}

.name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--page-text);
}

.headline {
  margin: 0.15rem 0 0;
  font-size: 0.85rem;
  color: var(--page-text-muted);
}

.nav-area {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.25rem;
}

.nav-link {
  padding: 0.4rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--page-text-muted);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.nav-link:hover {
  color: var(--page-text);
  background: rgba(148, 163, 184, 0.1);
}

.nav-link.active {
  color: var(--primary);
  background: var(--primary-muted);
}

.lang-switcher {
  display: flex;
  gap: 0.125rem;
  padding: 0.2rem;
  background: rgba(148, 163, 184, 0.08);
  border-radius: 6px;
}

.lang-btn {
  padding: 0.3rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--page-text-muted);
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.lang-btn:hover {
  color: var(--page-text);
}

.lang-btn.active {
  color: var(--primary);
  background: var(--primary-muted);
}

@media (width <= 920px) {
  .headline {
    display: none;
  }

  .header-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .nav-area {
    width: 100%;
    justify-content: space-between;
  }

  .nav-links {
    justify-content: flex-start;
  }
}

@media (width <= 640px) {
  .name {
    font-size: 1rem;
  }

  .nav-link {
    padding: 0.35rem 0.5rem;
    font-size: 0.8rem;
  }
}
</style>
