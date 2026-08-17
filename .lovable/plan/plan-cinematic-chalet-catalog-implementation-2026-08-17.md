# Plan - Cinematic Chalet Catalog Implementation

Implement a new "Catálogo de Chalés" section for Chalés IA featuring a high-end, cinematographic slideshow/carousel instead of a traditional grid.

## Proposed Changes

### 1. Architectural Catalog Data Structure
- Create a reusable data structure for chalets in `src/components/landing.tsx` (or a separate file if it gets too large).
- Each project will include: `id`, `name`, `category`, `mainImage`, `gallery`, `sqm`, `bedrooms`, `bathrooms`, `features`, `description`, and `floorPlan`.

### 2. Cinematic Carousel Component
- Build a custom carousel using `framer-motion` for fluid, high-performance animations.
- **Desktop Layout**: Center-focused with partial previews of previous/next slides (smaller scale, lower opacity, subtle blur).
- **Animations**: Elegant `translateX`, `scale`, and `opacity` transitions with depth effects.
- **Interactions**: 
  - Mouse dragging (desktop) and touch swipe (mobile).
  - Minimalist navigation arrows with hover micro-interactions.
  - Suble parallax effect on images based on mouse position.
- **Autoplay**: Smooth auto-advancing with progress bar indicator; pauses on interaction.

### 3. Project Information & Filtering
- Add category filters above the carousel: **Todos**, **A-Frame**, **Contemporâneos**, **Rústicos**, **Premium**.
- Project details (name, specs, description) will update with a staggered entrance animation synchronized with slide changes.
- Slide counter (e.g., `01 / 06`) with a progress line.

### 4. Detailed Project View (Modal)
- Implement a sophisticated full-screen (or near full-screen) modal triggered by clicking a project.
- **Content**: Large hero image, detailed specs, full description, expanded floor plan, and a secondary image gallery.
- **CTA**: Integration with the existing WhatsApp budget wizard, passing the selected project name for personalization.

### 5. Final Section CTA
- A transition to a bottom section for custom projects: "NÃO ENCONTROU O MODELO IDEAL? ... CRIAR MEU CHALÉ".

### 6. Styling & Polish
- Ensure absolute consistency with the existing premium, minimalist, and architectural identity.
- Optimize for mobile (swipe primary navigation) and desktop (parallax/drag).
- Performance: Lazy loading for carousel images and hardware-accelerated animations.

## Technical Details

- **Framework**: TanStack Start (React 19).
- **Animation**: `framer-motion` for layout transitions and gestures.
- **Icons**: `lucide-react`.
- **Styling**: Tailwind CSS v4 with existing oklch color tokens.
- **Data Management**: Static array of project objects with clear typing for extensibility.
