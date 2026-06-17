# Portfolio Website — Plan

**Owner:** Shreyas Sundar Ganesh
**Created:** 2026-06-15
**Status:** Planning (no implementation yet)
**Goal of this doc:** Single source of truth for what the site is, who it's for, how it's built, and what goes on it.

---

## 1. Positioning (the north star)

- **Primary job of the site:** Land a SWE/research internship — **actively hunting NOW (off-cycle: late Summer / Fall 2026)**. Every decision is judged against "does this help a recruiter say yes in 30 seconds?" Emphasize **available immediately**.
- **Positioning line:** **AI + full-stack hybrid** — *"I build end-to-end intelligent products: from data pipelines and LLM integration to the full-stack apps that surface them."*
- **The differentiator / hook:** A genuine **three-act journey — award-winning games (2022–23) → data (2025) → AI/full-stack (2026)** — where game-dev skills became the foundation for current engineering. `EvacLogix` is the explicit callback where Unity/shader/simulation skills feed AI/simulation work. Most CS students can't tell a coherent growth story; you can — **and yours opens with two showcase awards.**
- **Credential headline:** **1st place — AMES Super Showcase 2022** (Amalgamate) and **2nd place — AMES Super Showcase 2023** (7th Samurai). Surfaced on the **game project cards** at the foundation end of the Projects section (not a hero strip) — framed there as the award-winning origin the rest grew from. Two awarded, team-shipped products is rare for a student.
- **Audience:** Technical recruiters and engineering hiring managers skimming fast, plus a secondary audience of engineers who click into GitHub.
- **Tone:** Confident, concrete, results-forward. No fluff, no buzzword soup.

### Elevator bio (draft — refine later)
> Third-year CS & Software Engineering student at UW Bothell (GPA 3.64, 5× Dean's List, grad June 2027). I started in game development — Unity, C#, custom shaders — and grew into data engineering and AI, building LLM-powered pipelines and full-stack apps. Today I build intelligent, end-to-end products and I'm looking for a Summer 2026 software engineering or research internship.

---

## 2. Decisions locked (from the grilling)

| Decision | Choice | Notes |
|---|---|---|
| Primary goal | Land an internship — **off-cycle, hunting NOW** | Recruiter-optimized; emphasize "available immediately." Resume's "Summer 2026" line is stale — update it |
| Metrics | **No invented numbers** | Use only figures already in resume (e.g. 3-person team, 38/135 commits, "thousands of entries, 10+ categories"). Otherwise stay qualitative — architecture & decisions |
| Games arc | **Award-winning origin (2022–23)** | Games = foundation, not present-day. Two AMES Super Showcase awards (1st 2022, 2nd 2023). Internal growth: Amalgamate → 7th Samurai |
| v1 timeline | "No deadline" stated, but **ship-fast recommended** | Active hunt ⇒ launch v1 quickly, iterate. See §12 |
| Design vibe | Clean, modern, professional | Reference: **v4.brittanychiang.com** patterns (scroll-aware nav, fixed social rail, staggered fade-ins, mono accents) on our **own warm-stone + cyan** palette. Typography-driven, whitespace, dark. Zero "unserious" risk. See §7 |
| Tech stack | **Astro** | Static, content in Markdown, minimal JS, top Lighthouse scores, low maintenance |
| Hosting | GitHub Pages **or** Vercel | Start free; both deploy Astro trivially. (Recommendation: Vercel for instant previews + easy custom domain later) |
| Domain | Free subdomain for v1 | `shreyg4.github.io` or `*.vercel.app`. Buy a custom domain later (see §9) |
| Games arc | **Told via project ordering** (no separate timeline) | Games sit at the foundation end of the reverse-chron Projects list, framed as deliberate growth — not "I only make games" |
| Project presentation | **Tiered:** featured case studies + compact "more on GitHub" list | Depth over volume |
| Featured projects | 6: ConvoySync, EvacLogix, AI E-Commerce Pipeline, MMO RPG Database, **Amalgamate**, **7th Samurai** | Last two need details (see §6) |
| Live demos | EvacLogix (web, Netlify), ConvoySync (screen-recording), SpaceExplorer (deploy if web) | Demos are highest-impact for recruiters |
| Contact/CTA | Downloadable **PDF resume** + mailto + GitHub/LinkedIn | No backend, no spam |
| CS188 repos (PacmanSearch, multiagent, reinforcement) | **Mention skills, do NOT link code** | Honor-code risk + reads as coursework. Reference "search, adversarial agents, RL" as AI fundamentals only |
| Resume PDF | User generates from .docx | (Owner handling) |
| Headshot | Include in hero/about | Owner to provide image |
| SEO + analytics | Yes | Meta + OpenGraph card + privacy-friendly analytics (Plausible or GoatCounter) |
| Positioning | AI + full-stack hybrid | See §1 |

---

## 3. Information architecture (single-page + project subpages)

Single scrolling page with sticky nav (best for recruiter skim), plus optional dedicated pages for deep case studies.

**Order is deliberate (Rule 2 — projects ASAP, before any lengthy "about"; Rule 5 — name+slogan first):** a brief intro lives in the hero, then **Projects is the one big section that does the work** — it absorbs the old separate Work / Journey / Skills sections.

**The Projects section is the spine (covers Work + Journey + Skills in one):**
- **Work** — self-contained project cards, the gist readable inline.
- **Skills** — surfaced **per project** (each card lists the skills/tech it demonstrates), so there is **no standalone Skills section**. §5 is the master inventory the per-project tags draw from.
- **Journey** — told **through the ordering**, not a separate timeline. Cards run **newest → oldest** (most recent AI/full-stack work first, scrolling down to the award-winning game-dev foundation), with a short framing line up top. So there is **no standalone Journey section**.
- **Awards** — surfaced on the relevant **game project cards** (Amalgamate, 7th Samurai), **not** a hero strip.
- **Notable / More Projects** — a curated showcase at the **end of the Projects section** (you pick which go here).

```
/  (home, single scroll)
├── Hero        → name + slogan + 1-line intro + headshot + CTAs (folds in "About"; NO awards strip)
├── Projects    → THE spine (Work + Journey + Skills in one).  ← 2nd section
│     · self-contained cards, NEWEST → OLDEST (AI/full-stack now → data → award-winning games)
│     · each card surfaces the skills/tech it demonstrates (= Skills, per-project)
│     · the reverse-chronological order tells the growth story (= Journey, via ordering)
│     · awards live on the relevant game cards (Amalgamate, 7th Samurai)
│     └── More / Notable Projects → curated showcase at the end (you choose these)
└── Contact     → email, GitHub, LinkedIn, resume download

/work/[slug]    (OPTIONAL deep case studies, reached from a card's "Read more →")
```

**Nav (sticky):** no name/logo — **all items pinned to the right** as one cluster: **Home · Projects · Contact · [Resume ↓]**. "Home" jumps to the hero (name/photo), replacing the clickable-name wordmark. (Journey and Skills are no longer nav items — they live inside Projects.)
- **Keep the bar uncluttered:** only the section links + Resume live in the nav. Social/contact details (GitHub, LinkedIn, Email, optional phone) do **not** sit in the nav — they live in the **Contact section**, the **footer**, and the fixed social rail.
- Section links are **in-page anchor jumps** on the single scrolling page (`#projects`, `#contact`) — not separate pages. (The only separate routes are the optional `/work/[slug]` case studies, reached from project cards.)
- **Rule 8 (easy to contact) still satisfied:** "Contact" is a one-click nav jump (always visible via the sticky nav) to the full contact section. Footer is minimal (colophon + optional icons), not a full link repeat. **Plus** a **fixed vertical social-icon rail, bottom-left** (GitHub · LinkedIn · Email), persistent while scrolling (borrowed from the visual reference — see §7). **No** vertical email rail on the right.
- **Sticky nav is scroll-direction-aware:** visible at top, hides on scroll-down, reveals on scroll-up (borrowed from §7 reference). Honors `prefers-reduced-motion`.
- Every nav link jumps straight to its content — no multi-step navigation (Rule 7).

---

## 4. Section-by-section content spec

### Hero (name + slogan recognizable in <1s — Rule 5; "About" folded in — Rule 2)
- **H1:** Shreyas Sundar Ganesh
- **Subhead (slogan):** "AI + full-stack engineer — I build end-to-end intelligent products."
- **Micro-line:** "CS @ UW Bothell · Available now for SWE/Research internships"
- **Folded-in About:** one 2–3 sentence bio (use §1 draft), headshot (owner to provide), and a slim quick-facts line: UW Bothell · GPA 3.64 · 5× Dean's List · Grad June 2027 · Azure AZ-900.
- **No awards strip here.** The two AMES awards are surfaced on the relevant **game project cards** inside Projects (Amalgamate 🏆, 7th Samurai 🥈), where there's room to frame them as the award-winning foundation. (Keeps the hero clean; awards still land, in context.)
- **Availability badge:** "Available now — open to SWE/research internships."
- **CTAs:** `View Projects` (scrolls to Projects), `Download Résumé` (PDF), `Email` (mailto). Plus header GitHub/LinkedIn/Email links (Rule 8).
- **Visual:** subtle, professional. Restrained motion only — **no game-themed easter egg / gimmick** (Rule 4).

### Projects — the 2nd section, and the spine of the site (Rule 2). Absorbs Work + Journey + Skills.

**Lead-in (short, sets the frame — does the Journey's job in 1–2 lines):**
- A factual counts line (no invented numbers): *"6 shipped projects · 2 award-winning games · solo and team work · ~4 years coding."*
- One framing line for the ordering: *newest first, but the through-line runs the other way* — current AI/full-stack work grew out of an award-winning game-dev foundation. (This is the Journey, delivered as a sentence + the order itself, not a timeline.)

**Cards — NEWEST → OLDEST (reverse-chronological):**
- 6 **self-contained cards** — the gist is readable inline so no click is needed to "get it" (Rule 7). Each card:
  - thumbnail/GIF, name, one-liner, **problem → result** (1 line each), **the skills/tech it demonstrates** (tech tags — this is how Skills shows up, per project), and direct links: **Live · Code** (+ optional **Read more →** deep page).
- **Order = most recent first**, which also tells the growth story top-to-bottom:
  1. **ConvoySync** (May–Jun 2026) · 2. **EvacLogix** (Jun 2026, the games→AI callback) · 3. **MMO RPG Database** (Feb–Mar 2026) · 4. **AI E-Commerce Pipeline** (Oct–Dec 2025) · then the **award-winning game foundation:** 5. **7th Samurai** (🥈 2nd, AMES 2023) · 6. **Amalgamate** (🏆 1st, AMES 2022).
  - *(Exact order among same-period items is `date`/`order`-driven in the schema — see §8 — so it's trivial to re-sort. The intent: AI/full-stack at top, the two awarded games anchoring the bottom as the origin story.)*
- **Awards are surfaced on the game cards** (badge + one line on why it matters), with the Amalgamate→7th Samurai growth beat noted there — this replaces the old hero awards strip and the standalone Journey timeline.
- Deep `/work/*` pages are **optional depth**, not required reading.

**Skills, the per-project way (no separate section):**
- Each card lists the concrete skills/tech it demonstrates, so a recruiter sees skills *attached to evidence* rather than a floating list. §5 stays as the **master inventory** these tags are drawn from. **Optional:** a single condensed "tech at a glance" strip in the Projects lead-in if the per-card tags don't surface the full breadth — decide after seeing it live. (Still **no skill bars** — Rule 6.)

**More / Notable Projects — end of the Projects section (you curate):**
- A curated showcase of additional notable projects **you choose** to highlight, placed after the 6 featured cards. Compact treatment: name + one-liner + skills/tech + GitHub (and Live if any). Candidate pool: SpaceExplorer, MoviesEDA, choose-your-own-adventure, Calculator, etc. — **owner picks which make the cut.**
- Data-driven (see §8): adding/removing one = editing data, so this list is easy to curate over time.

### Contact (Rule 8 — easy to reach)
- This is where the contact details actually live (moved out of the nav to keep the bar clean): Email (mailto, lightly obfuscated), LinkedIn, GitHub, Resume PDF, and **optional phone** (weigh spam risk — email/LinkedIn alone is the safer default).
- The **footer is minimal** — colophon (© {year} + name), small social icons + "↑ Back to top" — **not** a full repeat of this section (sticky nav + Contact-as-last-section make duplication redundant). The **nav** only links *to* this section via the "Contact" item. A **fixed social-icon rail (bottom-left)** keeps GitHub/LinkedIn/Email reachable while scrolling (see §3/§7) — no right-side email rail.
- One friendly line: "The fastest way to reach me is email — I reply quickly."

---

## 5. Skills content (master inventory — surfaced per-project, not a standalone section)

> **No standalone Skills section anymore** (§3): skills appear **on each project card** as the tech/skills it demonstrates. This list is the **master inventory** those per-card tags are drawn from — keep it complete and accurate, but it renders *through* the projects, not as its own block. The counts line now leads the **Projects** section (§4). Optionally render a single condensed "tech at a glance" strip in the Projects lead-in if per-card tags miss some breadth.
>
> **Rule 6 — no skill bars/percentages**, ever. Grouped lists + concrete counts only.

- **Languages:** Python, SQL, TypeScript, JavaScript, Java, C#, C++, HTML, CSS
- **AI / ML:** LLM integration (Gemini Pro API), prompt engineering, data pipeline design, model evaluation, AI fundamentals (search, adversarial agents, reinforcement learning), AI-assisted dev (Claude, Codex)
- **Data:** Pandas, NumPy, scikit-learn, NLTK, BeautifulSoup, SQLite, PostgreSQL, JSON modeling
- **Web / Full-stack:** React, React Native/Expo, Node.js/Express, REST APIs
- **Game / Graphics:** Unity, C#, ShaderLab, HLSL
- **Tools & Cloud:** Azure (AZ-900 certified), Git/GitHub, Netlify

---

## 6. Featured project case studies

> **Metrics policy:** No invented numbers. Use only figures already in the resume (team size, commit counts, "thousands of entries / 10+ categories"). Where no real number exists, stay qualitative — emphasize architecture and the decisions you made.

### Case-study template (use for all 6)
- **Name + one-liner**
- **Role** (solo/team, what *you* built) · **Timeframe** · **Status**
- **Links:** Live demo · Repo · Video/screens
- **Problem** — what needed solving
- **Approach** — architecture/key decisions
- **Result / impact** — the "so what" (scale, outcome, what you're proud of)
- **Stack** — tags
- **Media** — screenshot/GIF/video

---

#### 6.1 ConvoySync — *featured, has demo (video)*
- One-liner: Full-stack convoy coordination platform with real-time shared-state sync across devices.
- Role: **Led 3-person team**; spearheaded the cross-platform Expo/React Native client + live sync UI.
- Timeframe: May–Jun 2026 (5 weeks, 38 commits). Status: complete.
- Links: Repo (GitHub/ConvoySync) · **Demo = screen recording** (to record).
- Problem: keep shared convoy state synchronized live across multiple mobile clients.
- Approach: React Native/Expo client + Node.js/Express REST backend; real-time state sync.
- Result: delivered on time as team lead; functional multi-device sync.
- Stack: React Native, Expo, Node.js, Express, REST.

#### 6.2 EvacLogix — *featured, has live web demo (Netlify) — the games callback*
- One-liner: Unity simulation (C#) modeling evacuation logistics with custom shaders, plus a TypeScript web app surfacing results.
- Role: 3-person team; built simulation + companion web app.
- Timeframe: Jun 2026 (4 weeks, 135 commits). Status: complete, deployed.
- Links: **Live web app (Netlify)** · Repo (GitHub/EvacLogix).
- Problem: model + visualize evacuation logistics in real-time 3D.
- Approach: Unity/C# sim with custom ShaderLab/HLSL; TypeScript web app to present output.
- Result: deployed end-to-end; demonstrates games→AI/simulation crossover. **Flag this as the journey callback.**
- Stack: Unity, C#, ShaderLab, HLSL, TypeScript, Netlify.

#### 6.3 AI-Enhanced E-Commerce Research Pipeline — *featured*
- One-liner: Multi-phase data-engineering pipeline that extracts, structures, and LLM-summarizes thousands of product entries across 10+ categories.
- Role: **Solo.**
- Timeframe: Oct–Dec 2025. Status: complete.
- Links: Repo.
- Problem: turn messy raw product data into structured, SEO-friendly, ML-ready records.
- Approach: Python pipeline + Gemini Pro for content generation; custom SQLite schema with dynamic feature-tagging → structured JSON attributes.
- Result: thousands of entries processed with high semantic accuracy; data integrity for downstream ML.
- Stack: Python, Gemini Pro, SQLite, JSON.

#### 6.4 MMO RPG Database Design — *featured*
- One-liner: Backend for a persistent MMO RPG — Java/JDBC APIs for real-time character stats, quest tracking, and automated state management.
- Role: **Team of 4.**
- Timeframe: Feb–Mar 2026. Status: complete. (Repo likely `schemasquad`.)
- Links: Repo.
- Problem: persistent, consistent game state with complex relational queries.
- Approach: Java JDBC APIs; advanced SQL JOINs across Quest/Character/Progress; PostgreSQL sequence correction + server-side validation (current ≤ max).
- Result: prevented duplicate-key errors, guaranteed stat integrity, dynamic active/completed quest filtering.
- Stack: Java, JDBC, PostgreSQL, SQL.

#### 6.5 Amalgamate — *featured — GAME (award-winning origin)*
- One-liner: A 2D top-down adventure game built in Unity.
- Role: **Team of 4.** Owned **NPC pathing** and **level design**.
- Timeframe: 2022 Q4. Status: **finished, published.**
- Links: **Play/itch.io:** https://basmatisoftware.itch.io/2022q4-am00 (studio: basmatisoftware).
- Award: **🏆 1st place — AMES Super Showcase 2022** (Advanced Media Entertainment Society).
- Problem / your contribution: believable NPC navigation/pathfinding + designing the levels players move through.
- Result: a complete, polished, **award-winning** shipped title — proof you finish and ship in a team.
- Stack: Unity, C#.
- Framing: foundation chapter — shows shipping + collaboration; sets up the growth into 7th Samurai.

#### 6.6 7th Samurai — *featured — GAME (award-winning, shows growth)*
- One-liner: A 3D third-person arena hack-and-slash built in Unity.
- Role: **Team of 4.** Owned **VFX, sound, enemy behavior (designed and built an entire boss fight), particle effects, and animation implementation** (cutscenes + in-game).
- Timeframe: 2023 Q4. Status: **finished, published.**
- Links: **Play/itch.io:** https://basmatisoftware.itch.io/23q4-am11 (studio: basmatisoftware).
- Award: **🥈 2nd place — AMES Super Showcase 2023.**
- Problem / your contribution: a substantially more complex 3D project — authoring enemy AI behaviors and a full boss encounter, plus the VFX/particles/sound/animation that make it feel polished.
- Result: visible **growth** over Amalgamate (2D → 3D, single systems → owning multiple interlocking systems incl. a boss fight); second showcase award.
- Stack: Unity, C#.
- Framing: the "level-up" beat in the games chapter — pairs with Amalgamate to show a year of rapid growth. **Note in the case study how it's more complex than Amalgamate.**

---

## 7. Design system

- **Aesthetic:** Clean, modern, professional. Typography-driven, generous whitespace, dark.
- **Visual reference:** https://v4.brittanychiang.com/ — deep-dark single-page portfolio, **sans body + mono accents** (mono for nav numbers, section labels, tech tags), generous whitespace, **separation via whitespace not borders**, restrained staggered fade-ins, and **fixed side rails**. **What to borrow:** (1) scroll-direction-aware sticky nav (hides on scroll-down, reveals on scroll-up); (2) **fixed vertical social-icon rail, bottom-left**, persistent while scrolling; (3) subtle **staggered fade/translate-in** as sections enter the viewport; (4) mono-accented small labels + tech-tag lists; (5) project cards that lift slightly on hover (no borders). **What NOT to borrow:** (a) her **navy + mint** palette — we keep our own warm near-black + cyan (below); (b) the **vertical email rail** on the right — skip it (Contact section + sticky "Contact" nav link cover this, Rule 8); (c) any **heavy/parallax scroll motion** — keep it subtle (Rule 4); (d) skill **percentage bars** — never (Rule 6).
- **Theme:** Dark mode only — single consistent theme, no light/dark toggle.
- **Color (locked in code):** Warm near-black base (`--color-surface: #1C1917`) + a single restrained **cyan accent** (`--color-accent: #7DF9FF`) + light text (`--color-text: #EDEDED`). Three colors total — One accent only. (Cyan sits in the same family as the reference's mint, so the Brittany layout reads naturally with our palette.)
- **Type:** Sans for UI/body (**Geist**); mono for nav numbers / section labels / tech tags / quick-facts line (**JetBrains Mono**). Both preloaded. Strong type scale, clear hierarchy. 2 fonts max.
- **Layout:** Max content width ~1100px (`wrapper` utility), comfortable line length, consistent spacing scale (4/8px grid).
- **Components:** Scroll-aware sticky nav, fixed social rail, `Section` fade-in wrapper, hero, project card (carries its own skills/tech tags + optional award badge), notable/more-project card, case-study layout, footer. **No standalone Timeline or SkillGroup component** — the journey is the project ordering and skills live on the cards. **Build every list-driven component to be data-mapped (see §8) so adding/removing items = editing data, never markup.**
- **Motion (Rule 4 — less is more):** Borrowed staggered fade/translate-in on section enter + subtle hover states **only**. No easter egg / Konami / press-start gimmick. Respect `prefers-reduced-motion` (already handled globally — motion collapses to instant). Every animation must earn its place.
- **Imagery:** Real screenshots/GIFs of projects > abstract stock. Consistent thumbnail aspect ratio.

---

## 8. Technical architecture

- **Extensibility principle (carry through every component):** **adding or removing anything = editing data, never markup.** All repeating UI (projects, skill groups, nav items, social links, timeline acts, and any future section) is rendered by `.map()` over a single data source — a Content Collection for long-form items (projects, future experience) or a typed array in `src/consts.ts` for short lists (nav, socials, skills). To delete a project you delete its file; to add one you add a file; to reorder you change an `order` field. No component edits required.
- **Framework:** Astro (islands only where needed; mostly static HTML).
- **Content model:** Astro Content Collections — each project as a Markdown/MDX file with frontmatter (`title, oneLiner, role, timeframe, status, stack[], links{live,repo,video}, featured:bool, order, thumbnail`). Adding a project = adding a file; `featured` + `order` control placement so nothing is hard-coded.
- **Future sections are first-class, not retrofits:** a later **Experience** section (jobs/internships) slots in as its **own `experience` collection** (mirrors the project pattern: one Markdown file per role) + a `Section` wrapper + an `ExperienceItem` component, linked from a new nav item in `consts.ts`. The nav, fade-in `Section` wrapper, and social rail are all section-agnostic, so a new section is: add collection → add component → add one nav entry. Same path for any future section (writing, talks, etc.).
- **Data sources (single source of truth):** `src/consts.ts` holds `sectionLinks` (drives nav **and** the in-page section anchors) and `socialLinks` (drives footer **and** the fixed social rail). Skill groups live as a typed array too. Change the data, the UI follows.
- **Styling:** Tailwind CSS v4 (theme tokens in `global.css`, `wrapper` utility for the content column).
- **Components:** `.astro` components for Nav (scroll-aware), SocialRail, Section (fade-in wrapper), Hero, ProjectCard (renders its own skills/tech tags + optional award badge), Footer, CaseStudyLayout. **No standalone Timeline/SkillGroup** (journey = project order; skills = per-card tags). Keep components **presentational + data-driven** so they're reusable across current and future sections.
- **Assets:** `/public` for resume PDF, headshot, OG image; optimized images (Astro `<Image>`).
- **No backend** for v1 (mailto only). Contact form is a later optional add (Formspree/Netlify Forms).
- **Repo:** public repo `Shreyg4/Portfolio` → Vercel.

---

## 9. Hosting & deployment plan

- **v1:** Deploy to **Vercel** (recommended) or **GitHub Pages**, on the free subdomain.
  - Vercel: connect repo → auto-deploy on push → preview URLs per PR. Easiest custom-domain upgrade later.
  - GitHub Pages: name repo `shreyg4.github.io`, set Astro `site`/`base`, deploy via Actions.
- **CI:** Auto-deploy on push to `main`.
- **Custom domain (later, ~$12/yr):** candidates — `shreyassundarganesh.com`, `shreyg.dev`, `shreyassg.dev`. Add as DNS CNAME/A records to host; enable HTTPS. (Deferred per decision.)

---

## 10. SEO, analytics, performance, accessibility

- **SEO:** Per-page `<title>`/meta description; semantic headings; sitemap.xml + robots.txt (Astro integrations).
- **OpenGraph/Twitter:** OG image (name + tagline) so shared links render a clean card.
- **Analytics:** Privacy-friendly — **Plausible** or **GoatCounter** (no cookie banner). Track recruiter traffic + resume downloads.
- **Performance:** Target Lighthouse 95+ across the board (Astro makes this easy); lazy-load media; compress images; preload fonts.
- **Accessibility:** Semantic HTML, alt text on all project media, sufficient contrast (esp. dark mode), keyboard-navigable, focus states, respects `prefers-reduced-motion`.

---

## 11. Content checklist (assets to gather)

- [ ] **Resume PDF** (owner generating from .docx; fix stale "Summer 2026" line first) → `/public/resume.pdf`
- [ ] **Headshot** (professional, square-croppable)
- [x] ~~Amalgamate details~~ — done (§6.5)
- [x] ~~7th Samurai details~~ — done (§6.6)
- [x] ~~Confirm solo/team for AI Pipeline & MMO RPG~~ — solo / team-of-4 (§6.3, §6.4)
- [ ] Screenshots/GIFs for each featured project (pull game captures from the itch.io pages)
- [ ] **ConvoySync** screen recording (mobile demo)
- [ ] Confirm SpaceExplorer is web-deployable; if so, deploy + link
- [ ] Verify each linked repo has a clean README (recruiters click through)
- [ ] OG share image
- [ ] Final bio copy + ambitions line

---

## 12. Build roadmap (when implementation starts)

> **Timeline note:** You said "no deadline," but you're hunting NOW. Recommendation: treat this as **two phases** — ship **v1 fast** (steps 1–6 below: 4 known projects in the unified Projects spine + resume/contact, on the free subdomain) so you have a link to put on applications *this week*, then iterate (steps 7–9) to add the games and polished media. Don't let "quality over speed" keep the site dark while you're applying.

> **Detailed breakdown lives in [plan.md](plan.md)** — this is the high-level roadmap.


1. **Scaffold** — Astro + Tailwind project, repo, Vercel deploy of a blank page (prove the pipeline).
2. **Design system** — colors, type, base components (Nav, Footer, social rail, Section wrapper).
3. **Hero + About** — with placeholder headshot/resume. **No awards strip.**
4. **Content collection** — project schema (`date`/`order` for reverse-chron, per-project `stack`/skills, `featured` + `notable` flags); load the 4 known featured + the notable/more-projects pool.
5. **Projects (the spine) + case-study pages** — cards newest→oldest, each surfacing its skills; journey via ordering; awards on the game cards; **More/Notable showcase at the end** (owner-curated); optional `/work/[slug]` detail pages. (Absorbs old Work + Journey + Skills steps.)
6. **Contact → launch v1.**
7. **Add Amalgamate + 7th Samurai** once details arrive — slot at the foundation (bottom) of the reverse-chron list with award badges.
8. **SEO/OG/analytics/a11y pass + Lighthouse.**
9. **Media polish** — real screenshots/GIFs, ConvoySync video.
10. **Launch on free subdomain;** custom domain later.

---

## 13. Open items / decisions deferred

- ~~Amalgamate + 7th Samurai details~~ — **resolved.**
- ~~Separate Work / Journey / Skills sections~~ — **resolved: merged into one Projects spine** (§3/§4). Cards run newest→oldest (journey via order), skills sit per-card, awards on the game cards, owner-curated "notable" showcase at the end. No standalone Journey/Skills section or nav item.
- ~~Featured ordering~~ — **resolved: reverse-chronological** (most recent first → award-winning games anchor the bottom as the foundation). Relevance-first for AI/full-stack roles; the order itself carries the growth story. Fine-tune via `date`/`order` in the schema.
- **Notable/showcase projects — owner to choose** which additional projects appear at the end of the Projects section (candidate pool: SpaceExplorer, MoviesEDA, choose-your-own-adventure, Calculator).
- Vercel vs GitHub Pages (lean Vercel).
- Custom domain choice + purchase (deferred).
- Contact form (optional, post-v1).
- **Experience section (deferred, architecture-ready):** add when there's an internship/role to show. Slots in as its own `experience` collection + `ExperienceItem` component + one new nav entry — no rework needed (see §8 "Future sections are first-class").
- ~~Light/dark toggle vs dark-only~~ — **resolved: dark-only, no toggle** (single consistent theme).
- ~~Konami/press-start easter egg~~ — **cut** (Rule 4).

---

## 14. Guardrails (don't violate these)

- Recruiter-first: if a feature doesn't help land the internship, cut or defer it.
- Games = *range and growth*, never "I only make games."
- Do **not** link CS188 solution repos (honor code + coursework optics).
- Depth over volume — curate hard.
- Every claim concrete and verifiable; no buzzword padding. **No invented metrics.**
- Update the resume's stale "Summer 2026" objective before linking the PDF.
- Keep it fast and accessible; performance is a feature recruiters feel.

---

## 15. Portfolio best-practices compliance (dev.to — "9 tips after reviewing 40+ portfolios")

Source: https://dev.to/kethmars/what-i-learned-after-reviewing-over-40-developer-portfolios-9-tips-for-a-better-portfolio-4me7

| # | Rule | How this plan satisfies it |
|---|---|---|
| 1 | Define the purpose | §1 — explicitly recruiter-first, internship-now; everything judged against it |
| 2 | Skills/projects ASAP (projects = 2nd section, before lengthy about) | §3/§4 — About folded into hero; **Projects is the 2nd section** and is the spine (Work + Journey + Skills in one); skills sit on each card, journey is the reverse-chron order |
| 3 | Minimal/original — max 3 colors, 2 fonts | §7 — neutral base + 1 accent (≤3); Inter (sans) + one mono = 2 fonts |
| 4 | Less is more — resist excess animation | §4/§7 — easter egg **cut**; subtle scroll/hover only; honors `prefers-reduced-motion` |
| 5 | First impression — name + slogan, <1s | §4 Hero — H1 name + slogan subhead + availability micro-line up top |
| 6 | No skill bars/percentages | §5 — grouped lists + concrete counts ("6 shipped projects · 2 award-winning games"), never bars |
| 7 | Do not make me click | §3/§4 — self-contained cards (gist inline); nav jumps straight to content; deep pages are optional |
| 8 | Easy to contact — header AND footer | §3/§4 — email + GitHub + LinkedIn in header and footer; optional fixed social icons |
| 9 | Run Lighthouse | §10 — target 95+ across performance/best-practices/a11y/SEO before deploy |
