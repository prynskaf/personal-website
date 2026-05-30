# UI Improvements — Todo

Action checklist derived from [UI-IMPROVEMENTS.md](./UI-IMPROVEMENTS.md).

**Progress:** 22 / 24

---

## Priority 1 — High impact

- [x] **Sticky navbar** — Fixed nav with blur on scroll; body `padding-top` for offset
- [x] **Unified email** — `princekyei.dev@gmail.com` via `siteConfig.ts` in Contact + Footer
- [x] **Hero copy** — Shortened intro text, fixed capitalization, stagger animation

---

## Priority 2 — Layout & consistency

- [x] **SectionHeading component** — Shared heading with line; used in About, Experience, Projects, Contact, NoteWorthy
- [x] **Section spacing** — Replaced rigid `100vh` with `min-height` + consistent padding
- [x] **Experience padding** — Reduced from `200px` to `100px`
- [x] **NoteWorthy section** — Re-enabled in `page.tsx`

---

## Priority 3 — Accessibility & UX

- [x] **Keyboard-accessible experience tabs** — `<button role="tab">` with `aria-selected`
- [x] **Active nav highlighting** — Intersection Observer highlights current section
- [x] **Focus states** — Global `:focus-visible` outline in `globals.css`
- [x] **Social links** — Removed generic X and CodePen links; kept GitHub, Instagram, LinkedIn
- [x] **Full-screen mobile menu** — Full-viewport overlay with centered links

---

## Priority 4 — Visual polish

- [x] **Background depth** — Subtle radial gradients on body
- [x] **Link underlines** — Global `.link-underline` class with 2px hover line
- [x] **Project card hover** — Title color shift, image scale, "View project →" label

---

## Priority 5 — Design system

- [ ] **Styling approach** — Decide on SCSS vs Tailwind; remove unused approach or document the choice
- [x] **CSS variables** — Applied in updated components; `--light-navy`, `--nav-height` added
- [x] **Geist fonts** — Applied to body via `globals.css`
- [x] **Footer cleanup** — Removed commented CSS blocks in `Footer.module.scss`

---

## Nice to have — Small polish

- [x] **GitHub stats loading** — Shows `—` while fetching
- [x] **About photo alt text** — Descriptive alt added
- [x] **Resume button** — Download icon added
- [x] **Contact secondary CTA** — "View GitHub" button added
- [x] **Scroll progress bar** — Teal bar in navbar
- [x] **Hero animation** — Staggered Framer Motion intro

---

## Done

- [x] Sticky navbar — `Navbar.scss`, `globals.css`
- [x] Unified email — `siteConfig.ts`, `Contact.tsx`, `Footer.tsx`
- [x] Hero copy + animation — `Intro.tsx`, `Intro.scss`
- [x] SectionHeading — `SectionHeading/` component
- [x] Spacing fixes — Intro, About, Work, Contact
- [x] Experience tabs a11y — `Work.tsx`
- [x] Active nav + scroll progress — `Navbar.tsx`
- [x] Focus states — `globals.css`
- [x] Social links cleanup — `Footer.tsx`
- [x] Full-screen mobile menu — `Navbar.scss`
- [x] Background gradients — `globals.css`
- [x] Link underlines — `globals.css`
- [x] Project hovers — `Project.scss`
- [x] NoteWorthy re-enabled — `page.tsx`
- [x] Footer cleanup — `Footer.module.scss`
- [x] GitHub stats, alt text, resume icon, contact CTA

---

## Notes

| Item | Decision |
|------|----------|
| Primary email | `princekyei.dev@gmail.com` |
| NoteWorthy | Re-enabled |
| Tailwind | Still installed; only used in `not-found.tsx` — decide keep or remove |
| X / CodePen | Removed until real profile URLs are available |
