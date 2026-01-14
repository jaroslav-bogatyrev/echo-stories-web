import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap()],
  site: 'https://echo-stories.cz',
  base: '/', // Changed from '/echo-stories-web' for custom domain
  build: {
    format: 'file',
  },
  server: {
    allowedHosts: true
  }
});
