import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const projects = defineCollection({
  loader: file("src/data.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    imagePath: z.string(),
  }),
});

const images = defineCollection({
  loader: glob({ pattern: ["*.{webp,svg}"], base: "src/assets" }),
});

export const collections = { projects, images };
