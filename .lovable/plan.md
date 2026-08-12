# Visual Transformation & Storytelling Overhaul - Chalés IA

Repurpose the project from a booking/hospitality site to a **premium architecture and construction** experience. The focus is on scroll-driven storytelling, cinematic animations, and a high-end editorial aesthetic.

## 1. Visual Identity & Design System
- **Colors:** Deep forest green (#1C322F), off-white, sand, charcoal.
- **Typography:** Bolder serif (Cormorant Garamond) for headers; clean sans (Inter) for UI.
- **Atmosphere:** Luxury mountain architecture, wood, stone, glass, natural light.

## 2. Core Experience Enhancements
- **Smooth Navigation:** Implement a global scroll progress indicator and a custom interactive cursor for desktop.
- **Cinematic Hero:** 100vh entrance with sequential reveal (Image scale -> Logo -> Headline -> CTA).
- **Scroll-Driven Storytelling:** 
  - Hero transition: As the user scrolls, the Hero image scales and fades to reveal the next section.
  - Interactive Process: "Do terreno ao chalé" vertical/horizontal timeline synchronized with scroll.
  - Parallax Images: All major photography will use spring-animated parallax and slow zoom effects.

## 3. Component Re-engineering
- **Projects Gallery:** Replace standard grids with large-scale editorial layouts.
- **Process Section:** Rebuild as a continuous narrative (Ideia -> Projeto -> Planejamento -> Construção -> Entrega).
- **Architecture Details:** Add a "Materiality" section with hotspots/reveals for wood, stone, glass.
- **Social Proof:** Sophisticated testimonial slider with editorial layout.
- **Footer:** Minimalist, high-contrast, premium finish.

## 4. Technical Implementation
- **Performance:** Focus on `transform` and `opacity` animations via Framer Motion.
- **Mobile optimization:** Simplified animations for performance while maintaining the premium feel.
- **Preservation:** Maintain existing routes (`/chale/$id`) and functional WhatsApp inquiry logic.

## Technical Details
- Using `framer-motion` for all complex transitions (`useScroll`, `useTransform`, `useSpring`).
- Custom Tailwind utilities for refined typography and shadows.
- Dynamic route `src/routes/chale.$chaleId.tsx` will be updated with the same cinematic visual treatment.
