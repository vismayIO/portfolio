# Figma Design System Rules

Rules for implementing Figma designs in this portfolio project using the Figma MCP server.

## Tech Stack

- Next.js 16 (App Router) with React 19 and React Compiler
- TypeScript 5, Biome for linting/formatting
- Tailwind CSS v4 (CSS-based config via `@theme inline` in `globals.css`)
- shadcn/ui components with CVA (class-variance-authority), Radix UI primitives
- Utility: `cn()` from `@/lib/utils` (clsx + tailwind-merge)
- Font: Fira Code (monospace) for all text (`--font-sans`, `--font-serif`, `--font-mono`)
- Path alias: `@/*` maps to `./src/*`
- Package manager: Bun

## Figma MCP Integration Flow

IMPORTANT: Follow these steps in order for every Figma-driven implementation.

1. Call `get_design_context` with the exact nodeId and fileKey to fetch the structured representation
2. If the response is too large or truncated, call `get_metadata` first to get the node map, then re-fetch only required nodes
3. Call `get_screenshot` for a visual reference of the node/variant being implemented
4. Download any image/SVG assets from the Figma MCP server
5. Translate the output into this project's conventions (shadcn/ui components, design tokens, Tailwind v4)
6. Validate the final UI against the Figma screenshot for 1:1 visual parity

## Component Organization

- shadcn/ui primitives: `src/components/ui/` (added via `bunx shadcn add`)
- Layout components (header, footer, section wrappers): `src/components/layout/`
- Feature/section components (hero, about, projects, contact): `src/components/sections/`
- Page-level components stay in `src/app/` as Next.js pages
- One component per file, PascalCase filename matching export (e.g., `ProjectCard.tsx`)
- IMPORTANT: Reuse existing shadcn/ui components from `src/components/ui/` before creating new ones
- All custom components must accept a `className` prop for composition via `cn()`

## Design Tokens & Styling

- IMPORTANT: Never hardcode colors — use the semantic token system defined in `src/app/globals.css`
- Colors use oklch format with CSS variables: `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--card`, `--popover`, etc.
- Each color has a `-foreground` counterpart for text on that background
- Tailwind usage: `bg-primary`, `text-primary-foreground`, `border-border`, etc.
- Dark mode: class-based (`.dark` class on a parent element), configured via `@custom-variant dark (&:is(.dark *))`
- Border radius: `--radius: 0rem` (sharp corners by default — this is intentional for the design style)
- Shadows: all set to zero (flat, no-shadow aesthetic)
- Letter spacing: `--tracking-normal: -0.02em` (tighter than default)
- Spacing base: `--spacing: 0.25rem` (4px)

## Asset Handling

- IMPORTANT: If the Figma MCP server returns a localhost source for an image or SVG, use that source directly to download the asset
- IMPORTANT: DO NOT add new icon packages — use `lucide-react` (already installed) for icons, or download assets from Figma
- IMPORTANT: DO NOT use or create placeholder images if a localhost source is provided
- Store downloaded assets in `public/assets/`
- Use `next/image` (`Image` component) for all raster images with proper `width`, `height`, and `alt`
- Inline small SVGs as React components when they need dynamic styling

## Import Conventions

- Use path alias `@/` for all internal imports (e.g., `import { Button } from "@/components/ui/button"`)
- Use `cn()` from `@/lib/utils` for conditional/merged class names

## Code Patterns

- Use server components by default; only add `"use client"` when interactivity is required
- Prefer semantic HTML (`<section>`, `<nav>`, `<article>`, `<header>`, `<footer>`)
- All interactive elements must have accessible labels
- All images must have meaningful `alt` text
- Use `next/link` for internal navigation

## Figma-to-Code Translation

- Map Figma auto-layout to Tailwind flex/grid utilities (`flex`, `flex-col`, `gap-*`, `items-*`, `justify-*`)
- Map Figma colors to the project's semantic tokens (`bg-primary`, `text-muted-foreground`, etc.), not raw hex/oklch values
- Map Figma components to existing shadcn/ui components (Button, Card, Badge, etc.) when possible
- Map Figma font weights/sizes to Tailwind typography utilities (`text-*`, `font-*`, `leading-*`, `tracking-*`)
- Respect the zero-radius, zero-shadow design language — do not add rounded corners or shadows unless explicitly present in the Figma design
