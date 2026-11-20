---
version: alpha
name: Awwwards Editorial Light
description: A restrained, high-contrast editorial system built around oversized typography, soft neutrals, and crisp monochrome UI chrome.
colors:
  primary: "#222222"
  secondary: "#f8f8f8"
  tertiary: "#e5e7eb"
  neutral: "#ffffff"
  surface: "#f8f8f8"
  on-surface: "#222222"
  accent: "#fff083"
  error: "#b42318"
  primary-60: "#5c5c5c"
  primary-20: "#d1d1d1"
typography:
  headline-display:
    fontFamily: "Inter Tight"
    fontSize: "170px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "Inter Tight"
    fontSize: "93px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Inter Tight"
    fontSize: "50px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "Inter Tight"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.21
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Inter Tight"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "0px"
  body-md:
    fontFamily: "Inter Tight"
    fontSize: "15px"
    fontWeight: 300
    lineHeight: 1.87
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Inter Tight"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Inter Tight"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0px"
  label-md:
    fontFamily: "Inter Tight"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Inter Tight"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 6px
  sm: 20px
  md: 28px
  lg: 36px
  xl: 60px
  gutter: 20px
  margin: 28px
components:
  button-primary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "14px 20px"
    height: "42px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "14px 20px"
    height: "42px"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "14px 20px"
    height: "42px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 10px"
---

# Awwwards Editorial Light

## Overview

This system feels editorial, minimal, and highly curated, with a strong focus on oversized typography and generous negative space. It balances a professional, design-forward tone with a playful award-show energy through bold scale shifts and small accent moments. The layout reads spacious rather than dense, with the interface itself staying quiet so imagery and headlines can dominate.

## Colors

- **Primary (#222222):** The main ink color for headlines, body copy, icons, borders, and actionable UI. It gives the interface its crisp, authoritative contrast.
- **Secondary (#f8f8f8):** A soft off-white background used for page surfaces and cards. It keeps the overall atmosphere light without feeling sterile.
- **Tertiary (#e5e7eb):** A subtle divider and input tone for low-emphasis outlines, borders, and neutral separators. It supports structure without adding visual weight.
- **Neutral (#ffffff):** Pure white used for reversed text, chips, and high-contrast utility buttons when needed.
- **Surface (#f8f8f8):** The default component surface color, matching the airy light backdrop and preserving the editorial calm.
- **On-surface (#222222):** The default readable foreground for content placed on light backgrounds.
- **Accent (#fff083):** A bright, optimistic yellow reserved for highlights, badges, and attention cues. It should be used sparingly so it stays special.
- **Error (#b42318):** A clear alert tone for validation and destructive states, though it should remain visually secondary to the core monochrome palette.
- **Primary-60 (#5c5c5c):** A muted text or border variant for de-emphasized labels and secondary metadata.
- **Primary-20 (#d1d1d1):** A soft neutral gray for quiet outlines, inactive states, and low-contrast separators.

## Typography

Inter Tight is the sole voice of the system, giving the brand a condensed, contemporary, editorial personality. Headings are large and unadorned, with the display tier set extremely large for hero moments and lighter weights used for mid-level headings to preserve elegance. Body text stays compact but readable at 15px with a long line-height, which helps the page feel calm even when content density increases.

Labels and navigation use the same family at smaller sizes and slightly stronger weights, keeping the UI coherent without introducing a second typeface. Uppercase treatment is not a defining pattern here; instead, emphasis comes from scale, weight, and spacing rather than lettercase gymnastics. Letter-spacing remains neutral at 0px, reinforcing the clean, modern editorial tone.

## Layout

The composition uses a wide, centered, fixed-max-width feel with large horizontal breathing room and strong vertical separation between header, hero, and featured content. Spacing follows a simple rhythm: tight utility gaps for nav and metadata, then much larger blocks for major sections and feature panels. The resulting structure feels premium and spacious, with content arranged to keep the eye moving from small utility controls into massive headline moments.

Cards and content panels should use consistent internal padding in the 16px to 20px range, with broader section spacing stepping up through 28px, 36px, and 60px. Inputs and buttons should keep compact but comfortable hit areas, and long horizontal elements like search bars should stretch to absorb available width while preserving generous margins at the edges.

## Elevation & Depth

Depth is intentionally minimal. The system relies on contrast, borders, and tonal separation rather than shadow-heavy layering, which keeps the interface feeling flat, modern, and gallery-like. When elevation is needed, it should come from background reversal, subtle outlines, or placement inside a distinct panel rather than from dramatic blur shadows.

Because the visual language is mostly planar, hierarchy is created by size, weight, and color contrast. The hero headline stands out through scale alone, while buttons and cards are separated with borders and slight tonal changes instead of pronounced z-depth.

## Shapes

The shape language is restrained and slightly softened, using 8px radii as the default for buttons, cards, and interactive containers. This creates a polished but not overly playful feel, balancing the sharpness of the typography with just enough softness to feel approachable. Full pills can be used for chips and badges, while major containers should stay rectilinear and disciplined.

## Components

Buttons are compact, rectangular, and border-led. Use `button-primary` for light-background actions that need a white fill with dark text, and `button-secondary` for dark-filled emphasis actions with reversed text. `button-tertiary` should stay text-only and visually quiet for low-priority navigation or utility actions. Keep button height around 42px with 14px/20px padding, and avoid oversized button chrome; the system prefers restraint over bulk.

Cards should use `card` styling: a light surface, subtle border, 8px radius, and modest 16px padding. They should feel like framed content rather than floating containers, with no heavy shadow treatment. For content-heavy modules, let typography and spacing do the work instead of adding decorative surfaces.

Inputs should feel integrated with the overall system, using the same light gray field treatment as the search bar. They should be wide, low-friction, and minimally decorated, with rounded corners and subtle borders or tonal fills. Placeholder text should remain understated, and focus states should prioritize clarity over flair.

Chips and small pills should use the `chip` pattern: compact, fully rounded, and typographically small. They work best for status markers, tags, or language toggles, where the goal is to create small navigational anchors without competing with the headline hierarchy.

Navigation links and utility labels should use the body and label tokens rather than custom styling, maintaining the system’s editorial consistency. If an element is secondary, keep it visually light; if it is primary, let it invert cleanly against the background.

## Do's and Don'ts

- Do use oversized headlines and generous whitespace to make the layout feel editorial and curated.
- Do keep color usage mostly monochrome, reserving `accent` for small moments of emphasis.
- Do favor borders and tonal fills over shadow depth.
- Do keep buttons and cards softly rounded at 8px by default.
- Don't introduce bright, saturated UI colors that compete with the content.
- Don't add heavy drop shadows or glassmorphism effects.
- Don't over-round major containers; the system should stay crisp and composed.
- Don't make labels or navigation heavier than necessary; hierarchy should come from scale, not clutter.
