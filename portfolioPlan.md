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
- **Credential headline:** **1st place — AMES Super Showcase 2022** (Amalgamate) and **2nd place — AMES Super Showcase 2023** (7th Samurai). Surface prominently (hero badge / About). Two awarded, team-shipped products is rare for a student.
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
| Design vibe | Clean, modern, professional | Linear/Vercel-style: typography-driven, whitespace, dark mode. Zero "unserious" risk |
| Tech stack | **Astro** | Static, content in Markdown, minimal JS, top Lighthouse scores, low maintenance |
| Hosting | GitHub Pages **or** Vercel | Start free; both deploy Astro trivially. (Recommendation: Vercel for instant previews + easy custom domain later) |
| Domain | Free subdomain for v1 | `shreyg4.github.io` or `*.vercel.app`. Buy a custom domain later (see §9) |
| Games arc | **Featured timeline section** | Framed as deliberate growth, not "I only make games" |
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

**Order is deliberate (Rule 2 — projects ASAP, before any lengthy "about"; Rule 5 — name+slogan first):** a brief intro lives in the hero, then **projects are the 2nd section**. The Journey/story comes *after* the work, as the payoff.

```
/  (home, single scroll)
├── Hero            → name + slogan + 1-line intro + headshot + awards strip + CTAs (folds in "About")
├── Featured Work   → 6 self-contained project cards (gist inline; optional deep page)  ← 2nd section
├── My Journey      → games → data → AI timeline (the story, as payoff after the work)
├── Skills          → grouped, scannable (see §5 content)
├── More Projects   → compact list w/ GitHub links
└── Contact         → email, GitHub, LinkedIn, resume download

/work/convoysync          (OPTIONAL deep case study — only for those who want more)
/work/evaclogix
/work/ai-ecommerce-pipeline
/work/mmo-rpg-database
/work/amalgamate
/work/7th-samurai
```

**Nav (sticky):** Logo/name · Work · Journey · Skills · **Contact · GitHub · LinkedIn · Email** · [Resume ↓]
- Contact + social links live in **both the header and the footer** (Rule 8). Optional fixed/floating social icons.
- Every nav link jumps straight to its content — no multi-step navigation (Rule 7).

---

## 4. Section-by-section content spec

### Hero (name + slogan recognizable in <1s — Rule 5; "About" folded in — Rule 2)
- **H1:** Shreyas Sundar Ganesh
- **Subhead (slogan):** "AI + full-stack engineer — I build end-to-end intelligent products."
- **Micro-line:** "CS @ UW Bothell · Available now for SWE/Research internships"
- **Folded-in About:** one 2–3 sentence bio (use §1 draft), headshot (owner to provide), and a slim quick-facts line: UW Bothell · GPA 3.64 · 5× Dean's List · Grad June 2027 · Azure AZ-900.
- **Awards strip (prominent):** 🏆 1st place AMES Super Showcase 2022 · 🥈 2nd place AMES Super Showcase 2023.
- **Availability badge:** "Available now — open to SWE/research internships."
- **CTAs:** `View Work` (scrolls to Featured), `Download Résumé` (PDF), `Email` (mailto). Plus header GitHub/LinkedIn/Email links (Rule 8).
- **Visual:** subtle, professional. Restrained motion only — **no game-themed easter egg / gimmick** (Rule 4).

### Featured Work — 2nd section (Rule 2)
- 6 **self-contained cards** — the gist is readable inline so no click is needed to "get it" (Rule 7). Each card:
  - thumbnail/GIF, name, one-liner, **problem → result** (1 line each), tech tags, and direct links: **Live · Code** (+ optional **Read more →** deep page).
- Order: AI/full-stack first (ConvoySync, EvacLogix, AI Pipeline, MMO RPG), then the awarded games (Amalgamate, 7th Samurai).
- Deep `/work/*` pages are **optional depth**, not required reading.

### My Journey (the hook)
- Vertical timeline, 3 acts:
  - **2022–23 — Award-winning game dev:** VGD bootcamp, `RealPong` (ShaderLab), `Atlantis-Atari-2600`, `Yeetnade`, then the two team titles under **basmatisoftware**: **Amalgamate** (🏆 1st, AMES 2022) → **7th Samurai** (🥈 2nd, AMES 2023). Visible growth between them: from NPC pathing/level design to full VFX, a boss fight, and animation systems.
  - **2025 — Pivot to data & AI:** `MoviesEDA`, choose-your-own-adventure, AI e-commerce pipeline.
  - **2026 — Intelligent systems & full-stack:** AI fundamentals (search/adversarial/RL — *no links*), `EvacLogix` (the games callback), `ConvoySync`.
- Closing line ties it together: game dev taught you to ship complete, polished products in a team and to think in systems (simulation, real-time state, visualization) — the exact instincts now powering your AI/full-stack work.

### Skills (grouped — see §5)

### More Projects
- Compact list: SpaceExplorer, MoviesEDA, choose-your-own-adventure, Calculator, etc. Name + one-liner + GitHub link. No deep treatment.

### Contact (Rule 8 — easy to reach, links in header AND footer)
- Email (mailto, lightly obfuscated), GitHub, LinkedIn, Resume PDF.
- Repeat these in the **footer** and the **header**; optional fixed/floating social icons that stay accessible while scrolling.
- One friendly line: "The fastest way to reach me is email — I reply quickly."

---

## 5. Skills content (grouped, scannable)

> **Rule 6 — no skill bars/percentages.** Use grouped lists + concrete counts instead. Lead-in line (factual, no invented numbers): *"6 shipped projects · 2 award-winning games · solo and team work · ~4 years coding."* Adjust the "years" figure to what's true for you.

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

- **Aesthetic:** Clean, modern, professional (Linear/Vercel reference). Typography-driven, generous whitespace.
- **Theme:** Dark mode default, optional light toggle.
- **Color:** Neutral base (near-black/zinc) + a single restrained accent (e.g., electric blue or violet). One accent only.
- **Type:** Sans for UI/body (Inter or Geist); optional mono for code/tags (JetBrains Mono / Geist Mono). Strong type scale, clear hierarchy.
- **Layout:** Max content width ~1100px, comfortable line length, consistent spacing scale (4/8px grid).
- **Components:** Sticky nav, hero, project card, case-study layout, timeline, skill group, footer.
- **Motion (Rule 4 — less is more):** Subtle scroll-reveal + hover states **only**. No easter egg / Konami / press-start gimmick. Respect `prefers-reduced-motion`. Every animation must earn its place.
- **Imagery:** Real screenshots/GIFs of projects > abstract stock. Consistent thumbnail aspect ratio.

---

## 8. Technical architecture

- **Framework:** Astro (islands only where needed; mostly static HTML).
- **Content model:** Astro Content Collections — each project as a Markdown/MDX file with frontmatter (title, oneLiner, role, timeframe, stack[], links{live,repo,video}, featured:bool, order). Adding a project = adding a file.
- **Styling:** Tailwind CSS (fast, consistent) or scoped CSS — pick Tailwind for speed.
- **Components:** `.astro` components for Nav, Hero, ProjectCard, Timeline, SkillGroup, Footer, CaseStudyLayout.
- **Assets:** `/public` for resume PDF, headshot, OG image; optimized images (Astro `<Image>`).
- **No backend** for v1 (mailto only). Contact form is a later optional add (Formspree/Netlify Forms).
- **Repo:** new public repo, e.g. `portfolio` or `shreyg4.github.io`.

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

> **Timeline note:** You said "no deadline," but you're hunting NOW. Recommendation: treat this as **two phases** — ship **v1 fast** (steps 1–7 below: 4 known projects + journey + resume/contact, on the free subdomain) so you have a link to put on applications *this week*, then iterate (steps 8–10) to add the games (Amalgamate, 7th Samurai) and polished media. Don't let "quality over speed" keep the site dark while you're applying.


1. **Scaffold** — Astro + Tailwind project, repo, Vercel/Pages deploy of a blank page (prove the pipeline).
2. **Design system** — colors, type, base components (Nav, Footer, layout).
3. **Hero + About** — with placeholder headshot/resume.
4. **Content collection** — project schema; load the 4 known featured + More Projects list.
5. **Featured Work + case-study pages** — cards → detail pages.
6. **My Journey timeline** — the hook.
7. **Skills + Contact.**
8. **Add Amalgamate + 7th Samurai** once details arrive.
9. **SEO/OG/analytics/a11y pass + Lighthouse.**
10. **Media polish** — real screenshots/GIFs, ConvoySync video.
11. **Launch on free subdomain;** custom domain later.

---

## 13. Open items / decisions deferred

- ~~Amalgamate + 7th Samurai details~~ — **resolved.**
- Featured ordering: lead with AI/full-stack (ConvoySync, EvacLogix, AI Pipeline, MMO RPG), then the games (Amalgamate, 7th Samurai) as the awarded foundation — relevance-first for AI/full-stack roles, awards still visible.
- Vercel vs GitHub Pages (lean Vercel).
- Custom domain choice + purchase (deferred).
- Contact form (optional, post-v1).
- Light/dark toggle vs dark-only (lean dark default + toggle).
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
| 2 | Skills/projects ASAP (projects = 2nd section, before lengthy about) | §3/§4 — About folded into hero; **Featured Work is the 2nd section**; Journey moved *after* the work |
| 3 | Minimal/original — max 3 colors, 2 fonts | §7 — neutral base + 1 accent (≤3); Inter (sans) + one mono = 2 fonts |
| 4 | Less is more — resist excess animation | §4/§7 — easter egg **cut**; subtle scroll/hover only; honors `prefers-reduced-motion` |
| 5 | First impression — name + slogan, <1s | §4 Hero — H1 name + slogan subhead + availability micro-line up top |
| 6 | No skill bars/percentages | §5 — grouped lists + concrete counts ("6 shipped projects · 2 award-winning games"), never bars |
| 7 | Do not make me click | §3/§4 — self-contained cards (gist inline); nav jumps straight to content; deep pages are optional |
| 8 | Easy to contact — header AND footer | §3/§4 — email + GitHub + LinkedIn in header and footer; optional fixed social icons |
| 9 | Run Lighthouse | §10 — target 95+ across performance/best-practices/a11y/SEO before deploy |
