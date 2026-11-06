---
name: Cinematic Dark Academic & Engineering
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c6c6cb'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#909095'
  outline-variant: '#46474b'
  surface-tint: '#c5c6cd'
  primary: '#c5c6cd'
  on-primary: '#2e3036'
  primary-container: '#07090e'
  on-primary-container: '#77797f'
  inverse-primary: '#5c5e65'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#89ceff'
  on-tertiary: '#00344d'
  tertiary-container: '#000a13'
  on-tertiary-container: '#0081b7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2ea'
  primary-fixed-dim: '#c5c6cd'
  on-primary-fixed: '#191c21'
  on-primary-fixed-variant: '#45474d'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-badge:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.14em
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies a cinematic, technical, and distraction-free dark academic environment tailored for rigorous engineering minds. It balances cold architectural precision with high-legibility student-first ergonomics. The mood is calm, studious, and pristine—recalling both the focus of a midnight research laboratory and the functional clarity of a laminated technical reference card.

Visual motifs prioritize precision: razor-sharp hairline borders, subtle crystalline frosted-glass overlays, monospaced or tracked architectural labeling, and an obsidian backdrop illuminated by focused, singular pulses of electric cyan. Skeuomorphic clutter, gratuitous gradients, and heavy drop shadows are strictly avoided in favor of pure optical hierarchy and deliberate whitespace.

## Colors

The palette operates on high-contrast nocturnal clarity:

- **Surface Base (`#07090E`)**: Deep midnight slate black that minimizes eye strain during extended night study sessions.
- **Surface Elevation 1 (`#0D1117`)**: Layered card base, slightly lifted from the abyss.
- **Surface Elevation 2 (`#161E2E`)**: Floating dropdowns, popovers, and interactive modules.
- **Accent Primary (`#38BDF8`)**: High-luminance electric sky/cyan for active states, key data markers, and critical actions.
- **Accent Secondary (`#0EA5E9`)**: Deepened cyan for focus rings, hover transitions, and active telemetry.
- **Typography - High Contrast (`#F8FAFC`)**: Pure off-white, reserved for primary headlines, formulas, and readouts.
- **Typography - Muted / Secondary (`#94A3B8`)**: Architectural slate gray for descriptions, metadata, and grid lines.
- **Typography - Tertiary (`#64748B`)**: Low-emphasis annotations and disabled states.
- **Hairline Border (`rgba(255, 255, 255, 0.08)`)**: Crisp, 1px structural outlines defining boundaries without visual weight.
- **Accent Glow (`rgba(56, 189, 248, 0.15)`)**: Subdued backlights for focused or selected components.

## Typography

The typographic hierarchy establishes clear structural ordering through two typefaces:

- **Headlines & Structural Anchors (`Space Grotesk`)**: Provides an engineered, geometric cadence. Used for numeric data points, titles, and sectional headers.
- **Body & Long-form Content (`Hanken Grotesk`)**: Clean, low-distortion neo-grotesque ensuring effortless reading during extended review of course materials, laboratory sheets, and syllabus indexes.
- **Badges & Classifications**: Rendered in tracked, all-caps `label-badge` with generous tracking (`0.14em`) to mirror circuit board labels and architectural technical drawings.

## Layout & Spacing

The layout adopts an architectural grid system based on an 8pt modular interval:

- **Grid Model**: 12-column dynamic grid on desktop (max width `1360px`), collapsing to 6 columns on tablet, and 4 columns on mobile devices.
- **Section Rhythm**: Sections are separated by distinct vertical intervals (`space-xl` to double `space-xl`) with fine 1px hairline dividing rails (`rgba(255, 255, 255, 0.06)`).
- **Cheat-Sheet Density**: Card interiors balance high density with functional clarity. Spacing within data modules uses strict `space-sm` and `space-md` spacing to keep critical technical reference data within a single viewport fold.

## Elevation & Depth

Depth is articulated through translucent surface glass and ambient backlights rather than heavy structural drop-shadows:

- **Surface 0 (Base)**: Solid background `#07090E`.
- **Surface 1 (Cards & Modules)**: `rgba(13, 17, 23, 0.65)` layered with `backdrop-filter: blur(16px)` and framed by a 1px border of `rgba(255, 255, 255, 0.08)`.
- **Surface 2 (Floating Overlays & Modals)**: `rgba(22, 30, 46, 0.85)` with `backdrop-filter: blur(24px)` and outer ambient edge glow: `0 0 0 1px rgba(255, 255, 255, 0.12), 0 20px 40px -15px rgba(0, 0, 0, 0.7)`.
- **Active / Accent Glow**: Interactive focal items receive an ambient electric cyan flare: `box-shadow: 0 0 25px -4px rgba(56, 189, 248, 0.18)`.

## Shapes

The design uses tight, disciplined corner radii (Level 1: Soft). Rectangles feel machined and exact rather than playful:

- **Base Radius**: `4px` (`0.25rem`) for buttons, badges, chips, and input fields.
- **Container Radius (`rounded-lg`)**: `8px` (`0.5rem`) for cards, modules, callouts, and cheat-sheet panels.
- **Modal / Canvas Radius (`rounded-xl`)**: `12px` (`0.75rem`) for floating overlays and full-screen dialogs.

## Components

### Buttons
- **Primary**: Background `#38BDF8`, text `#07090E` (bold `Space Grotesk`). Hover state shifts to `#0EA5E9` with subtle cyan glow (`0 0 16px rgba(56, 189, 248, 0.35)`). Radius `4px`.
- **Ghost / Outline**: Transparent background, border `1px solid rgba(255, 255, 255, 0.12)`, text `#F8FAFC`. On hover, border tint becomes `rgba(56, 189, 248, 0.5)` with background `rgba(56, 189, 248, 0.05)`.
- **Minimal Text**: Pure `#94A3B8`, tracked, uppercase font, hovering to `#38BDF8`.

### Badges & Tracked Chips
- Background: `rgba(56, 189, 248, 0.06)`, border `1px solid rgba(56, 189, 248, 0.25)`.
- Text: `#38BDF8`, `label-badge` style, all-caps, with letter-spacing `0.14em`.
- Status Indicator: Accompanied by a 6px circular dot with optional subtle pulsing animation for active semesters, live sessions, or running lab tests.

### Cards & Cheat-Sheet Modules
- Backdrop: Frosted glass `rgba(13, 17, 23, 0.65)` with `16px` backdrop blur.
- Hairline Border: `1px solid rgba(255, 255, 255, 0.08)`.
- Header Rail: Bottom-bordered with `1px solid rgba(255, 255, 255, 0.06)` separating card title and metadata from content bodies.
- Corner Indicators: Optional minute 4px technical crosshair marks at component boundaries.

### Input Fields
- Fill: `rgba(7, 9, 14, 0.7)`.
- Border: `1px solid rgba(255, 255, 255, 0.1)`. Radius `4px`.
- Typography: `#F8FAFC` input text, `#64748B` placeholder text.
- Focus: Border shifts to `#38BDF8` with a tight `0 0 0 1px #38BDF8` glow ring.

### Lists & Technical Data Rows
- Row items separated by `1px solid rgba(255, 255, 255, 0.05)`.
- Alternating subtle hover state: `rgba(255, 255, 255, 0.02)`.
- Key-value pairs display titles in `#94A3B8` and terminal values or formulas in `#F8FAFC` monospace.

### Checkboxes & Radios
- Size: `16px x 16px`. Radius `2px` for checkboxes; circular for radios.
- Unchecked: `1px solid rgba(255, 255, 255, 0.2)` on dark base.
- Checked: Fill `#38BDF8` with dark `#07090E` checkmark glyph.

### Formula & Engineering Syntax Snippets
- Inset dark background (`#040508`) with 1px border (`rgba(56, 189, 248, 0.15)`).
- Text rendered in high-contrast cyan and white for maximum legibility of electrical schematics, pinouts, and mathematical proofs.