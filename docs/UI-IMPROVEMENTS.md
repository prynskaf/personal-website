# UI Improvement Recommendations

A review of the personal portfolio site with prioritized suggestions for layout, visual polish, UX, accessibility, and design system cleanup.

---

## High Impact (Do These First)

### 1. Make the navbar sticky

The scroll blur effect exists, but `position: sticky` is commented out in `Navbar.scss`. On long pages, users lose navigation after scrolling.

**File:** `src/app/components/Navbar/Navbar.scss`

```scss
// Currently commented out:
// position: sticky;
// top: 0;
```

**Recommendation:** Use `position: fixed` or `sticky` and add top padding to `<main>` so content is not hidden under the nav.

---

### 2. Fix inconsistent contact info

Two different emails are used across the site:

| Location | Email |
|----------|-------|
| Footer | `prynskaf.12@gmail.com` |
| Contact section | `princekyei.dev@gmail.com` |

**Recommendation:** Pick one primary email and use it everywhere.

---

### 3. Tighten the hero copy

The intro repeats itself and has a capitalization issue.

**File:** `src/app/components/Intro/Intro.tsx`

Current copy repeats "Currently" and overlaps in meaning:

> I'm a software Developer specializing in creating exceptional digital experiences. Currently, I focus on creating accessible, user-friendly websites and digital experiences. Currently, I'm contributing as a freelancer at Pro Advisor Group.

**Recommendations:**
- Shorten to one clear sentence about role + current work
- Fix "software Developer" → "Software Developer"

**Example rewrite:**

> I'm a Software Developer focused on accessible, user-friendly web experiences. I'm currently freelancing at [Pro Advisor Group](https://proadvisor-group.com/).

---

### 4. Unify section headings

Each section styles its title differently:

- **About** — optional `<hr>` (commented out)
- **Projects** — `.section-heading`
- **Experience** — `.work-title`

**Recommendation:** Create a shared `SectionHeading` component with the `01.`, `02.` numbering pattern and a horizontal line for visual consistency.

---

## Visual Polish

### 5. Add depth to the flat background

Everything sits on flat `#0A192F`. Subtle improvements:

- Very faint radial gradient behind the hero
- Low-opacity grid or noise texture
- Soft glow behind the about photo frame

These help the site feel less template-like without changing the color palette.

---

### 6. Strengthen link underlines

Link hover underlines use `height: .10px` — essentially invisible.

**Recommendation:** Use `1px` or `2px` for clearer hover feedback.

**Files affected:** `Intro.scss`, `About.scss`, `Work.scss`

---

### 7. Improve project card hover on desktop

Desktop project images already have a nice overlay hover. Additional options:

- Slight lift/scale on the image
- Title color shift to teal on hover
- Visible "View project →" label

**File:** `src/app/components/Project/Project.scss`

---

### 8. Re-enable or remove the "Other Projects" section

`NoteWorthy` is commented out in `page.tsx`. Either bring it back or remove it — half-finished sections suggest the site isn't complete.

**File:** `src/app/page.tsx`

---

## Layout & Spacing

### 9. Reduce rigid `100vh` sections

Intro, About, Work, and Contact all force full viewport height. On mobile this creates awkward gaps and excessive scrolling.

**Recommendation:** Switch to `min-height` + consistent vertical padding (e.g. `padding: 100px 0`).

**Files affected:**
- `src/app/components/Intro/Intro.scss`
- `src/app/components/About/About.scss`
- `src/app/components/Experience/Work.scss`
- `src/app/components/Contact/Contact.module.scss`

---

### 10. Fix the Experience section padding

**File:** `src/app/components/Experience/Work.scss`

```scss
height: 100vh;
padding: 200px 0px;
```

`200px` top padding pushes content down unnecessarily. Use `80–120px` for a more balanced feel.

---

### 11. Full-screen mobile menu overlay

The mobile menu is only a 250px side panel. A full-screen overlay with centered links feels more modern and is easier to tap on small phones.

**File:** `src/app/components/Navbar/Navbar.scss`

---

## UX & Accessibility

### 12. Make experience tabs keyboard-accessible

Company tabs are `<div onClick>` — not focusable or usable with keyboard/screen readers.

**Recommendation:** Use `<button>` elements with `aria-selected` for the active tab.

**File:** `src/app/components/Experience/Work.tsx`

---

### 13. Add active section highlighting in nav

As users scroll, highlight the current section (`About`, `Experience`, etc.) in the navbar. Intersection Observer makes this straightforward and is expected on single-page portfolios.

**File:** `src/app/components/Navbar/Navbar.tsx`

---

### 14. Add visible focus states

Buttons and links likely have no `:focus-visible` styles. Teal outline rings on keyboard focus are important for accessibility and polish.

**Files affected:** `Button.scss`, `Navbar.scss`, link styles across components

---

### 15. Fix placeholder social links

Footer links to generic URLs without profile paths:

| Platform | Current URL |
|----------|-------------|
| X/Twitter | `https://x.com/` |
| CodePen | `https://codepen.io/` |

**Recommendation:** Use real profile URLs or remove the links.

**File:** `src/app/components/Footer/Footer.tsx`

---

## Design System Cleanup

### 16. Consolidate styling approach

The project mixes:

- SCSS files
- CSS modules
- CSS variables
- Tailwind (installed but barely used — only in `not-found.tsx`)

**Recommendation:** Pick one primary system. SCSS + CSS variables already work well; either remove Tailwind or commit to it for utilities.

---

### 17. Use CSS variables consistently

**File:** `src/app/globals.css`

Variables are defined:

```css
--lightest-slate: #ccd6f6;
--slate: #8892b0;
--green: #64ffda;
--navy: #0a192f;
```

Many files still hardcode `#64ffda`, `#8892b0`, `#ccd6f6`. Consolidating makes theme tweaks easier.

---

### 18. Actually use the Geist fonts

**File:** `src/app/layout.tsx`

Geist and Geist Mono are loaded, but body text mostly uses system fonts from CSS variables. Either apply Geist to headings/body or drop the font import to reduce load time.

---

## Small Details That Add Polish

| Area | Suggestion |
|------|------------|
| Footer GitHub stats | Show a skeleton or `—` instead of `0` while loading |
| About photo | Use descriptive `alt` text instead of `"about-image"` |
| Resume button | Add download icon or "PDF" label for clarity |
| Contact CTA | Add a second button: "View GitHub" or "Download Resume" |
| Scroll | Subtle scroll-progress bar in the navbar |
| Animations | Stagger hero children with Framer Motion for a stronger first impression |

---

## What Already Works Well

- Alternating project layout with image overlays
- Grayscale → color photo hover in About
- Tabbed experience section with active indicator
- Side social bars on desktop (classic portfolio look)
- Consistent teal/navy color story
- Responsive project cards with blurred background on mobile

---

## Suggested Priority Order

| Priority | Tasks |
|----------|-------|
| **1** | Sticky navbar, unified email, hero copy |
| **2** | Section heading component, spacing fixes (`100vh`, Experience padding) |
| **3** | Accessibility (focus states, keyboard tabs, active nav) |
| **4** | Visual differentiation (background depth, stronger hovers) |
| **5** | Design system cleanup (CSS vars, remove dead code in `Footer.module.scss`) |

---

## Quick Reference: Key Files

| Component | TSX | Styles |
|-----------|-----|--------|
| Navbar | `src/app/components/Navbar/Navbar.tsx` | `Navbar.scss` |
| Intro | `src/app/components/Intro/Intro.tsx` | `Intro.scss` |
| About | `src/app/components/About/About.tsx` | `About.scss` |
| Experience | `src/app/components/Experience/Work.tsx` | `Work.scss` |
| Projects | `src/app/components/Project/Project.tsx` | `Project.scss` |
| Contact | `src/app/components/Contact/Contact.tsx` | `Contact.module.scss` |
| Footer | `src/app/components/Footer/Footer.tsx` | `Footer.module.scss` |
| Global tokens | — | `src/app/globals.css` |
| Layout / fonts | `src/app/layout.tsx` | — |
