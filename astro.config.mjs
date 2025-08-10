// @ts-check
import { defineConfig } from "astro/config";

// import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

import playformCompress from "@playform/compress";
import { visualizer } from "rollup-plugin-visualizer";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [playformCompress(), compressor()],
  vite: {
    plugins: [
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
    ],
  },
  adapter: netlify({
    edgeMiddleware: true,
    devFeatures: {
      environmentVariables: true,
      images: true,
    },
  }),
});
