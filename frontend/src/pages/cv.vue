<script setup lang="ts">
import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import CvSection from "@/components/sections/CvSection.vue";
import { cvAppointments, education, honors } from "@/data/siteContent";
</script>

<template>
  <PageSectionShell title="Curriculum Vitae" kicker="Professional Record">
    <CvSection :appointments="cvAppointments" :education="education" :honors="honors" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#cv) {
  scroll-margin-top: 0;
}
</style>
