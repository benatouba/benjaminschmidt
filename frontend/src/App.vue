<script setup lang="ts">
import PageBackground from "@/components/layout/PageBackground.vue";
import ScrollToTop from "@/components/layout/ScrollToTop.vue";
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

    <v-main id="main-content">
      <RouterView v-slot="{ Component }">
        <Transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </v-main>

    <SiteFooter />
    <ScrollToTop />
  </v-app>
</template>
