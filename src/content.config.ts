import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One Markdown file per project. Adding/removing/reordering a project = editing
// a file (portfolioPlan §8). `featured` → main grid; `notable` → closing showcase.
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        oneLiner: z.string(),
        role: z.string(),
        timeframe: z.string(),
        date: z.coerce.date(), // drives the reverse-chronological sort (newest first)
        status: z.string().default("complete"),
        stack: z.array(z.string()), // the skills/tech this project demonstrates (= Skills, per-project)
        links: z
            .object({
                live: z.string().url().optional(),
                repo: z.string().url().optional(),
                video: z.string().url().optional(),
            })
            .default({}),
        featured: z.boolean().default(false), // main grid
        notable: z.boolean().default(false), // closing "more projects" showcase
        order: z.number().optional(), // optional tie-breaker within the same date
        thumbnail: z.string().optional(),
        note: z.string().optional(), // small callout on the card (e.g. EvacLogix games→AI callback)
        award: z
            .object({ place: z.string(), event: z.string() })
            .optional(), // renders the badge on game cards (Phase 6)
    }),
});

export const collections = { projects };
