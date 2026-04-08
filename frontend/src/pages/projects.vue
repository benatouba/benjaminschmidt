<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
</script>

<template>
  <PageSectionShell
    :title="t('pages.projects.title')"
    :kicker="t('pages.projects.kicker')"
    :copy="t('pages.projects.copy')"
  >
    <ProjectsSection :projects="content.projects" :show-heading="false" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#projects) {
  scroll-margin-top: 0;
}
</style>
