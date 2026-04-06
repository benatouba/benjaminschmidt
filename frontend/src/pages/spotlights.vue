<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import SpotlightsSection from "@/components/sections/SpotlightsSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
</script>

<template>
  <PageSectionShell :title="t('pages.spotlights.title')" :kicker="t('pages.spotlights.kicker')">
    <SpotlightsSection :posts="content.blogPosts" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#spotlights) {
  scroll-margin-top: 0;
}
</style>
