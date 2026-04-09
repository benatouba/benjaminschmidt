<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

import { preloadSiteContent } from "@/composables/useSiteContent";
import { setAppLocale } from "@/i18n";

import type { NavigationItem } from "@/types/site";

const props = defineProps<{
  name: string;
  headline: string;
  navItems: NavigationItem[];
}>();

const route = useRoute();
const router = useRouter();
const { locale, t } = useI18n({ useScope: "global" });

const drawerOpen = ref(false);
const scrolled = ref(false);
let ticking = false;

const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    scrolled.value = window.scrollY > 10;
    ticking = false;
  });
};

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));

const locales = [{ code: "en" }, { code: "de" }, { code: "es" }] as const;

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

const onNavClick = (event: MouseEvent, item: NavigationItem) => {
  if (item.external) {
    return;
  }

  event.preventDefault();
  void router.push(item.to);
};

const onMobileNavClick = (event: MouseEvent, item: NavigationItem) => {
  onNavClick(event, item);
  drawerOpen.value = false;
};

watch(
  () => route.path,
  () => {
    drawerOpen.value = false;
  },
);
</script>

<template>
  <header class="header-shell">
    <a href="#main-content" class="skip-link">Skip to content</a>

    <div :class="['top-bar', { scrolled }]">
      <div class="header-container">
        <a class="identity-link" href="/" @click.prevent="$router.push('/')">
          <div class="identity">
            <img
              class="brand-mark"
              src="/favicon.svg"
              alt=""
              aria-hidden="true"
            />
            <p class="name">{{ props.name }}</p>
            <p class="headline">{{ props.headline }}</p>
          </div>
        </a>

        <nav class="nav-links" :aria-label="t('nav.ariaLabel')">
          <a
            v-for="item in props.navItems"
            :key="item.to"
            :href="item.to"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer noopener' : undefined"
            :class="['nav-link', { active: isActive(item.to) }]"
            :aria-current="isActive(item.to) ? 'page' : undefined"
            @click="onNavClick($event, item)"
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

        <button
          class="menu-toggle"
          :aria-label="drawerOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="drawerOpen"
          @click="drawerOpen = !drawerOpen"
        >
          <svg
            v-if="!drawerOpen"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            v-else
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <Transition name="drawer">
      <div
        v-if="drawerOpen"
        class="mobile-drawer-backdrop"
        @click.self="drawerOpen = false"
      >
        <nav class="mobile-drawer" :aria-label="t('nav.ariaLabel')">
          <a
            v-for="item in props.navItems"
            :key="item.to"
            :href="item.to"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer noopener' : undefined"
            :class="['mobile-nav-link', { active: isActive(item.to) }]"
            :aria-current="isActive(item.to) ? 'page' : undefined"
            @click="onMobileNavClick($event, item)"
          >
            {{ t(item.label) }}
          </a>

          <div class="mobile-lang-switcher">
            <button
              v-for="loc in locales"
              :key="loc.code"
              :class="['lang-btn', { active: locale === loc.code }]"
              @click="setLocale(loc.code)"
            >
              {{ t(`lang.${loc.code}`) }}
            </button>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.header-shell {
  position: sticky;
  top: 0;
  z-index: 20;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 100;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--page-background);
  background: var(--primary);
  border-radius: 0 0 6px 6px;
  text-decoration: none;
  transition: top 0.15s ease;
}

.skip-link:focus {
  top: 0;
}

.top-bar {
  min-height: 80px;
  border-bottom: 1px solid var(--border-color);
  background: rgba(30, 30, 46, 0.86) !important;
  backdrop-filter: blur(12px) saturate(180%);
  transition: box-shadow 0.2s ease;
}

.top-bar.scrolled {
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
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
  width: 40px;
  height: 40px;
  border-radius: 8px;
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
  background: rgba(166, 173, 200, 0.14);
}

.nav-link.active {
  color: var(--primary);
  background: var(--primary-muted);
}

.lang-switcher {
  display: flex;
  gap: 0.125rem;
  padding: 0.2rem;
  background: rgba(166, 173, 200, 0.14);
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

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  color: var(--page-text);
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.menu-toggle:hover {
  background: rgba(166, 173, 200, 0.14);
}

/* ── Mobile drawer ─────────────────────────── */

.mobile-drawer-backdrop {
  position: fixed;
  inset: 0;
  top: 72px;
  z-index: 19;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.mobile-drawer {
  position: absolute;
  top: 0;
  right: 0;
  width: min(300px, 85vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  background: rgba(30, 30, 46, 0.97);
  border-left: 1px solid var(--border-color);
  overflow-y: auto;
}

.mobile-nav-link {
  display: block;
  padding: 0.7rem 0.85rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--page-text-muted);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.15s ease;
}

.mobile-nav-link:hover {
  color: var(--page-text);
  background: rgba(166, 173, 200, 0.14);
}

.mobile-nav-link.active {
  color: var(--primary);
  background: var(--primary-muted);
}

.mobile-lang-switcher {
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;
  padding: 0.25rem;
  background: rgba(166, 173, 200, 0.14);
  border-radius: 6px;
}

.mobile-lang-switcher .lang-btn {
  flex: 1;
  text-align: center;
}

/* Drawer transition */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease;
}

.drawer-enter-active .mobile-drawer,
.drawer-leave-active .mobile-drawer {
  transition: transform 0.2s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .mobile-drawer,
.drawer-leave-to .mobile-drawer {
  transform: translateX(100%);
}

@media (prefers-reduced-motion: reduce) {
  .drawer-enter-active,
  .drawer-leave-active,
  .drawer-enter-active .mobile-drawer,
  .drawer-leave-active .mobile-drawer {
    transition: none;
  }
}

/* ── Responsive ────────────────────────────── */

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
    grid-template-columns: minmax(0, max-content) 1fr auto;
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

  .nav-links,
  .lang-switcher {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}

@media (width <= 640px) {
  .name {
    max-width: 7rem;
  }

  .brand-mark {
    width: 32px;
    height: 32px;
  }

  .lang-btn {
    padding: 0.25rem 0.4rem;
  }
}
</style>
