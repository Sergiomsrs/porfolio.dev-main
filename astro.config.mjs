import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://sergiomsrs.github.io',
  base: '/porfolio.dev-main/',
  integrations: [tailwind()],
  build: {
    format: 'directory'
  }
});