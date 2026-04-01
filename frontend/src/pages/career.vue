<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import CareerSection from "@/components/sections/CareerSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
</script>

<template>
  <PageSectionShell :title="t('pages.career.title')" :kicker="t('pages.career.kicker')">
    <CareerSection :stages="content.careerStages" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#career) {
  scroll-margin-top: 0;
}
</style>
