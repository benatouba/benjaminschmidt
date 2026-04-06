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
  { code: "en" },
  { code: "de" },
  { code: "es" },
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
    <div class="top-bar">
      <div class="header-container">
        <a class="identity-link" href="/" @click.prevent="$router.push('/')">
          <div class="identity">
            <img class="brand-mark" src="/favicon.svg" alt="" aria-hidden="true" />
            <p class="name">{{ props.name }}</p>
            <p class="headline">{{ props.headline }}</p>
          </div>
        </a>

        <nav class="nav-links" :aria-label="t('nav.ariaLabel')">
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
    </div>
  </header>
</template>

<style scoped>
.header-shell {
  position: sticky;
  top: 0;
  z-index: 20;
}

.top-bar {
  min-height: 80px;
  border-bottom: 1px solid var(--border-color);
  background: rgba(15, 23, 42, 0.85) !important;
  backdrop-filter: blur(12px) saturate(180%);
}

.header-container {
  display: grid;
  grid-template-columns: minmax(0, max-content) minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  min-height: 80px;
  padding-inline: clamp(1rem, 2.5vw, 2rem);
}

.identity {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "icon name"
    "icon headline";
  column-gap: 0.6rem;
  align-items: center;
  min-width: 0;
}

.identity-link {
  min-width: 0;
  text-decoration: none;
}

.brand-mark {
  grid-area: icon;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: block;
}

.name {
  grid-area: name;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--page-text);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.headline {
  grid-area: headline;
  margin: 0.15rem 0 0;
  font-size: 0.85rem;
  color: var(--page-text-muted);
}

.nav-links {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 0.25rem;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  padding-block: 0.1rem;
}

.nav-links::-webkit-scrollbar {
  display: none;
}

.nav-link {
  flex: 0 0 auto;
  padding: 0.4rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
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

@media (width <= 1100px) {
  .headline {
    display: none;
  }

  .name {
    max-width: 12.5rem;
  }
}

@media (width <= 920px) {
  .header-container {
    gap: 0.6rem;
    min-height: 72px;
  }

  .top-bar {
    min-height: 72px;
  }

  .name {
    max-width: 10rem;
    font-size: 1rem;
  }

  .nav-link {
    padding: 0.35rem 0.55rem;
    font-size: 0.8rem;
  }

  .lang-switcher {
    flex-shrink: 0;
    gap: 0;
    padding: 0.15rem;
  }
}

@media (width <= 640px) {
  .name {
    max-width: 7rem;
  }

  .brand-mark {
    width: 24px;
    height: 24px;
  }

  .lang-btn {
    padding: 0.25rem 0.4rem;
  }
}
</style>
