import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import type { Plugin } from "vite";
import VueRouter from "vue-router/vite";
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const srcPath = fileURLToPath(new URL("./src", import.meta.url));

/**
 * Removes `<link rel="modulepreload">` tags for non-critical chunks (e.g. icons)
 * from the generated index.html so they don't compete with the critical path.
 * The chunks still load on demand when first needed.
 */
function stripNonCriticalModulePreload(): Plugin {
  return {
    name: "strip-non-critical-modulepreload",
    enforce: "post",
    transformIndexHtml(html) {
      return html.replace(
        /<link\s+rel="modulepreload"[^>]*href="[^"]*\/icons-[^"]*\.js"[^>]*>\s*/g,
        "",
      );
    },
  };
}

export default defineConfig({
  plugins: [
    VueRouter({
      dts: "src/route-map.d.ts",
      routesFolder: "src/pages",
    }),
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
    }),
    stripNonCriticalModulePreload(),
  ],
  resolve: {
    alias: {
      "@": srcPath,
    },
  },
});
