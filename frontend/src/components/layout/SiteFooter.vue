<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const year = new Date().getFullYear();

const quickLinks = [
  { label: "GitHub", href: "https://github.com/benatouba", icon: "mdi-github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
    icon: "mdi-linkedin",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-9669-3360",
    icon: "mdi-account-badge-outline",
  },
  {
    label: "Scholar",
    href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
    icon: "mdi-school-outline",
  },
];
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

        <div class="footer-links">
          <a
            v-for="link in quickLinks"
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
  background: rgba(15, 23, 42, 0.5);
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
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid var(--border-color);
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.footer-link:hover {
  color: var(--primary);
  border-color: rgba(34, 211, 238, 0.3);
  background: rgba(34, 211, 238, 0.08);
}

.footer-built {
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 0.7rem;
  color: rgba(148, 163, 184, 0.4);
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
