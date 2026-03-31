<script setup lang="ts">
import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import ProfilesSection from "@/components/sections/ProfilesSection.vue";
import { externalProfiles } from "@/data/siteContent";
</script>

<template>
  <PageSectionShell title="Linked Profiles" kicker="Accounts and Identity">
    <ProfilesSection :profiles="externalProfiles" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#profiles) {
  scroll-margin-top: 0;
}
</style>
