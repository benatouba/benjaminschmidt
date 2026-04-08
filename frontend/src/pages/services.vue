<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
</script>

<template>
  <PageSectionShell
    :title="t('pages.services.title')"
    :kicker="t('pages.services.kicker')"
    :copy="t('pages.services.copy')"
  >
    <ServicesSection :services="content.services" :show-heading="false" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#services) {
  scroll-margin-top: 0;
}
</style>
