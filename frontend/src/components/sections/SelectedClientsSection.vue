<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { SelectedClient } from "@/types/site";

defineProps<{
  clients: SelectedClient[];
}>();

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="clients" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("clients.kicker") }}</p>
        <h2>{{ t("clients.heading") }}</h2>
        <p class="section-copy">{{ t("clients.copy") }}</p>
      </div>

      <div class="clients-grid reveal-up" style="--delay: 120ms">
        <article
          v-for="client in clients"
          :key="client.name"
          class="client-card"
        >
          <h3 class="client-name">{{ client.name }}</h3>
          <p class="client-note">{{ client.note }}</p>
        </article>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.section-copy {
  margin: 0.55rem 0 0;
  max-width: 66ch;
  font-size: 0.96rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
  gap: 0.85rem;
}

.client-card {
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(49, 50, 68, 0.56);
}

.client-name {
  margin: 0;
  font-size: 0.96rem;
  font-weight: 650;
  color: var(--page-text);
}

.client-note {
  margin: 0.35rem 0 0;
  font-size: 0.84rem;
  line-height: 1.6;
  color: var(--page-text-muted);
}
</style>
