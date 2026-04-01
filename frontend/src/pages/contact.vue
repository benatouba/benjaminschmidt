<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
</script>

<template>
  <PageSectionShell :title="t('pages.contact.title')" :kicker="t('pages.contact.kicker')">
    <ContactSection :profile="content.profile" :links="content.contactLinks" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#contact) {
  scroll-margin-top: 0;
}
</style>
