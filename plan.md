# Portfolio Build Plan — Phase by Phase

**Owner:** Shreyas Sundar Ganesh
**Created:** 2026-06-16
**Status:** Pre-implementation (no code yet)
**Source of truth:** [portfolioPlan.md](portfolioPlan.md) — this doc is the *execution* breakdown of §12's roadmap.

**Strategy:** Ship **v1 fast** (Phases 0–5) to get a linkable URL on applications this week, then **iterate** (Phases 6–8) to add the games, polish media, and harden SEO/perf. Don't let polish keep the site dark while actively applying.

**IA note (locked):** Work, Journey, and Skills are **one unified `Projects` section** — cards run newest→oldest (journey via ordering), each card shows the skills it demonstrates, awards live on the game cards, and an owner-curated "notable" showcase closes the section. No standalone Journey or Skills section. (portfolioPlan §3/§4)

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
**Visual reference:** https://v4.brittanychiang.com/ — borrow its *layout/motion patterns* (scroll-aware nav, fixed social rail, staggered fade-ins, mono accents), **keep our own warm-stone + cyan palette** (not her navy/mint). See portfolioPlan §7 for the borrow/don't-borrow list.

**Done (in code):**
- [x] Define tokens: warm near-black base (`#1C1917`) + **one** cyan accent (`#7DF9FF`) + light text (`#EDEDED`). 3 colors total.
- [x] Type: Geist (sans) + JetBrains Mono (tags/code/labels). 2 fonts max. Preloaded.
- [x] Dark mode only — single consistent theme, no toggle; `prefers-reduced-motion` handled globally.
- [x] Spacing scale on 4/8px grid; max content width ~1100px (`wrapper` utility).
- [x] Base components: `BaseLayout.astro`, `Nav.astro` (sticky), `Footer.astro`.
- [x] **Nav** — no name/logo. **All items pinned right** as one cluster: **Home · Projects · Contact · [Resume ↓]** (new IA — Journey/Skills folded into Projects). ("Home" jumps to the hero.) No social links in the nav. **Driven by `sectionLinks` in `consts.ts`** (edit data, not markup).
- [x] **Footer — minimal:** colophon (© {year} + name) + small social icons + "↑ Back to top". Not a Contact duplicate. **Driven by `socialLinks` in `consts.ts`.**
- [x] Section links are in-page anchor jumps (`#home`/`#projects`/`#contact`), single scroll — not separate routes (placeholder section anchors render so jumps work).

**Borrowed patterns from the new reference (done in code):**
- [x] **Scroll-aware nav:** visible at top, hides on scroll-down, reveals on scroll-up (`#site-nav` translate + scroll listener); honors `prefers-reduced-motion`. Mono nav labels for the reference vibe.
- [x] **`SocialRail.astro`:** fixed vertical social-icon rail, **bottom-left**, persistent while scrolling (GitHub · LinkedIn · Email, inline SVGs). Driven by `socialLinks`; hidden on mobile. **No** right-side email rail.
- [x] **`Section.astro` fade-in wrapper:** staggers a subtle fade/translate-in on its children as it enters the viewport (IntersectionObserver → `.is-visible`; styles in `global.css`), collapses to instant under `prefers-reduced-motion`, with a `<noscript>` fallback. **Every section renders through this.**
- [x] **Data-driven check:** nav + section anchors derive from `sectionLinks`; footer + rail derive from `socialLinks` (both in `consts.ts`). Add/delete = data edit only — sets up easy future sections (e.g. Experience — portfolioPlan §8).
- [x] **Nav aligned to new IA:** Home · Projects · Contact · [Resume ↓] (Journey + Skills folded into Projects).

**Exit criteria (met):** Themed page with scroll-aware sticky nav + fixed social rail + minimal footer; anchor links jump to (yet-empty) sections; sections fade-reveal on scroll (and don't, under reduced-motion). Build green.

---

## Phase 2 — Hero (folds in About)
**Goal:** Name + slogan recognizable in <1s. (Rules 2 & 5)

- [ ] H1 name + slogan subhead + availability micro-line.
- [ ] Folded-in 2–3 sentence bio + quick-facts line (UW Bothell · GPA 3.64 · 5× Dean's List · Grad June 2027 · AZ-900).
- [ ] **No awards strip** — the two AMES awards move to the game project cards in the Projects section (§6.5–6.6 / Phase 6).
- [ ] Availability badge: "Available now — open to SWE/research internships."
- [ ] CTAs: View Projects (scroll) · Download Résumé (PDF) · Email (mailto).
- [ ] Placeholder headshot + placeholder `resume.pdf` in `/public`.
- [ ] Restrained motion only — no game gimmick. (Rule 4)

**Exit criteria:** Hero communicates who/what/availability above the fold with working CTAs (placeholders OK).

---

## Phase 3 — Content collection & project schema
**Goal:** Data layer so adding/removing/reordering a project = editing a Markdown file. (portfolioPlan §8)

- [ ] Define `projects` collection schema: `title, oneLiner, role, timeframe, date, status, stack[] (the skills/tech it demonstrates), links{live,repo,video}, featured:bool, notable:bool, order, thumbnail, award?`.
  - `date` (or `order`) drives the **reverse-chronological** sort (newest first).
  - `stack[]` is how **Skills** surface — per project, no separate section.
  - `award?` (optional) renders the badge + framing on the game cards.
  - `notable:true` marks owner-curated showcase entries for the **end** of the section.
- [ ] Author the **4 known featured** as Markdown (`featured:true`): ConvoySync, EvacLogix, AI E-Commerce Pipeline, MMO RPG Database (§6.1–6.4), each with its skills in `stack[]`.
- [ ] Author the **notable/showcase pool** (`notable:true`): SpaceExplorer, MoviesEDA, choose-your-own-adventure, Calculator — **owner picks which to surface.**
- [ ] Verify sort + filters: `featured` newest→oldest for the main grid; `notable` for the closing showcase.
- [ ] Metrics policy: only real figures (team size, commit counts, "thousands of entries / 10+ categories"); else qualitative.

**Exit criteria:** Collection type-checks; featured items sort newest→oldest; notable pool exists; all content lives as files (delete file = remove from site).

---

## Phase 4 — Projects: the spine (Work + Journey + Skills in one)
**Goal:** One section that carries the work, the skills, and the growth story. Self-contained cards readable inline; depth optional. (Rules 2 & 7; portfolioPlan §3/§4)

- [ ] **Section lead-in (does the Journey's job in 1–2 lines):** counts line ("6 shipped projects · 2 award-winning games · solo and team work · ~4 yrs coding") + one framing line — *newest first, but the through-line runs the other way: current AI/full-stack work grew from an award-winning game-dev foundation.*
- [ ] `ProjectCard.astro`: thumbnail/GIF, name, one-liner, problem→result (1 line each), **the skills/tech it demonstrates (`stack[]` tags = Skills, per-project)**, Live · Code (+ optional Read more →), and an **award badge** when `award` is set.
- [ ] Render the featured grid **newest → oldest** from the collection sort (ConvoySync → EvacLogix → MMO RPG → AI Pipeline; games appended at the foundation/bottom in Phase 6). Order is data-driven — re-sort via `date`/`order`, never markup.
- [ ] **Skills = per-card** (no `SkillGroup` component, no standalone section). Optional: a single condensed "tech at a glance" strip in the lead-in if per-card tags miss breadth — decide after seeing it live. **No skill bars** (Rule 6).
- [ ] **Journey = the ordering** (no `Timeline` component). EvacLogix flagged on its card as the games→AI callback; reference AI fundamentals (search/adversarial/RL) where relevant — **no CS188 links** (§14).
- [ ] **More / Notable showcase** at the **end of the section** — render `notable:true` entries as compact cards (name + one-liner + skills + GitHub/Live). Owner curates which appear.
- [ ] `CaseStudyLayout.astro` + `/work/[slug]` dynamic route for optional deep pages.
- [ ] Wrap the section (and its subsections) in the `Section` fade-in wrapper from Phase 1.
- [ ] Consistent thumbnail aspect ratio (placeholders until media in Phase 7).

**Exit criteria:** Projects renders as the 2nd section; cards read newest→oldest with skills on each; the growth story is legible from the order + lead-in (no separate Journey/Skills section); notable showcase closes the section; deep pages route correctly.

---

## Phase 5 — Contact → v1 LAUNCH
**Goal:** Finish v1 content and ship to the free subdomain.

- [ ] Contact section: email (lightly obfuscated mailto), GitHub, LinkedIn, Resume PDF + friendly "email is fastest" line.
- [ ] Final pass: nav anchors (`#projects`/`#contact`), social rail, mobile responsiveness, broken-link check.

**Exit criteria:** **v1 is live on the `*.vercel.app` subdomain** and ready to drop into applications.

---

## Phase 6 — Add the award-winning games
**Goal:** Complete the 6 featured projects once framing is set. (§6.5–6.6)

- [ ] Add Amalgamate (🏆 1st AMES 2022, itch.io link, NPC pathing + level design) with `award` set.
- [ ] Add 7th Samurai (🥈 2nd AMES 2023, itch.io link, VFX/boss fight/animation) with `award` set.
- [ ] Note on the 7th Samurai card/case study how it's more complex than Amalgamate (growth beat).
- [ ] By date, both sort to the **foundation (bottom)** of the reverse-chron Projects grid — the award badges carry the credential that used to live in the hero strip.

**Exit criteria:** All 6 featured projects live; the two games anchor the bottom with correct award framing.

---

## Phase 7 — Media polish
**Goal:** Replace placeholders with real captures. (portfolioPlan §11)

- [ ] Real screenshots/GIFs for each featured project (pull game captures from itch.io).
- [ ] ConvoySync mobile screen recording.
- [ ] Confirm SpaceExplorer web-deployable → deploy + link if so.
- [ ] Verify each linked repo has a clean README.
- [ ] Final resume PDF (stale "Summer 2026" line fixed) + professional headshot.

**Exit criteria:** No placeholder media remains; all featured projects show real visuals.

---

## Phase 8 — SEO / OG / analytics / a11y / performance
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
**Phase 0 → 1 → 2 → 3 → 4 → 5 = v1 live.** Phases 6–8 (add games · media · SEO) iterate on the live site without blocking applications.
