<script setup lang="ts">
import { computed } from "vue";

import { mdiFallbackIconPath, mdiIconPathByName } from "@/icons/mdi";

const props = withDefaults(
  defineProps<{
    icon: string;
    size?: number | string;
    title?: string;
    decorative?: boolean;
  }>(),
  {
    size: 16,
    decorative: true,
  },
);

const normalizedIcon = computed(() => props.icon.trim());

const iconPath = computed(() => {
  const value = normalizedIcon.value;

  if (value.startsWith("M")) {
    return value;
  }

  return (
    mdiIconPathByName[value] ??
    mdiIconPathByName[`mdi-${value}`] ??
    mdiFallbackIconPath
  );
});

const iconSize = computed(() =>
  typeof props.size === "number" ? `${props.size}` : props.size,
);
</script>

<template>
  <svg
    class="app-icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="iconSize"
    :height="iconSize"
    viewBox="0 0 24 24"
    :role="decorative ? undefined : 'img'"
    :aria-hidden="decorative ? 'true' : undefined"
    focusable="false"
  >
    <title v-if="title">{{ title }}</title>
    <path :d="iconPath" />
  </svg>
</template>

<style scoped>
.app-icon {
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
  fill: currentColor;
}
</style>
