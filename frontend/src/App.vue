<script setup lang="ts">
import PageBackground from "@/components/layout/PageBackground.vue";
import SiteFooter from "@/components/layout/SiteFooter.vue";
import SiteHeader from "@/components/layout/SiteHeader.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const content = useSiteContent();
</script>

<template>
  <v-app>
    <PageBackground />

    <SiteHeader
      :name="content.profile.name"
      :headline="content.profile.headline"
      :nav-items="content.navItems"
    />

    <v-main>
      <RouterView />
    </v-main>

    <SiteFooter />
  </v-app>
</template>
