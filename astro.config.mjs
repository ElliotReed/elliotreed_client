import path from 'node:path';
// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
    adapter: node({
        mode: 'standalone',
    }),
    experimental: {},
    image: {
        // Used for all Markdown images; not configurable per-image
        responsiveStyles: true,
        // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
        layout: 'constrained',
    },
    integrations: [
        icon(),
        mdx(),
        react(),
    ],
    output: "server",
    server: {
        port: 4300,
        // @ts-ignore - Astro's types don't cover this valid Vite/chokidar option
        // watch: {
        //     ignored: ['**/Config.Msi/**', '**/System Volume Information/**'],
        // },
    },
    trailingSlash: 'always',
    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src'),
                '@images': path.resolve('./src/assets/images'),
            },
        },
    },
});