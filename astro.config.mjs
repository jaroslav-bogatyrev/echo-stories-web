import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://jaroslav-bogatyrev.github.io',
  base: '/echo-stories-web',
  build: {
    format: 'file',
  },
  server: {
    allowedHosts: true
  }
});
