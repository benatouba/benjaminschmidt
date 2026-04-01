<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import ProfilesSection from "@/components/sections/ProfilesSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
</script>

<template>
  <PageSectionShell :title="t('pages.profiles.title')" :kicker="t('pages.profiles.kicker')">
    <ProfilesSection :profiles="content.externalProfiles" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#profiles) {
  scroll-margin-top: 0;
}
</style>
