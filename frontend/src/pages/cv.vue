<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import CvSection from "@/components/sections/CvSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
</script>

<template>
  <PageSectionShell :title="t('pages.cv.title')" :kicker="t('pages.cv.kicker')" :copy="t('pages.cv.copy')">
    <CvSection
      :profile="content.profile"
      :highlights="content.impactHighlights"
      :appointments="content.cvAppointments"
      :education="content.education"
      :honors="content.honors"
      :certifications="content.certifications"
      :clients="content.selectedClients"
    />
  </PageSectionShell>
</template>

<style scoped>
:deep(#cv) {
  scroll-margin-top: 0;
}
</style>
