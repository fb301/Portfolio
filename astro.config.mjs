// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), playformCompress()],
  vite: { plugins: [tailwindcss()] },
  adapter: netlify({
    devFeatures: {
      environmentVariables: true,
      images: false,
    },
  }),
});
