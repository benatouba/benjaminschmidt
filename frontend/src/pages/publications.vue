<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import PublicationsSection from "@/components/sections/PublicationsSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
const publicationInsights = computed(() => content.value.publicationInsights);
</script>

<template>
  <PageSectionShell
    :title="t('pages.publications.title')"
    :kicker="t('pages.publications.kicker')"
    :copy="t('pages.publications.copy')"
  >
    <PublicationsSection :insights="publicationInsights" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#publications) {
  scroll-margin-top: 0;
}
</style>
