import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://owli-ai.com",
  output: "static",
  outDir: "./dist",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()]
});
