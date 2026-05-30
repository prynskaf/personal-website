# Portfolio Richness — Feature Todo

Roadmap to make the portfolio feel more premium, scalable, and founder-focused.

**Progress:** 0 / 18

---

## Priority 1 — Hero & positioning

- [ ] **Founder hero headline** — Add subtitle: "Founder & Frontend Engineer" under name
- [ ] **Primary CTA** — "View CV Wiser" button linking to https://cvwiser.com/
- [ ] **Secondary CTA** — "Download Resume" button in hero (alongside scroll icon)
- [ ] **Stronger one-liner** — Lead with product value, not generic "I build SaaS"

---

## Priority 2 — CV Wiser case study

- [ ] **Featured case study block** — Problem → solution → role layout above or within SaaS section
- [ ] **Product screenshots** — Replace placeholder with real CV Wiser UI (editor, ATS score, dashboard)
- [ ] **Metrics row** — e.g. templates count, ATS scoring, PDF export, live status badge
- [ ] **Case study CTAs** — "Visit product" + "Try free" buttons
- [ ] **Update project image** — Swap `cv-generator.png` for actual CV Wiser screenshot

---

## Priority 3 — Content & hierarchy

- [ ] **Trim About tech list** — Reduce to ~8 core skills + grouped categories or "Also experienced with…"
- [ ] **Shorter project descriptions** — Bullet highlights instead of long paragraphs on cards
- [ ] **Project metadata pills** — Add Role, Status (Live / Coming Soon), Year on cards
- [ ] **Social proof** — One testimonial or quote (beta user, colleague, or CV Wiser user)

---

## Priority 4 — Visual polish

- [ ] **Section transitions** — Subtle dividers or fade between major sections
- [ ] **Consistent card system** — Unify SaaS, projects, and experience visual language
- [ ] **Code Notebook launch** — Update when live: remove coming-soon, add link + screenshot

---

## Priority 5 — SEO & metadata

- [ ] **Page title & description** — e.g. "Prince Kyei | Founder @ CV Wiser · Frontend Engineer"
- [ ] **Open Graph image** — Custom OG card for LinkedIn/Twitter link previews
- [ ] **Structured data** — JSON-LD for Person + WebSite (optional)

---

## Priority 6 — Architecture & scalability

- [ ] **Centralize content** — Move copy, projects, experience to `content/` or JSON files
- [ ] **Reduce client bundle** — Split animations; avoid full-page `'use client'` where possible
- [ ] **Design system cleanup** — Finish CSS variable migration; decide Tailwind vs SCSS
- [ ] **Shared CTA / pill components** — Reuse across hero, SaaS, contact

---

## Done

_Move completed items here._

---

## Notes

| Item | Decision needed |
|------|-----------------|
| CV Wiser metrics | Real numbers vs placeholders until analytics available |
| Testimonial | Source quote or skip until available |
| OG image | Design custom graphic or auto-generate from hero |
| Content CMS | JSON files vs MDX vs hardcoded components |

## Related docs

- [UI-IMPROVEMENTS.md](./UI-IMPROVEMENTS.md) — Completed UI audit
- [UI-TODO.md](./UI-TODO.md) — Completed UI fixes checklist
