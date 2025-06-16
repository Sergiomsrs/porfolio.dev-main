import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://sergiomsrs.github.io',
  base: '/portfolio/',
  integrations: [tailwind()],
  build: {
    format: 'directory'
  }
});