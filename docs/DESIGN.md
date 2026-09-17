---
name: Architectural Editorial
colors:
  surface: '#fdf9f3'
  surface-dim: '#ddd9d4'
  surface-bright: '#fdf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ee'
  surface-container: '#f1ede8'
  surface-container-high: '#ece7e2'
  surface-container-highest: '#e6e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#444748'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0eb'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#6d5b49'
  on-secondary: '#ffffff'
  secondary-container: '#f7dec6'
  on-secondary-container: '#73614e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#201b13'
  on-tertiary-container: '#8c8278'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#f7dec6'
  secondary-fixed-dim: '#dac2ac'
  on-secondary-fixed: '#26190b'
  on-secondary-fixed-variant: '#544432'
  tertiary-fixed: '#ede0d4'
  tertiary-fixed-dim: '#d0c5b9'
  on-tertiary-fixed: '#201b13'
  on-tertiary-fixed-variant: '#4d453d'
  background: '#fdf9f3'
  on-background: '#1c1c19'
  surface-variant: '#e6e2dd'
typography:
  display:
    fontFamily: Geist
    fontSize: 4.5rem
    fontWeight: '600'
    lineHeight: '1.05'
    letterSpacing: -0.035em
  display-mobile:
    fontFamily: Geist
    fontSize: 2.75rem
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: '1.15'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 1.375rem
    fontWeight: '500'
    lineHeight: '1.35'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-index:
    fontFamily: Geist
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.12em
  label-caps:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.08em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.5rem
  space-lg: 3rem
  space-xl: 6rem
---

## Brand & Style

The design system embodies an editorial, gallery-grade aesthetic tailored for a high-caliber full-stack engineer and tech founder. It rejects common software engineering clichés—such as synthetic terminals, matrix motifs, and high-saturation neon accents—in favor of Swiss typographic discipline, structural restraint, and intentional materiality. 

The atmosphere feels physical, literary, and architectonic: generous negative space, deliberate section indexing (e.g., `01 / ARCHITECTURE`, `02 / SELECTED WORKS`), sharp architectural dividers, and an unhurried visual cadence. The user experience conveys authority, quiet technical competence, and refined product stewardship.

## Colors

The palette operates on a base of warm studio paper and stark gallery ink, anchored by subtle architectural stone undertones:

- **Primary (`#171717`)**: Dense carbon black, used for dominant typography, structural framework borders, primary interactive states, and the contrasting baseline footer.
- **Secondary (`#A48F7A`)**: Grounded artisanal taupe, serving as a quiet focal accent for indices, active states, and focal tags.
- **Tertiary (`#D8CCC0`)**: Light stone clay, utilized for soft tag backdrops, subtle indicator badges, and hairline highlights.
- **Neutral (`#686662`)**: Muted graphite, designated for metadata, body copy sub-layers, and contextual secondary descriptions.
- **Canvas & Surface System**:
  - Pure White Canvas: `#FFFFFF` (base layer)
  - Warm Gallery Floor: `#F6F4F1` (secondary section backdrops, subtle contrast bands)
  - Plinth Surface: `#F1F1EF` (cards, structured interactive blocks, inset modules)
  - Hairline Border: `#E6E2DD` (structural dividers, table lines, container bounds)
  - High-Contrast Footer Floor: `#171717` with `#FFFFFF` and `#A48F7A` typography

## Typography

The typographic system relies on a single typeface family—`Geist`—to deliver uncompromised precision, geometric clarity, and high-information density without visual clutter. 

- **Display & Headlines**: Tightly tracked, confident, and editorial. Line heights remain compact to produce sculptural blocks of text that lead the page.
- **Section Indexing & Micro-Labels (`label-index`, `label-caps`)**: Always rendered in uppercase with deliberate letter tracking (+0.08em to +0.12em) and prefixed with numerical indices (e.g., `[ 01 ]`, `INDEX /`).
- **Body & Editorial Prose**: Calibrated for extended reading on technical case studies and architectural overviews, set against high-contrast and secondary-neutral tones.

## Layout & Spacing

The layout is built upon an asymmetrical 12-column architectural grid with structural dividing lines. Negative space is treated as an active framing device rather than passive voids.

- **Desktop (1024px and up)**: 12-column grid with a fluid outer margin of `4rem` and gutters of `2.5rem`. Max container bound caps at `1440px` for balanced wide-screen viewing.
- **Tablet (768px - 1023px)**: 8-column grid with `2rem` margins and `1.5rem` gutters.
- **Mobile (below 768px)**: 4-column layout with `1.25rem` margins and `1rem` gutters. Stacks editorial two-column layouts vertically while maintaining explicit hairline separators between section metadata and primary narratives.
- **Rhythm**: Section transitions utilize expansive vertical spacing (`space-xl`), ensuring projects and technical paradigms read with museum-like pacing.

## Elevation & Depth

This design system avoids blurred drop shadows and multi-tiered floating z-indices. Visual elevation is attained exclusively through planar layering, color tonal shifts, and low-contrast hairline borders:

- **Flat Tonal Grounding**: Depth is created by contrasting pure white (`#FFFFFF`) alongside architectural surfaces (`#F1F1EF` and `#F6F4F1`). Inset blocks and project showcases nest into the canvas rather than floating above it.
- **Hairline Framing**: Structural separation is defined by single-pixel solid borders (`#E6E2DD`). Dividers mark the start and finish of each section, evoking print layout sheets.
- **Inversion as Hierarchy**: The highest level of visual grounding is reserved for the document footer, which utilizes a complete color inversion (`#171717` background with `#FFFFFF` text), acting as a physical ballast to the light canvas above.

## Shapes

The shape grammar is intentionally razor-sharp (`0` radius). This choice reinforces Swiss architectural precision, drafting table discipline, and uncompromising craft.

- All containers, cards, tags, input surfaces, and buttons have zero corner radius.
- Interactive outlines, badges, and project preview blocks lock seamlessly to the underlying hairline grid without soft rounding, creating contiguous planar geometry across the entire interface.

## Components

### Buttons
- **Primary**: Solid carbon black (`#171717`) background, pure white (`#FFFFFF`) label, sharp corners (`0px`). Hover shifts smoothly to `#A48F7A` with zero scale deformation. Padding: `0.875rem 1.75rem`.
- **Secondary / Outline**: 1px solid border (`#171717`), transparent background, `#171717` text. Hover inverts to full `#171717` background with `#FFFFFF` text.
- **Ghost / Text Action**: Uppercase tracked label (`label-caps`) accompanied by an inline right-facing arrow (`→`). Underlined with a 1px border that expands from 0 to 100% width on hover.

### Badges & Technical Chips
- Sharp rectangular tags set in `#F1F1EF` surface with a 1px `#E6E2DD` boundary.
- Typography: `label-index` uppercase tracking, text color `#686662`.
- Key status or founder markers use a subtle `#D8CCC0` tint with `#171717` text.

### Section Dividers & Index Headers
- Horizontal full-bleed rule of 1px `#E6E2DD`.
- Section marker placed directly above or bisecting the divider: small caps label (e.g., `01 / SELECTED WORK`), set in `#A48F7A`.

### Project & Case Study Cards
- Sharp rectangular enclosures built with a `#F6F4F1` or `#F1F1EF` background and enclosed with a 1px `#E6E2DD` border.
- Cards maintain generous inner padding (`space-md` to `space-lg`).
- Typography within cards follows an editorial column format: project index and year in `#A48F7A` at the top, bold concise title (`headline-md`) in `#171717`, architectural tech stack tags aligned along the bottom border.

### Data & Technical Lists
- Clean horizontal ledgers separated by 1px solid `#E6E2DD` borders.
- Three-part row configuration: Year/Index on the left (neutral taupe), Project/Role in the center (dark text), and Technology/Outcome on the right (secondary text), aligned cleanly to grid columns.
- Row hover triggers a subtle background color transition to `#F6F4F1`.

### Form Fields & Inputs
- Minimalist architectural underlines or flat `#F1F1EF` boxes with sharp 1px borders in `#E6E2DD`.
- Active focus state changes border color immediately to `#171717` with no glow or diffuse outline.
- Labels sit above the field in `label-caps` typography using `#686662`.