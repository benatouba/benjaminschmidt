<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

import { useSiteContent } from "@/composables/useSiteContent";
import type { NavigationItem } from "@/types/site";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
const router = useRouter();

const year = new Date().getFullYear();

const socialLinks = computed(() => {
  const iconMap: Record<string, string> = {
    GitHub: "mdi-github",
    LinkedIn: "mdi-linkedin",
    ORCID: "mdi-account-badge-outline",
    "Google Scholar": "mdi-school-outline",
  };

  return content.value.externalProfiles
    .filter((p) => p.href)
    .map((p) => ({
      label: p.label,
      href: p.href!,
      icon: iconMap[p.label] ?? p.icon,
    }));
});

const onFooterNavClick = (event: MouseEvent, item: NavigationItem) => {
  if (item.external) {
    return;
  }

  event.preventDefault();
  void router.push(item.to);
};
</script>

<template>
  <footer class="footer">
    <v-container fluid>
      <div class="footer-grid">
        <div class="footer-brand">
          <p class="footer-name">{{ t("footer.copyright", { year }) }}</p>
          <p class="footer-tagline">{{ t("footer.tagline") }}</p>
          <p class="footer-location">
            <v-icon icon="mdi-map-marker-outline" size="14" />
            {{ t("footer.location") }}
          </p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <a
            v-for="item in content.navItems"
            :key="item.to"
            :href="item.to"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer noopener' : undefined"
            class="footer-nav-link"
            @click="onFooterNavClick($event, item)"
          >
            {{ t(item.label) }}
          </a>
        </nav>

        <div class="footer-links">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            class="footer-link"
            target="_blank"
            rel="noreferrer"
            :aria-label="link.label"
          >
            <v-icon :icon="link.icon" size="18" />
          </a>
        </div>

        <p class="footer-built">{{ t("footer.builtWith") }}</p>
      </div>
    </v-container>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border-color);
  padding-block: 2rem 2.5rem;
  background: rgba(30, 30, 46, 0.56);
}

.footer-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.footer-name {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--page-text);
}

.footer-tagline {
  margin: 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.footer-location {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  color: var(--page-text-muted);
}

.footer-location .v-icon {
  color: var(--primary);
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.5rem;
}

.footer-nav-link {
  font-size: 0.8rem;
  color: var(--page-text-muted);
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  transition: color 0.15s ease;
}

.footer-nav-link:hover {
  color: var(--primary);
}

.footer-links {
  display: flex;
  gap: 0.75rem;
}

.footer-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: var(--page-text-muted);
  background: rgba(166, 173, 200, 0.12);
  border: 1px solid var(--border-color);
  text-decoration: none;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    background 0.15s ease;
}

.footer-link:hover {
  color: var(--primary);
  border-color: rgba(250, 179, 135, 0.52);
  background: rgba(250, 179, 135, 0.12);
}

.footer-built {
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 0.7rem;
  color: rgba(166, 173, 200, 0.55);
}

@media (width <= 600px) {
  .footer-grid {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-built {
    text-align: left;
  }
}
</style>
