# Vikisol Website — Performance Report

What was actually measured locally this session, what changed, and what genuinely needs
production measurement that local tooling can't produce. No numbers below are estimated or
fabricated - each is either a real build-output figure, a real file-size measurement, or
explicitly marked unknown.

---

## What was measured (real, local)

**JS bundle**, from `npm run build`:
- Shared framework/runtime: 139 kB first-load JS on every page (framework 44.9 kB, main
  33.9 kB, `_app` 49.1 kB, plus smaller shared chunks)
- Homepage specifically: 197 kB first-load JS (7.15 kB page-specific + the 139 kB shared base) -
  this includes the new Ecosystem section; it added roughly 0.7 kB, not a meaningful cost
- All other pages fall in the 183–196 kB first-load range - broadly consistent, no page is a
  major outlier

**Fonts**: previously loaded via a render-blocking `@import url(...)` inside the compiled CSS
(fixed this session - see commit `perf: stop loading Google Fonts via a render-blocking CSS
@import`). Font Awesome was being loaded *twice*, once correctly via a local `<link>`, once
redundantly via the same kind of blocking `@import` from a CDN - the redundant one removed.

**Images and video** (`public/img`, 91 MB total across 39 files - the real, measured number):
- Static images (jpg/png/gif/svg): individually reasonable, largest is 460 KB, most under 100 KB
- **Video: 14 `.mp4` files totaling ~84 MB** - the actual bulk of the 91 MB. Individual files
  range from 2.3 MB up to **14 MB** (`public/img/works/3/1.mp4`). These are hover/interaction
  preview videos in the portfolio gallery (`InteractiveMediaFrame.jsx`/`InteractiveProjectCard.jsx`
  - both of which do correctly check `prefers-reduced-motion` before playing). This is real,
  meaningful weight that a visitor's browser may load depending on how eagerly these components
  fetch their `<video>` sources - **not fixed this session** (re-encoding video without visual
  QA risks a real quality regression I can't verify locally; flagged with a concrete
  recommendation instead of guessed at).
- No `next/image` usage anywhere in the codebase (confirmed by grep) - every `<img>` is plain
  HTML, so there's no automatic responsive sizing or format conversion happening for any of the
  39 image files either. Not converted broadly this session (many live inside
  animation/gallery/slider components whose exact behavior with `next/image`'s wrapper couldn't
  be visually verified without a browser this session had time to drive) - flagged as a
  follow-up, not silently left unmentioned.

**Third-party scripts**: none found in `_document.js`/`_app.js` beyond the plugin CSS/JS this
template already ships (Bootstrap grid, Font Awesome, Swiper, Magnific Popup) - no analytics, no
chat widgets, nothing unexpected loading.

---

## What changed this session

1. Google Fonts moved from a blocking CSS `@import` to a `<link rel="preconnect">` +
   `<link rel="stylesheet">` pair in `_document.js` - lets the browser start the font fetch in
   parallel with everything else instead of after parsing the stylesheet that requested it.
2. The redundant CDN Font Awesome `@import` removed entirely (a correct local copy was already
   loading).
3. New pages (`/ecosystem`, `/products/[slug]`) are static-generated (SSG via `getStaticProps`),
   consistent with the rest of the site - no new client-side data fetching introduced.
4. `sitemap.xml` is the one new server-rendered (`getServerSideProps`) route - by design, the
   standard Pages Router pattern for a hand-built sitemap; it adds no weight to any page a real
   visitor loads.

---

## What genuinely needs production measurement (not obtainable locally)

Per instruction, nothing was pushed to production this session, so none of the following could be
measured against what real visitors actually experience:

- **Real Core Web Vitals** (LCP, INP, CLS) from actual traffic - Vercel Analytics or
  Chrome UX Report data, only available once this is live and has real visitors
- **Real network-condition load time** for the video-heavy portfolio pages on a throttled/mobile
  connection - local `npm run build` output shows bundle *size*, not real-world load time under
  actual latency/bandwidth conditions
- **CDN/edge cache behavior** for the 84 MB of video assets - whether Vercel's edge network
  serves these efficiently in practice depends on real request patterns this session has none of
- **Actual Lighthouse/PageSpeed score** against the live domain - running Lighthouse against a
  local dev/start server does not reflect Vercel's production CDN, caching headers, or edge
  compression, so it wasn't run here to avoid reporting a number that wouldn't match production

**Recommended action:** once any part of this session's work is deployed, run Lighthouse (or
Vercel's own Speed Insights) against the live URL and treat that as the real baseline - not
anything measured locally.

---

## Recommendation, not yet actioned

The 84 MB of portfolio preview video is the single largest concrete opportunity found this
session. Recommended next step for whoever owns that content: re-encode to a lower bitrate/
resolution (these are small hover-preview players, not full-screen video) and confirm visually
before replacing - specialized enough (real risk of visible quality loss without a proper
before/after review) that it wasn't done blind in this session.
