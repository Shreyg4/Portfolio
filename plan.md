# Portfolio Build Plan — Phase by Phase

**Owner:** Shreyas Sundar Ganesh
**Created:** 2026-06-16
**Status:** Pre-implementation (no code yet)
**Source of truth:** [portfolioPlan.md](portfolioPlan.md) — this doc is the *execution* breakdown of §12's roadmap.

**Strategy:** Ship **v1 fast** (Phases 0–6) to get a linkable URL on applications this week, then **iterate** (Phases 7–9) to add the games, polish media, and harden SEO/perf. Don't let polish keep the site dark while actively applying.

**Stack (locked):** Astro + Tailwind CSS · Content Collections (Markdown) · Vercel (free subdomain) · mailto (no backend in v1).

---

## Phase 0 — Scaffold & deploy pipeline
**Goal:** Prove the deploy pipeline end-to-end with a blank page before any real content.

- [ ] `npm create astro@latest` — minimal/empty template, TypeScript strict.
- [ ] Add Tailwind via `npx astro add tailwind`.
- [ ] Add integrations: `@astrojs/sitemap`, `@astrojs/mdx`.
- [ ] Init git repo; create public GitHub repo (`portfolio` or `shreyg4.github.io`).
- [ ] Connect repo to Vercel → auto-deploy on push to `main` + PR previews.
- [ ] Configure `site` in `astro.config.mjs`.

**Exit criteria:** A blank page is live on a `*.vercel.app` URL and redeploys automatically on push.

---

## Phase 1 — Design system & shell
**Goal:** Lock the visual language and reusable layout primitives. (portfolioPlan §7)

- [ ] Define tokens: near-black/zinc neutral base + **one** accent (electric blue or violet). Max 3 colors total.
- [ ] Type: Inter/Geist (sans) + one mono (JetBrains/Geist Mono) for tags/code. 2 fonts max. Preload fonts.
- [ ] Dark mode default + light toggle; respect `prefers-reduced-motion`.
- [ ] Spacing scale on 4/8px grid; max content width ~1100px.
- [ ] Base components: `BaseLayout.astro`, `Nav.astro` (sticky), `Footer.astro`.
- [ ] Nav + footer both carry: Work · Journey · Skills · Contact · GitHub · LinkedIn · Email · [Resume ↓]. (Rule 8)

**Exit criteria:** Sticky nav + footer render on a themed empty page; theme toggle works; links jump to (yet-empty) section anchors.

---

## Phase 2 — Hero (folds in About)
**Goal:** Name + slogan recognizable in <1s. (Rules 2 & 5)

- [ ] H1 name + slogan subhead + availability micro-line.
- [ ] Folded-in 2–3 sentence bio + quick-facts line (UW Bothell · GPA 3.64 · 5× Dean's List · Grad June 2027 · AZ-900).
- [ ] **Awards strip:** 🏆 1st AMES 2022 · 🥈 2nd AMES 2023 (prominent).
- [ ] Availability badge: "Available now — open to SWE/research internships."
- [ ] CTAs: View Work (scroll) · Download Résumé (PDF) · Email (mailto).
- [ ] Placeholder headshot + placeholder `resume.pdf` in `/public`.
- [ ] Restrained motion only — no game gimmick. (Rule 4)

**Exit criteria:** Hero communicates who/what/availability above the fold with working CTAs (placeholders OK).

---

## Phase 3 — Content collection & project schema
**Goal:** Data layer so adding a project = adding a Markdown file. (portfolioPlan §8)

- [ ] Define `projects` content collection schema: `title, oneLiner, role, timeframe, status, stack[], links{live,repo,video}, featured:bool, order, thumbnail`.
- [ ] Author the **4 known featured** as Markdown: ConvoySync, EvacLogix, AI E-Commerce Pipeline, MMO RPG Database (§6.1–6.4).
- [ ] Author the **More Projects** list entries (SpaceExplorer, MoviesEDA, choose-your-own-adventure, Calculator).
- [ ] Metrics policy: only real figures (team size, commit counts, "thousands of entries / 10+ categories"); else qualitative.

**Exit criteria:** Collection type-checks; all 4 featured + more-projects content exists as files.

---

## Phase 4 — Featured Work (2nd section) + optional case-study pages
**Goal:** Self-contained cards readable inline; depth optional. (Rules 2 & 7)

- [ ] `ProjectCard.astro`: thumbnail/GIF, name, one-liner, problem→result (1 line each), tech tags, Live · Code (+ optional Read more →).
- [ ] Featured grid in deliberate order: ConvoySync, EvacLogix, AI Pipeline, MMO RPG (games added in Phase 7).
- [ ] `CaseStudyLayout.astro` + `/work/[slug]` dynamic route for optional deep pages.
- [ ] Consistent thumbnail aspect ratio (placeholders until media in Phase 8).

**Exit criteria:** Featured Work renders as the 2nd section; each card's gist is clear without clicking; deep pages route correctly.

---

## Phase 5 — My Journey timeline
**Goal:** The hook — games → data → AI as deliberate growth. (portfolioPlan §4)

- [ ] `Timeline.astro` — 3 acts: 2022–23 award-winning game dev · 2025 pivot to data & AI · 2026 intelligent systems & full-stack.
- [ ] Flag EvacLogix as the explicit games→AI callback.
- [ ] Reference AI fundamentals (search/adversarial/RL) — **no CS188 links**. (Rule + §14)
- [ ] Closing line tying game-dev instincts to current AI/full-stack work.

**Exit criteria:** Timeline reads as a coherent growth arc, placed *after* Featured Work.

---

## Phase 6 — Skills + Contact → v1 LAUNCH
**Goal:** Finish v1 content and ship to the free subdomain.

- [ ] `SkillGroup.astro` — grouped lists (Languages, AI/ML, Data, Web, Game/Graphics, Tools/Cloud). **No skill bars.** (Rule 6)
- [ ] Lead-in counts line ("6 shipped projects · 2 award-winning games · ~4 yrs coding").
- [ ] Contact section: email (lightly obfuscated mailto), GitHub, LinkedIn, Resume PDF + friendly "email is fastest" line.
- [ ] Final pass: nav anchors, mobile responsiveness, broken-link check.

**Exit criteria:** **v1 is live on the `*.vercel.app` subdomain** and ready to drop into applications.

---

## Phase 7 — Add the award-winning games
**Goal:** Complete the 6 featured projects once framing is set. (§6.5–6.6)

- [ ] Add Amalgamate (🏆 1st AMES 2022, itch.io link, NPC pathing + level design).
- [ ] Add 7th Samurai (🥈 2nd AMES 2023, itch.io link, VFX/boss fight/animation).
- [ ] Note in 7th Samurai case study how it's more complex than Amalgamate (growth beat).
- [ ] Slot both after the AI/full-stack four in Featured Work.

**Exit criteria:** All 6 featured projects live with correct award framing.

---

## Phase 8 — Media polish
**Goal:** Replace placeholders with real captures. (portfolioPlan §11)

- [ ] Real screenshots/GIFs for each featured project (pull game captures from itch.io).
- [ ] ConvoySync mobile screen recording.
- [ ] Confirm SpaceExplorer web-deployable → deploy + link if so.
- [ ] Verify each linked repo has a clean README.
- [ ] Final resume PDF (stale "Summer 2026" line fixed) + professional headshot.

**Exit criteria:** No placeholder media remains; all featured projects show real visuals.

---

## Phase 9 — SEO / OG / analytics / a11y / performance
**Goal:** Recruiter-grade polish; Lighthouse 95+. (portfolioPlan §10)

- [ ] Per-page `<title>`/meta description; semantic headings; sitemap.xml + robots.txt.
- [ ] OG/Twitter card image (name + tagline).
- [ ] Privacy-friendly analytics (Plausible or GoatCounter) — track traffic + resume downloads.
- [ ] A11y: alt text, contrast (esp. dark), keyboard nav, focus states, `prefers-reduced-motion`.
- [ ] Run Lighthouse → target 95+ across all four categories. (Rule 9)

**Exit criteria:** Lighthouse ≥95 on Performance/A11y/Best-Practices/SEO; shared links render a clean card.

---

## Later / deferred (post-v1)
- Custom domain (~$12/yr): `shreyassundarganesh.com` / `shreyg.dev` / `shreyassg.dev` → DNS + HTTPS.
- Contact form (Formspree/Netlify Forms) if mailto proves insufficient.

---

## Guardrails (carry through every phase — portfolioPlan §14)
- Recruiter-first: if a feature doesn't help land the internship, cut or defer.
- Games = range & growth, never "I only make games."
- **No CS188 solution repo links.**
- Depth over volume; curate hard.
- Every claim concrete & verifiable; **no invented metrics.**
- Fix the resume's stale "Summer 2026" objective before linking the PDF.
- Performance & accessibility are features recruiters feel.

---

## Critical path (fastest route to a linkable URL)
**Phase 0 → 1 → 2 → 3 → 4 → 5 → 6 = v1 live.** Phases 7–9 iterate on the live site without blocking applications.
