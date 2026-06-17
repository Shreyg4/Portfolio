import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

// Newest first; `order` (asc) breaks ties within the same date.
const byDateDesc = (a: Project, b: Project) =>
    b.data.date.getTime() - a.data.date.getTime() ||
    (a.data.order ?? 0) - (b.data.order ?? 0);

/** Featured projects for the main grid, reverse-chronological. */
export async function getFeaturedProjects(): Promise<Project[]> {
    const projects = await getCollection("projects", (p) => p.data.featured);
    return projects.sort(byDateDesc);
}

/** Owner-curated "notable" pool for the closing showcase, reverse-chronological. */
export async function getNotableProjects(): Promise<Project[]> {
    const projects = await getCollection("projects", (p) => p.data.notable);
    return projects.sort(byDateDesc);
}
