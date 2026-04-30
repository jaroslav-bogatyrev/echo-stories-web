import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      serialize(item) {
        // Add .html extension to all URLs except root
        if (item.url !== 'https://echo-stories.cz/') {
          item.url = item.url.replace(/\/$/, '') + '.html';
        }
        return item;
      }
    })
  ],
  site: 'https://echo-stories.cz',
  base: '/', // Changed from '/echo-stories-web' for custom domain
  build: {
    format: 'file',
  },
  server: {
    allowedHosts: true
  }
});
