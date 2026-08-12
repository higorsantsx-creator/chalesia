# Plan: Transform Chalés IA into a Construction & Architecture Brand

The goal is to completely pivot the website from a "lodging/hosting" concept to a "premium chalet construction and architecture" brand. The visual identity will be refined to feel editorial, architectural, and high-end, using the provided images as reference for the architectural style.

## Proposed Changes

### 1. Visual Identity & Theme
- Update `src/styles.css` to refine the premium color palette (off-white, sand, wood, charcoal, deep green) and typography weights for a more editorial feel.
- Ensure the contrast and cinematic feel match the "luxury contemporary" direction.

### 2. Components Overhaul (`src/components/landing.tsx`)
- **Hero**: Update copy to focus on construction ("Seu refúgio começa no projeto"). Replace "lodging" CTAs with "Solicitar Orçamento" and "Ver Projetos".
- **Philosophy Section**: Replace "Experience" with an editorial philosophy section about building unique lifestyles, not just houses.
- **Projects Showcase**: Replace "Accommodations" with a sophisticated projects gallery using the new uploaded assets. Focus on architectural concepts (Contemporary, Alpine, Nordic, etc.).
- **Process Section ("Do Sonho à Obra")**: Add a scroll-animated section detailing the 5 steps from conversation to delivery.
- **Construction Details**: Add a section focusing on materials (wood, stone, glass) and architectural precision.
- **Investment Section**: Add an optional section about chalets as investment opportunities.
- **Booking Form -> Quote Form**: Completely redesign the form to gather construction-specific data (Land status, number of chalets, deadline, etc.) and keep the WhatsApp integration.
- **Social Proof**: Pivot testimonials to focus on project execution and quality rather than "guest stays".

### 3. Dynamic Routes
- **Project Detail Page (`src/routes/chale.$chaleId.tsx`)**: Update this route to feel like an architectural project presentation (technical specs, materials, concept).

### 4. Animations
- Implement smooth scroll-based reveals, parallax, and refined transitions using `framer-motion` to create a "cinematic" and "editorial" feel.

### 5. SEO & Metadata
- Update `src/routes/index.tsx` and `src/routes/__root.tsx` with construction-focused keywords and descriptions.

## Technical Details
- Use `framer-motion` for advanced scroll animations and reveals.
- Use `lucide-react` for refined iconography.
- Implement the form with `react-hook-form` and `zod` for validation.
- Assets: Link the 4 newly registered uploaded images as the core project examples.
- Colors: okLCH based semantic tokens in `src/styles.css`.
