# Portfolio Richness — Feature Todo

Roadmap to make the portfolio feel more premium, scalable, and founder-focused.

**Progress:** 14 / 18

---

## Priority 1 — Hero & positioning

- [x] **Founder hero headline** — Subtitle: "Founder & Frontend Engineer"
- [x] **Primary CTA** — "View CV Wiser" button linking to https://cvwiser.com/
- [x] **Secondary CTA** — Resume download button in hero
- [x] **Stronger one-liner** — Product-focused headline about AI SaaS for job seekers

---

## Priority 2 — CV Wiser case study

- [x] **Featured case study block** — Problem → solution → role layout in SaaS section
- [ ] **Product screenshots** — Replace placeholder with real CV Wiser UI (editor, ATS score, dashboard)
- [x] **Metrics row** — Templates, ATS scoring, export, live status
- [x] **Case study CTAs** — "Visit Product" + "Start Free" buttons
- [ ] **Update project image** — Swap `cv-generator.png` for actual CV Wiser screenshot

---

## Priority 3 — Content & hierarchy

- [x] **Trim About tech list** — Grouped into Frontend, Backend & Data, SaaS & Tools
- [x] **Shorter project descriptions** — Bullet highlights on project cards
- [x] **Project metadata pills** — Role, Status, Year on cards
- [ ] **Social proof** — One testimonial or quote (beta user, colleague, or CV Wiser user)

---

## Priority 4 — Visual polish

- [x] **Section transitions** — Subtle gradient dividers between sections
- [x] **Consistent card system** — Case study + project cards share pill/meta patterns
- [ ] **Code Notebook launch** — Update when live: remove coming-soon, add link + screenshot

---

## Priority 5 — SEO & metadata

- [x] **Page title & description** — Founder @ CV Wiser positioning
- [ ] **Open Graph image** — Custom OG card for LinkedIn/Twitter link previews
- [ ] **Structured data** — JSON-LD for Person + WebSite (optional)

---

## Priority 6 — Architecture & scalability

- [x] **Centralize content** — CV Wiser case study in `content/cvWiser.ts`
- [ ] **Reduce client bundle** — Split animations; avoid full-page `'use client'` where possible
- [ ] **Design system cleanup** — Finish CSS variable migration; decide Tailwind vs SCSS
- [ ] **Shared CTA / pill components** — Partially done via case study + intro CTAs

---

## Done

- [x] Hero upgrade — `Intro.tsx`, `Intro.scss`
- [x] CV Wiser case study — `CvWiserCaseStudy/`, `content/cvWiser.ts`
- [x] About tech categories — `About.tsx`
- [x] Project highlights + metadata pills — `ProjectList.tsx`, `projects.ts`
- [x] Section dividers — `globals.css`
- [x] SEO metadata — `layout.tsx`

---

## Notes

| Item | Decision needed |
|------|-----------------|
| CV Wiser screenshots | Add real product images to `public/` when available |
| Testimonial | Source quote or skip until available |
| OG image | Design custom graphic or auto-generate from hero |

## Related docs

- [UI-IMPROVEMENTS.md](./UI-IMPROVEMENTS.md) — Completed UI audit
- [UI-TODO.md](./UI-TODO.md) — Completed UI fixes checklist
