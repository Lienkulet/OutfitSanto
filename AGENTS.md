<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Project Rules

## 1. Code Architecture & Component Rules

1. Never write entire pages or features in a single file. Split code into reusable components, hooks, services, utilities, and section-based files.
2. Every major section (Hero, Product Grid, Footer, Filters, Cart Drawer, etc.) must be extracted into its own component.
3. Keep `page.tsx` files thin and focused only on composing sections and fetching data.
4. Extract all SVGs and icons into separate reusable components inside `/components/icons`.
5. Never inline large SVG code directly inside pages or components.
6. Repeated UI must always become reusable components.
7. Use feature-based architecture:
   ```
   /features/products
   /features/cart
   /features/checkout
   ```
8. Keep business logic separate from UI rendering.
9. Never fetch data directly inside deeply nested UI components.
10. Use TypeScript strictly. Never use `any`.
11. Components must have a single responsibility and remain modular.
12. Avoid files larger than ~200 lines. Extract logic/components when files become too large.
13. Use Server Components by default. Add `"use client"` only when necessary.
14. Create reusable UI primitives for buttons, modals, cards, inputs, drawers, typography, and containers.
15. Separate animations into dedicated reusable animation components.
16. Avoid duplicated JSX, duplicated styles, and duplicated logic.
17. Use absolute imports with `@/`.
18. Keep folder structure scalable and production-ready.
19. All forms must use reusable form components with validation.
20. Create reusable loading, error, empty, and skeleton state components.
21. Use meaningful naming conventions for files, variables, hooks, and components.
22. Never hardcode layout spacing inconsistently. Follow a consistent spacing system.
23. Use Tailwind cleanly. Avoid massive unreadable `className` strings.
24. Optimize for scalability, maintainability, readability, and performance.
25. The final codebase must look like it was built by a senior engineering team for a luxury fashion ecommerce brand.

---

## 5. Animation Rules

Animations must feel luxurious.

**Use:**
- Fade transitions
- Subtle parallax
- Image zoom on hover
- Smooth page transitions
- Stagger reveals
- Soft easing

**Avoid:**
- Bouncy animations
- Exaggerated motion
- Flashy effects

Motion should feel cinematic and refined.

---

## 7. Navigation Rules

Navigation must feel clean and premium.

**Requirements:**
- Mega menu support
- Smooth dropdowns
- Sticky navbar
- Mobile drawer menu
- Elegant search experience
- Cart slide-over

The navbar should feel sophisticated and minimal.

---

## 11. Performance Standards

The website must be extremely fast.

**Requirements:**
- Lazy loading
- Code splitting
- Optimized animations
- Minimal JS
- Server components by default
- Image optimization
- Font optimization
