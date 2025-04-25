// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import path from 'node:path';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), icon()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: 'responsive',
  },
  experimental: {
    responsiveImages: true,
  },
});