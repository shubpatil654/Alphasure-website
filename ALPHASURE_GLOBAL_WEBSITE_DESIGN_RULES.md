# ALPHASURE — GLOBAL WEBSITE DESIGN & UI CONSISTENCY RULES

**Document type:** Persistent website design-system rules for AI-assisted implementation
**Applies to:** Every page, route, section, component, state, breakpoint, and future page in the Alphasure website
**Primary objective:** Eliminate visual inconsistency across Pinterest-inspired sections while preserving each section's intended layout, content hierarchy, and storytelling purpose.

---

## 0. HOW TO USE THIS FILE

Treat this file as a **global, persistent design-system authority** for the entire Alphasure website.

Before creating or modifying any page or section:

1. Read and apply these rules.
2. Inspect the existing codebase and identify the current reusable layout, typography, spacing, button, card, navigation, footer, container, and image components.
3. Consolidate existing one-off styles into shared design tokens and reusable components wherever practical.
4. Audit all existing pages, not only the page currently being edited.
5. Preserve page-specific content and the useful structural idea from a Pinterest reference, but do **not** import a second visual language from the reference.
6. After implementation, visually inspect representative desktop, tablet, and mobile pages and correct inconsistencies.

### Priority order
When instructions conflict, use this order:

**Global Alphasure design rules > existing reusable Alphasure component rules > page-specific content/layout requirements > Pinterest/reference styling.**

A Pinterest reference is an inspiration for composition, imagery, or interaction. It is **not** authority for Alphasure's typography, spacing, colors, radii, buttons, grid, or component styling.

---

# 1. CORE DESIGN PRINCIPLE

The website must feel like **one product with many pages**, not a collection of independently designed landing pages.

Every page should share the same:

- font family
- type scale
- font weights
- line-height system
- text color hierarchy
- button language
- container width
- grid logic
- spacing scale
- section rhythm
- border treatment
- corner-radius system
- image treatment
- icon style
- interaction behavior
- responsive behavior
- header and footer behavior

Page-to-page variation is allowed through **composition, content, imagery, and section structure** — not through arbitrary styling values.

---

# 2. DESIGN TOKENS — SINGLE SOURCE OF TRUTH

Create or consolidate these into a central theme/token file. Use CSS variables, theme tokens, or the project's equivalent. Do not hard-code repeated values in individual components.

## 2.1 Color tokens

```css
:root {
  --color-primary: #00AEEF;
  --color-primary-dark: #005AAB;
  --color-primary-soft: #6CCFF6;

  --color-ink: #2B2B2E;
  --color-ink-soft: #5B6472;
  --color-ink-muted: #7A8491;

  --color-line: #E7EAF0;
  --color-surface: #FFFFFF;
  --color-surface-tint: #F4F9FD;
  --color-surface-soft: #F8FAFC;

  --color-success: #1B8A5A;
  --color-warning: #B7791F;
  --color-error: #C53030;

  --color-overlay: rgba(43, 43, 46, 0.48);
}
```

### Color rules

- White is the primary page background unless a section intentionally uses `--color-surface-tint` or another approved neutral surface.
- Use `--color-ink` for primary headlines and high-priority text.
- Use `--color-ink-soft` for body copy and supporting descriptions.
- Use `--color-primary` for important highlights, links, accents, badges, and active states.
- Use `--color-primary-dark` for strong CTA backgrounds where higher contrast is useful.
- Do not introduce random blues, greys, off-whites, gradients, or brand colors from Pinterest references.
- A new color may be added only when it serves a real functional purpose and is added to the global token system first.

---

# 3. TYPOGRAPHY SYSTEM

## 3.1 Font family

Use **Inter** as the single global typeface unless the existing project already has an approved licensed brand font that must remain.

```css
--font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", sans-serif;
```

Do not mix unrelated fonts between pages or sections.

## 3.2 Font weights

Use only these weights:

- 400 — regular/body
- 500 — medium/labels/navigation/supporting emphasis
- 600 — semibold/buttons/subheads
- 700 — major headings/high emphasis

Avoid 300, 800, and 900 unless the brand system is deliberately revised globally.

## 3.3 Type scale

Use a responsive scale. Prefer `clamp()` so typography changes smoothly between breakpoints.

| Element | Desktop | Tablet | Mobile | Weight | Line height |
|---|---:|---:|---:|---:|---:|
| Display / Hero H1 | 64px | 56px | 44px | 700 | 1.05–1.10 |
| H2 | 48px | 42px | 36px | 700 | 1.10–1.15 |
| H3 | 32px | 30px | 26px | 600 | 1.15–1.20 |
| H4 | 24px | 22px | 20px | 600 | 1.20–1.25 |
| Large body / lead | 20px | 19px | 18px | 400 | 1.55–1.65 |
| Body | 17px | 16px | 16px | 400 | 1.60–1.70 |
| Small body | 15px | 15px | 14px | 400 | 1.50–1.60 |
| Eyebrow / label | 13px | 13px | 12px | 600 | 1.20 |
| Button | 15px | 15px | 15px | 600 | 1 |
| Navigation | 15px | 15px | 15px | 500 | 1.2 |

### Recommended CSS values

```css
--text-display: clamp(44px, 5vw, 64px);
--text-h2: clamp(36px, 3.6vw, 48px);
--text-h3: clamp(26px, 2.5vw, 32px);
--text-h4: clamp(20px, 1.9vw, 24px);
--text-lead: clamp(18px, 1.55vw, 20px);
--text-body: 17px;
--text-small: 15px;
--text-label: 13px;
--text-button: 15px;
```

### Typography rules

- Never choose heading size by visual intuition on one section only.
- Do not resize a heading merely to make one Pinterest reference look identical to its screenshot.
- Preserve the global type hierarchy even when the section layout changes.
- Headings should have deliberate maximum widths to avoid awkward line lengths.
- Body copy should normally be no wider than approximately 60–70 characters per line.
- Hero H1 should normally be limited to `max-width: 700px`.
- Section H2 should normally be limited to `max-width: 680px`.
- Descriptions should normally be limited to `max-width: 620px`.
- Do not use all-caps for long sentences. Use uppercase only for short labels/eyebrows when appropriate.
- Avoid excessive bolding inside paragraphs.

---

# 4. GLOBAL LAYOUT / CONTAINER SYSTEM

Use a consistent site-wide container.

```css
--container-max: 1280px;
--gutter-desktop: 32px;
--gutter-tablet: 24px;
--gutter-mobile: 20px;
```

### Rules

- All major sections align to the same left and right content boundaries unless a full-bleed visual is intentional.
- Do not create page-specific container widths such as 1120px on one page and 1240px on another without a strong structural reason.
- Full-bleed imagery may extend beyond the content container while text remains aligned to the global container.
- Use the same container component everywhere.

```css
.container {
  width: min(100% - 2 * var(--gutter-mobile), var(--container-max));
  margin-inline: auto;
}
```

Adjust gutters responsively at tablet/desktop breakpoints.

---

# 5. GLOBAL GRID

Use a predictable 12-column desktop grid for complex layouts and a simpler stacked/grid system on smaller screens.

### Desktop
- 12 columns
- 24px column gap by default
- 32px outer page gutters

### Tablet
- 8-column logic where useful
- 20–24px gaps
- 24px outer gutters

### Mobile
- 1–2 column layouts only when content genuinely benefits from it
- 16–20px gaps
- 20px outer gutters

### Column proportions

For two-column hero/content sections, prefer approximately:

- 55% text / 45% visual for a standard content-led hero
- 60% / 40% when text needs more room
- 45% / 55% when the visual is the storytelling focus

Do not arbitrarily change proportions from section to section simply because a reference screenshot used a different split.

---

# 6. SPACING SYSTEM

Use an **8px base spacing system**.

Approved spacing tokens:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-7: 32px;
--space-8: 40px;
--space-9: 48px;
--space-10: 56px;
--space-11: 64px;
--space-12: 72px;
--space-13: 80px;
--space-14: 96px;
--space-15: 120px;
```

## 6.1 Section vertical rhythm

Default section padding:

- Desktop: `96px 0` to `120px 0`
- Tablet: `80px 0` to `96px 0`
- Mobile: `64px 0` to `72px 0`

Use 120px when a section is a major visual statement. Use 96px for regular content sections.

Do not alternate randomly between 47px, 73px, 91px, 113px, 127px, etc. Convert one-off values to the nearest approved token.

## 6.2 Internal spacing hierarchy

Use this consistent relationship:

- Eyebrow → heading: 12–16px
- Heading → description: 16–24px
- Description → CTA: 24–32px
- Section intro → content grid: 48–64px
- Card title → card description: 8–12px
- Card content → card CTA/link: 20–24px
- Major content blocks: 48–80px apart

The larger the hierarchy, the larger the gap should be. Never use equal spacing for elements with clearly different semantic relationships.

---

# 7. SECTION STRUCTURE

Every major section should follow a deliberate internal hierarchy.

### Standard section pattern

```text
Section eyebrow / label        (optional)
↓
Section heading
↓
Supporting description        (optional)
↓
Content / cards / image / proof / CTA
```

### Section intro alignment

Default to left alignment for business/service content.

Centered section intros are acceptable for sections that are intentionally editorial, testimonial-led, or highly visual, but the same rules for width, typography, and spacing still apply.

### Do not

- center text simply because a Pinterest reference did
- mix left and center alignment without a clear compositional reason
- change heading hierarchy from section to section
- create unusually tall empty gaps to mimic reference screenshots

---

# 8. HERO SYSTEM

The hero is one of the strongest consistency anchors on the website.

### Default hero structure

```text
[Left: eyebrow / H1 / description / CTA(s)]   [Right: visual]
```

### Hero rules

- Desktop hero content should generally sit within a min-height of approximately 620–760px depending on the visual.
- Do not force every hero to exactly the same height if the content demands otherwise.
- Maintain consistent top/bottom breathing room.
- Text column should normally occupy 50–60% of available hero content width.
- Visual column should normally occupy 40–50%.
- Keep the H1 at the global display size.
- CTA button height and typography must match the global button system.
- Do not introduce a new hero-specific font, button shape, radius, or spacing system.

### Hero visual priority

The image/illustration should support the message. It should not compete with the H1 or CTA.

---

# 9. BUTTON SYSTEM

All buttons across the site must look like members of the same family.

## Primary button

```css
height: 48px;
padding: 0 20px;
border-radius: 10px;
font-size: 15px;
font-weight: 600;
```

Use `--color-primary-dark` or the approved primary brand treatment as the default strong CTA background, with white text.

## Secondary button

Same height, type, radius, and internal padding as the primary button. Use a lighter treatment such as white/background + border or approved soft background.

## Text / tertiary CTA

Use only where a button would add unnecessary visual weight. Maintain the same text sizing and weight as the global CTA language.

### Button rules

- Do not create pill-shaped buttons unless the component is explicitly designated as a pill control.
- Do not mix 8px, 12px, 16px, 24px radii across unrelated buttons.
- Do not use different font sizes for different page buttons.
- Button labels should be concise and action-oriented.
- Icon placement, icon size, and icon-to-label gap should be consistent.

---

# 10. CARDS

Cards should be visually related even when used for different content types.

### Base card treatment

```css
border: 1px solid var(--color-line);
border-radius: 16px;
background: var(--color-surface);
padding: 24px;
```

### Card hierarchy

- Eyebrow/label: optional
- Icon or visual: optional
- Title: H4 or approved card-title size
- Description: body/small-body
- CTA/link: optional

### Card consistency rules

- Keep card padding consistent across grids.
- Use equal visual heights when a grid is intended to feel structured.
- Do not mix strongly rounded cards with sharp cards in the same component family.
- Avoid excessive shadows. Prefer border + subtle elevation.
- Use shadows primarily for floating elements, menus, or deliberate depth—not every card.

---

# 11. IMAGE & VISUAL SYSTEM

Pinterest references often introduce the greatest source of inconsistency through imagery. Normalize the treatment even when image sources differ.

## 11.1 Photography direction

Alphasure imagery should feel:

- premium
- credible
- modern
- professional
- human
- international
- technology-enabled
- natural rather than staged

Prefer real people, real environments, authentic expressions, clean workspaces, professional teams, finance/accounting contexts, technology, and business collaboration.

Avoid generic "corporate handshake" stock imagery, exaggerated smiles, unrealistic office scenes, cartoon accounting imagery, overly glossy 3D renders, or visual styles that make different pages feel like different brands.

## 11.2 Image treatment

Use a small set of approved aspect ratios:

- Hero visual: approximately 4:3 or 1:1 depending on composition
- Standard content image: 4:3
- Card thumbnail: 16:10 or 4:3
- Editorial/feature visual: 3:2

Do not mix arbitrary aspect ratios within the same component family.

Default behavior:

```css
img {
  display: block;
  width: 100%;
  object-fit: cover;
}
```

Apply consistent corner radii to image containers. Default: `16px` or `20px` depending on component size.

## 11.3 Image consistency

When using multiple images in one section:

- maintain consistent crop style
- maintain consistent radius
- maintain consistent visual density
- avoid one image appearing dramatically brighter/darker unless intentionally art-directed
- avoid mixing illustrations, photographs, 3D assets, and icons without a compositional reason

---

# 12. ICONOGRAPHY

Use one icon family throughout the website.

Rules:

- Prefer simple, modern line icons.
- Keep stroke weight consistent.
- Use consistent dimensions: normally 20px, 24px, or 32px depending on context.
- Do not mix filled icons with thin outline icons within the same component family.
- Do not import decorative Pinterest icons if they introduce a different visual language.

---

# 13. BORDERS, RADIUS & SHADOWS

## Radius tokens

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
--radius-pill: 999px;
```

Use:

- 8–12px for controls
- 12–16px for cards
- 16–24px for large image/media containers
- pill only for badges/tags/pills where semantically appropriate

## Border

Default subtle border:

`1px solid var(--color-line)`

## Shadow

Keep shadows subtle and consistent. Use depth only when it improves hierarchy.

Do not give every section or card a shadow.

---

# 14. NAVIGATION & HEADER

The header must remain visually consistent across all pages.

### Standard rules

- Same height across the site unless a special campaign/landing experience explicitly requires otherwise.
- Same logo size and alignment.
- Same navigation typography.
- Same CTA button.
- Same horizontal padding system.
- Same active/hover treatment.

Suggested desktop header height: **80px**.

On mobile:

- preserve the same typographic hierarchy
- collapse navigation predictably
- maintain 20px side padding
- keep tap targets at least 44px high/wide

The header should not inherit styling from the section below it.

---

# 15. FOOTER

The footer is a global component and must be identical in structural logic on every page.

Rules:

- same logo treatment
- same column grid
- same heading hierarchy
- same link typography
- same spacing
- same legal/copyright treatment
- same background treatment

Page-specific footer variations should be rare and deliberate.

---

# 16. RESPONSIVE DESIGN SYSTEM

Design mobile as a responsive transformation of the desktop system, not as a completely separate visual design.

### Breakpoint guidance

Use the project's established breakpoints where possible. If none exist, use a simple system around:

- Mobile: `< 640px`
- Tablet: `640px–1023px`
- Desktop: `>= 1024px`
- Wide desktop: `>= 1440px` only when needed

Do not create excessive micro-breakpoints.

### Mobile rules

- Stack columns that no longer have enough width to breathe.
- Preserve the same content hierarchy.
- Reduce section padding, but do not eliminate breathing room.
- Reduce heading sizes according to the global scale.
- Keep buttons comfortable to tap.
- Do not force desktop navigation patterns into mobile.
- Do not allow horizontal overflow.
- Do not shrink text below the approved scale merely to fit more content on screen.

### Responsive priority

When a layout becomes crowded, prioritize in this order:

1. readability
2. hierarchy
3. accessibility
4. spacing
5. decorative similarity to the Pinterest reference

---

# 17. MOTION & INTERACTION

Animation should feel polished, restrained, and purposeful.

Default timing:

```css
--motion-fast: 160ms;
--motion-base: 220ms;
--motion-slow: 320ms;
```

Use smooth ease-out/ease-in-out transitions.

Animations may be used for:

- hover states
- subtle image movement
- cards entering the viewport
- accordion transitions
- navigation states
- lightweight scroll storytelling

Avoid:

- excessive parallax
- constant looping motion
- large elements flying around the screen
- long blocking animations
- motion that harms readability or performance

Respect `prefers-reduced-motion`.

---

# 18. LINKS, LABELS & MICROCOPY STYLING

- Standard body links should use the approved primary color or an appropriate high-contrast treatment.
- Hover states should be obvious but restrained.
- Labels should use the same font size/weight across pages.
- Do not arbitrarily capitalize every heading or label.
- Avoid mixing sentence case, title case, and uppercase patterns without a clear hierarchy.

Default heading style: **sentence case** unless the content itself requires another treatment.

---

# 19. FORMS & INPUTS

All forms should share one component system.

Inputs:

- minimum height: 48px
- consistent radius: 10–12px
- consistent border color
- consistent focus state
- consistent label typography
- consistent help/error text sizing

Focus states must be clearly visible and accessible.

Do not redesign form controls differently on each page.

---

# 20. DATA / PROOF / TRUST ELEMENTS

Alphasure pages may contain statistics, certifications, ratings, years in business, team counts, global reach, client proof, testimonials, or similar trust content.

Treat these as **one family of proof components** even when the layout changes.

Examples of approved patterns:

- large number + short descriptor
- metric grid
- badge/certification row
- testimonial card
- customer logo strip
- rating/proof card

The layout may change, but typography, spacing, icons, borders, colors, and responsive behavior must remain system-consistent.

---

# 21. PINTEREST REFERENCE HANDLING RULE

This is critical.

When a Pinterest/reference image is supplied for a section:

### Extract from the reference

- section structure
- information hierarchy
- image placement
- number of columns
- approximate visual rhythm
- interaction concept
- editorial/compositional idea

### Do NOT blindly copy

- font family
- font sizes
- arbitrary margins
- arbitrary padding
- colors
- border radii
- button shapes
- shadows
- icon style
- container width
- breakpoint behavior
- unrelated decorative effects

### Required behavior

Rebuild the reference **using Alphasure's existing global design system**.

The result should feel like:

> "This section was inspired by that reference, but it clearly belongs to the Alphasure website."

not:

> "This section was pasted from a different website."

---

# 22. EXISTING WEBSITE NORMALIZATION TASK

When these rules are first applied to the current website, perform a full consistency pass.

Audit every page for:

### Typography
- font family
- heading sizes
- body sizes
- font weights
- line heights
- letter spacing
- text widths

### Spacing
- section top/bottom padding
- heading-to-description gap
- description-to-CTA gap
- card gaps
- column gaps
- internal padding
- page gutters

### Layout
- container widths
- grid alignment
- column proportions
- vertical alignment
- image sizes
- section heights
- card heights

### Components
- buttons
- navigation
- footer
- cards
- badges
- forms
- testimonials
- metrics
- icons
- links

### Visual language
- colors
- borders
- radii
- shadows
- imagery
- iconography
- animation

### Responsive behavior
- tablet
- mobile
- overflow
- stacking
- button widths
- image cropping
- headline wrapping

Fix systemic inconsistencies globally rather than patching each page separately.

---

# 23. REFACTORING RULES

When you discover multiple versions of the same component:

1. Identify the common pattern.
2. Create or use one reusable component.
3. Move repeated styles into global tokens.
4. Replace one-off styles with tokens.
5. Preserve necessary content/layout differences through component props or variants.

Do not create separate components solely because two sections came from different Pinterest references.

Example:

**Correct:** `Button variant="primary"` and `Button variant="secondary"`

**Incorrect:** `HeroButtonBlue`, `ServiceButtonRounded`, `AboutButtonLarge`, `ContactButtonPinterest`

---

# 24. ONE-OFF VALUES POLICY

Avoid arbitrary values.

Before introducing a new value such as `37px`, `53px`, `71px`, `92px`, `118px`, etc.:

- check whether an existing design token fits
- use the nearest approved token where visually acceptable
- add a new global token only when the new value solves a recurring design need

A one-off value is acceptable only when it is required by a specific asset, browser behavior, or carefully art-directed composition.

Even then, do not create a second competing system.

---

# 25. COMPONENT VARIATION RULE

Variation should happen through **controlled variants**, not arbitrary styling.

For example:

```text
Card: default | featured | metric | testimonial
Button: primary | secondary | text
Section: standard | tinted | dark | visual
Hero: split | centered | visual-led
```

Each variant must still use the same global:

- type scale
- spacing scale
- radii
- colors
- grid
- responsive rules

---

# 26. ACCESSIBILITY REQUIREMENTS

Consistency must not reduce accessibility.

Always maintain:

- sufficient text/background contrast
- visible keyboard focus
- semantic heading order
- usable button/link targets
- meaningful image alt text when images communicate information
- proper form labels
- no color-only communication
- reduced-motion support
- readable mobile text

Do not reduce font size or contrast simply to imitate a reference screenshot.

---

# 27. PERFORMANCE & IMAGE RULES

- Use appropriately sized images.
- Prefer modern image formats when the existing stack supports them.
- Lazy-load below-the-fold media where appropriate.
- Avoid massive uncompressed hero images.
- Avoid decorative assets that provide no information or brand value.
- Do not add animation that materially harms page performance.

Visual consistency includes consistent performance behavior.

---

# 28. PAGE-LEVEL CONSISTENCY CHECK

Before considering any page complete, compare it against at least one other Alphasure page and verify:

1. Is the same font being used?
2. Are H1/H2/H3 sizes consistent?
3. Are body and button sizes consistent?
4. Do section headings align to the same container system?
5. Are vertical section gaps using the approved rhythm?
6. Are cards using the approved radius/padding/border system?
7. Are images using approved aspect ratios and treatments?
8. Are buttons visibly part of the same family?
9. Are icons from the same visual family?
10. Does mobile feel like the same website?
11. Does the header match the rest of the site?
12. Does the footer match the rest of the site?
13. Has any Pinterest-specific styling accidentally leaked into the global system?
14. Has any one-off CSS been introduced unnecessarily?

---

# 29. VISUAL QA REQUIREMENT

Do not stop after code compiles.

Use the browser/preview to inspect representative pages and verify the rendered result.

Inspect at minimum:

- desktop width around 1440px
- desktop/laptop width around 1280px
- tablet width around 768px
- mobile width around 390px

Check for:

- inconsistent heading wraps
- uneven vertical rhythm
- mismatched button dimensions
- incorrect image cropping
- broken grids
- excessive whitespace
- cramped sections
- inconsistent card heights
- unexpected horizontal scrolling
- mobile overflow
- misaligned content
- inconsistent radii/borders/shadows

If the page looks inconsistent, correct the underlying shared component/token rather than applying a page-specific cosmetic patch whenever possible.

---

# 30. DEFINITION OF DONE

The Alphasure website is considered globally consistent when:

- all pages use the same core type system
- all pages use the same spacing scale
- all pages use the same layout/container logic
- buttons are consistent everywhere
- cards are consistent everywhere
- image treatment is consistent
- navigation/footer are consistent
- responsive behavior is predictable
- Pinterest sections still retain their useful compositional inspiration
- no page feels like a separate template or separate brand
- new pages can be assembled from the same design tokens and reusable components without inventing new styling rules

The desired outcome is **visual coherence with compositional variety**.

Do not make every page identical. Make every page unmistakably part of the same Alphasure system.

---

# 31. IMPLEMENTATION DIRECTIVE

When given a new page, section, or Pinterest reference, follow this sequence:

```text
1. Understand the requested content and intended user action.
2. Identify the closest existing Alphasure component/pattern.
3. Reuse existing global tokens.
4. Recreate the reference's useful composition using Alphasure rules.
5. Avoid introducing new visual primitives unless necessary.
6. Make desktop, tablet, and mobile responsive from the start.
7. Review the page alongside existing Alphasure pages.
8. Fix systemic inconsistencies at the shared-component/token level.
9. Verify the rendered result in the browser.
10. Finish only when the section belongs visually to the same website.
```

**Do not optimize for pixel-level imitation of Pinterest references. Optimize for a consistent Alphasure design system that can absorb different reference ideas without becoming visually fragmented.**
