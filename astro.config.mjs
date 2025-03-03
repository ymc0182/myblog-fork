import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

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