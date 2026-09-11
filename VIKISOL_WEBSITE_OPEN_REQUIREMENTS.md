# Vikisol Website — Open Requirements

Genuine open questions from this session's ecosystem-transformation work — things that couldn't
be verified from the repository, the build, or the ecosystem's other repos, and that only someone
at Vikisol can answer. Nothing below blocked implementation; each item has a documented default or
was handled conservatively in the meantime.

---

### 1. Real Formspree and Mailchimp credentials

**Why it matters:** the contact form and newsletter signup are architecturally fixed (env-var
driven, no more hardcoded placeholder) but functionally inactive until real values exist.

**What was checked:** the existing implementation, confirmed no real credentials exist anywhere
in the repo or its history for either service.

**Default in the meantime:** contact form renders normally and tells visitors to email
`connect@vikisol.in` directly instead of attempting a submit that would fail. Newsletter form
doesn't render at all when unconfigured.

**Exact answer needed:**
- `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` — a real Formspree form's endpoint URL
- `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` + `NEXT_PUBLIC_NEWSLETTER_BOT_FIELD` — a real Mailchimp
  audience's embedded-form POST URL and its hidden anti-bot field name

(Set in Vercel's Project Settings → Environment Variables, or `.env.local` for local dev — see
`ashley/.env.local.example`.)

---

### 2. Does Vikisol's own hiring go through Arena?

**Why it matters:** the old `/vikisol-arena` page conflated Arena with Vikisol's internal
hiring/ATS. This session deliberately separated the two - `/careers` (Vikisol's own static job
listing) and `/products/arena` (the real Arena product) no longer claim to be the same thing, and
the rewritten Arena copy doesn't state whether Vikisol's own roles are actually posted on Arena.

**What was checked:** the ecosystem takeover session confirmed Arena serves real third-party job
postings (e.g., a listing from Zoho); nothing confirms or denies whether Vikisol's own postings
also go through it.

**Default in the meantime:** the two are presented as related but distinct - no claim either way.

**Exact answer needed:** should `/careers` and Arena be explicitly connected in copy (e.g. "our
own roles are also on Arena"), and if so, is that actually true today?

---

### 3. Vikisol One's real audience and access model

**Why it matters:** the instructions were explicit that Vikisol One must not appear to offer
public login/signup. The current product page links out to `https://hrlms.vikisol.in` with a
neutral CTA ("Visit Vikisol One," not "Log in" or "Get started") and describes access as
organization-controlled.

**What was checked:** confirmed the domain is real and live (200 OK). Did not verify what a public
visitor actually sees when they land there (a marketing page, a bare login form, something else) -
no browser tooling was used against that separate product's live surface this session.

**Default in the meantime:** conservative, neutral link + explicit "access is organization-
controlled" language, no claim about Vikisol's own internal usage of it (an earlier draft claimed
this and was removed - unverified).

**Exact answer needed:** confirm the CTA/copy reads correctly against what actually happens when
someone clicks through, and whether Vikisol wants to state (if true) that it uses Vikisol One for
its own workforce.

---

### 4. Is a fourth product imminent enough to reference?

**Why it matters:** the architecture is now built so a new product is one markdown file - but no
placeholder/"coming soon" product was added, per the explicit instruction not to invent one just
to look bigger.

**Exact answer needed:** if there's a real, announced-or-announceable next product, its real name,
one-line description, and status (`AVAILABLE` / `COMING SOON` / `IN DEVELOPMENT`) is all that's
needed to add it - happy to do that in a follow-up once that's confirmed.

---

### 5. Accent color accessibility

**Why it matters:** `$accent` (`#FF9800`) measures ~2.15:1 contrast against white/light
backgrounds - fails WCAG AA at every text size (passes fine, ~9.7:1, on dark backgrounds). This
is a pre-existing, site-wide condition via `.mil-accent`, not something introduced this session.

**Why this wasn't just fixed:** it's the site's actual brand accent color, used everywhere -
adjusting the shade is a brand-identity decision, and doing it safely across 53 pages needs real
visual QA this session didn't have time for.

**Exact answer needed:** is a slightly darker/more saturated orange (same hue, better contrast on
light backgrounds - e.g. something in the `#B8600B`–`#CC7A00` range, needs picking against the
real brand guideline if one exists) acceptable, or should the light-background usage be
restructured instead (e.g. always pairing accent text with a dark chip/background)?
