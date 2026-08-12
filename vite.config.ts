// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export target (GitHub Pages, custom domain at the root):
// - every route is prerendered to HTML at build time
// - the browser bundle + prerendered HTML land directly in ./dist
// - no server runtime is deployed, so nitro is disabled
export default defineConfig({
  vite: {
    base: "/",
    environments: {
      client: { build: { outDir: "dist" } },
      server: { build: { outDir: ".tanstack/server" } },
    },
  },
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
    pages: [{ path: "/sitemap.xml" }],
    spa: { enabled: false },
  },
});
