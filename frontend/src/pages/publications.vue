<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import PublicationsSection from "@/components/sections/PublicationsSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
</script>

<template>
  <PageSectionShell
    :title="t('pages.publications.title')"
    :kicker="t('pages.publications.kicker')"
  >
    <PublicationsSection :publications="content.publications" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#publications) {
  scroll-margin-top: 0;
}
</style>
