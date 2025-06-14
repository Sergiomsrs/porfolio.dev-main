import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isProd ? 'https://sergiomsrs.github.io/porfolio.dev-main/' : undefined,
  base: isProd ? '/porfolio.dev-main/' : '/',
  integrations: [tailwind()],
});
