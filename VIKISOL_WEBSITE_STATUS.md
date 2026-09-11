# Vikisol Website — Status

Repo-scoped status for `VikisolTechnologies/VikisolWebsite`. The ecosystem-wide handoff/progress
documents (Arena↔JennySol integration, security, milestones) live in the `jennysol-ai` repo
(`VIKISOL-ECOSYSTEM-MAC-HANDOFF.md`, `PROJECT-PROGRESS.md`) — this file does not duplicate those;
it covers only this repo.

**Last updated:** 2026-09-11, end of the ecosystem-transformation session described below.

---

## 1. Where the app actually lives

The deployed Next.js app is under `ashley/`, not the repo root. Repo root holds only `Documentation/`
(the original commercial template's own usage docs — not part of the deployed site) and a two-word
`Readme.txt`. All paths below are relative to `ashley/`.

## 2. Stack

- Next.js 14.2.35, Pages Router, plain JavaScript (no TypeScript)
- Sass/SCSS + Bootstrap grid, GSAP/Framer Motion/Swiper for animation, Formik for forms
- Content authored as markdown with YAML frontmatter (`gray-matter` + `remark`) — the established
  pattern for services, blog posts, and now products
- Deployed to Vercel, project `vikisol-website-9ewo` → `vikisol.in`, auto-deploys on push to `main`

## 3. Product architecture (the important part)

Products are data, not hardcoded pages:

```
src/data/products/*.md        one file per product (frontmatter: name, tagline, category,
                               status, audience, externalUrl, ctaLabel, shortDescription,
                               currentCapabilities[], visionCapabilities[], optional
                               philosophy[]/philosophyNote; body = longer narrative)
src/lib/products.js           getAllProducts(), getAllProductSlugs(), getProductData(slug)
src/pages/products/[slug].jsx one dynamic detail page for every product
src/components/ProductCard.jsx  shared card, used on /ecosystem and the homepage
src/pages/ecosystem.jsx       hub page: why multiple products exist + the product grid
```

**Adding product #4 is adding one markdown file.** No page, component, nav-wiring, sitemap, or
SEO code needs to change — `sitemap.xml.js` and both product-linking nav panels (header mega-menu,
footer) already read the same three functions everything else does. The nav *labels* themselves
(header `app.json` menu, footer `app.json` menu) are still manually maintained, matching how
`Services`' own nav children have always been hardcoded in this codebase — not a regression, just
not fully automatic. A future improvement, if the product count grows meaningfully, would be
generating those nav entries from `src/data/products/` too.

Products today (all `status: AVAILABLE`, none fabricated):

| Slug | Name | externalUrl |
|---|---|---|
| `arena` | Vikisol Arena | https://arena.vikisol.in |
| `jennysol` | JennySol | https://jennysol.vikisol.in |
| `vikisol-one` | Vikisol One | https://hrlms.vikisol.in |

## 4. Page structure

- `/` — homepage: Hero → **Ecosystem section (new)** → About → Services → Team → Testimonials →
  Partners → Latest Posts
- `/ecosystem` — new hub page (why multiple products, then the product grid)
- `/products/[slug]` — new dynamic product detail pages (arena, jennysol, vikisol-one)
- `/vikisol-arena` — **removed**, 308-redirects to `/products/arena`
- `/about`, `/services` (+8 sub-pages), `/projects` (+2 variants, detail pages), `/careers`,
  `/staffing-process`, `/team`, `/blog` (+category/pagination/detail), `/contact` — pre-existing,
  preserved, several got real meta descriptions this session (see below)
- `/privacy-policy`, `/terms-conditions`, `/cookie-policy`, `/404` — pre-existing, untouched
- `/home-2` — pre-existing, unused template variant, not linked anywhere, left as-is
- `/sitemap.xml` — new, server-rendered, built from the same accessor functions every page's own
  routing already uses

## 5. Design system (existing, preserved)

Font: **Outfit** (Google Fonts, now loaded via `<link>` in `_document.js`, not a blocking CSS
`@import`). Accent: `#FF9800` (orange). Type scale, spacing, and the `mil-*` utility-class
vocabulary are the original template's own system — new content (product pages, ecosystem
section) deliberately reuses the exact same classes/components rather than introducing a
parallel visual language.

**Known issue, not fixed this session:** `$accent` (`#FF9800`) on a white/light background
measures ~2.15:1 contrast — fails WCAG AA at every text size. On dark backgrounds it measures
~9.7:1 — excellent. This is a pre-existing, site-wide condition (used throughout via `.mil-accent`
long before this session), not something introduced here; changing it is a real brand-color
decision, not something to do unilaterally. See `VIKISOL_WEBSITE_OPEN_REQUIREMENTS.md`.

## 6. SEO

- `src/components/SEO.jsx` — shared title/description/canonical/OG/Twitter component, rendered by
  `PageBanner`/`PageBannerDark` internally
- Real per-page descriptions added to: Home, Ecosystem, all 3 product pages, About, Contact,
  Careers, Services, Team, Projects, Blog
- `robots.txt` + generated `sitemap.xml` (48 real URLs)
- Organization JSON-LD on the homepage (name/url/logo/sameAs only — no unverifiable claims)
- Not yet covered with a hand-written description: service sub-pages, individual blog posts,
  individual project pages, staffing-process, legal pages, home-2 — all still get a real
  per-page *title*, just the site-wide fallback *description*

## 7. Contact / newsletter forms

Both were pointing at hardcoded placeholder endpoints and silently discarding every real
submission. Rearchitected around env vars — see `.env.local.example` for the exact three
variables and where to get real values. Neither is configured in this environment; both degrade
honestly (contact form shows a direct-email fallback; newsletter form doesn't render at all)
rather than pretending to work.

## 8. Known issues / follow-ups

See `VIKISOL_WEBSITE_OPEN_REQUIREMENTS.md` (genuine open questions) and the session's final
report (full findings list, prioritized).

## 9. Git

Starting HEAD this session: `8ea197b`. See `git log` for the full, individually-scoped commit
history — nothing has been pushed; everything is local on `main`, pending explicit approval
(the repo auto-deploys to production on push).
