import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: "/porfolio.dev-main/",
  integrations: [tailwind()],
});
