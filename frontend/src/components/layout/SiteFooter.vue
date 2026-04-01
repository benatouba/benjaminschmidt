<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <footer class="footer">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="footer-content">
        <p class="footer-line">{{ t("footer.builtWith") }}</p>
        <p class="footer-line muted">{{ t("footer.includes") }}</p>
      </div>
    </v-container>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border-color);
  padding-block: 1.5rem 2rem;
  background: rgba(15, 23, 42, 0.5);
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.footer-line {
  margin: 0;
  font-size: 0.875rem;
  color: var(--page-text-muted);
}

.muted {
  color: rgba(148, 163, 184, 0.6);
}
</style>
