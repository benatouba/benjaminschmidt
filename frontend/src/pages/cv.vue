<script setup lang="ts">
import CvSection from "@/components/sections/CvSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const content = useSiteContent();
</script>

<template>
  <CvSection
    :profile="content.profile"
    :highlights="content.impactHighlights"
    :appointments="content.cvAppointments"
    :education="content.education"
    :honors="content.honors"
    :certifications="content.certifications"
    :clients="content.selectedClients"
  />
</template>

<style scoped>
:deep(#cv) {
  scroll-margin-top: 0;
}
</style>
