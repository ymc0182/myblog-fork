import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],

  devToolbar: {
    enabled: false
  },

  site: 'https://jb18.cm',

  server: {
      host: true,
      port: 4321,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});