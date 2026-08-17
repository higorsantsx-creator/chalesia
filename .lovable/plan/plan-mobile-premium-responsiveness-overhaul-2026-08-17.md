# Plan: Mobile Premium Responsiveness Overhaul

Complete audit and optimization of the **Chalés IA** website for a high-end mobile experience, ensuring cinematic quality across all devices (320px to 4K).

## 1. Global Refinements (styles.css)
- Implement `clamp()` for responsive fluid typography (headers and body).
- Define responsive spacing variables (`--section-padding`).
- Global overflow safety with `overflow-x: hidden` on root.
- Add utility for `touch-action: pan-y` on carousels.

## 2. Navigation & Header
- **Redesign Navbar**: Implement a high-end mobile menu with a modern hamburger icon and a slide-in cinematic overlay.
- Ensure the logo remains legible and centered/well-aligned on small screens.
- Optimize the "Solicitar Orçamento" button for mobile (compact yet accessible).

## 3. Hero Section
- **Typography**: Adjust `h1` size using `clamp(2.5rem, 10vw, 11rem)` to prevent overflow.
- **Background**: Adjust `background-position` and `object-fit` for the hero image to ensure the chalet remains the focal point in portrait mode.
- **Layout**: Stack CTAs vertically on mobile if necessary, ensuring comfortable tap targets.
- **Contrast**: Enhance text shadows/overlays for legibility on vertical displays.

## 4. Project Catalog (Slideshow)
- **Carousel**: Enable native-feeling touch gestures (swipe) using `framer-motion` drag.
- **Slide Layout**: Adapt the center-focused layout to smaller viewports without aggressive cropping.
- **Modal**: Redesign the detailed project modal for a single-column scrollable experience on mobile.

## 5. Projects & Philosophy Sections
- **Grid to Stack**: Transition from multi-column grids to elegant vertical stacks on mobile.
- **Images**: Enforce consistent `aspect-ratio` and `object-position: center` for architectural shots.
- **Spacing**: Proportional reduction of margins and paddings to maintain the "premium" breathable feel without excessive whitespace.

## 6. Budget Configurator (BookingForm)
- **Multi-step Layout**: Redesign steps for one-handed operation.
- **Touch Targets**: Larger selection areas for project types and architectural styles.
- **Validation**: Ensure errors and success messages are centered and prominent.
- **WhatsApp**: Verify the final message generation works perfectly across all device types.

## 7. Interactive Elements & Animations
- **Hover to Touch**: Implement tap-to-reveal for elements that currently rely on hover (e.g., "Alma da Arquitetura Premium").
- **Performance**: Optimize `framer-motion` transitions to ensure 60fps on mid-range mobile devices.

## 8. Final Audit & Validation
- Automated tests for horizontal overflow on 320px, 375px, 430px.
- Manual verification of image composition in both orientations.
- Verification of the "hidden" admin routes and custom link redirections.

---

### Technical Details
- **Breakpoints**: 320px (SE), 375px (iPhone), 430px (Pro Max), 768px (iPad), 1024px+ (Desktop).
- **CSS Units**: Prefer `rem`, `vw`, `vh`, `clamp()`, `minmax()`.
- **Frameworks**: React, Framer Motion, Tailwind CSS v4.
