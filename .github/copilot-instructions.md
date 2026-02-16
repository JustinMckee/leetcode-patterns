# LeetCode Patterns - AI Agent Instructions

## Project Overview

This is a Next.js 16.1.6 + React 19 application designed as an interactive study guide for frontend interview preparation. The purpose is to provide pattern fluency and verbal control for live-coding rounds, including generic question types, pattern identification tips, pseudocode, and optimized solutions.

## Tech Stack

- **Framework**: Next.js 16.1.6 with App Router (not Pages Router)
- **React**: 19.2.3 (latest with enhanced JSX runtime)
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans & Geist Mono (loaded via `next/font/google`)
- **Package Manager**: pnpm (required - see `pnpm.onlyBuiltDependencies` config)

## Project Structure

```
app/
  ├── layout.tsx              # Root layout with font configuration
  ├── loading.tsx             # Global loading UI (inherited by all routes)
  ├── error.tsx               # Global error boundary (inherited by all routes)
  ├── page.tsx                # Home page
  ├── globals.css             # Tailwind imports + custom theme
  ├── data-structures/
  │   └── [...slug]/          # Catch-all: /data-structures/arrays-strings/two-sum
  ├── patterns/
  │   └── [...slug]/          # Catch-all: /patterns/sliding-window/longest-substring
  └── complexity/
      └── [...slug]/          # Catch-all: /complexity/medium/decode-ways
components/                   # Shared React components
lib/                          # Utility functions, helpers, constants
hooks/                        # Custom React hooks
types/                        # Global TypeScript type definitions
```

## Content Organization

### Problem Categories (3 taxonomies with dynamic routing)

**Data Structures** (`app/data-structures/[category]/[problem]`)

- `arrays-strings` - Array and string manipulation
- `linked-lists` - Singly/doubly linked list problems
- `trees-graphs` - Tree and graph traversals
- `stacks-queues` - LIFO/FIFO data structures
- `heaps` - Min/max heap operations
- `hash-tables-maps` - HashMap/Set problems

**Patterns** (`app/patterns/[category]/[problem]`)

- `dynamic-programming` - DP optimization problems
- `binary-search` - Search in sorted structures
- `sliding-window` - Subarray/substring patterns
- `two-pointers` - Dual pointer techniques
- `backtracking-recursion` - Recursive exploration
- `graph-traversals` - BFS/DFS algorithms
- `bit-manipulation` - Bitwise operations
- `interval-problems` - Range/interval merging

**Complexity** (`app/complexity/[level]/[problem]`)

- `easy` - Fundamental concepts
- `medium` - Multi-step reasoning
- `hard` - Advanced optimization

### Interactive Code Examples

- Expect Monaco editor integration or similar code playground
- Keep state management minimal - avoid complex global state (Context/Redux unnecessary)
- Use local component state for editor content and execution

## Key Conventions

### Styling & Theming

- **Default to Tailwind CSS** for all styling unless explicitly told otherwise
- Use Tailwind v4 with `@theme inline` directive in `globals.css`
- Dark mode via `prefers-color-scheme` media query
- CSS variables: `--background`, `--foreground`, `--font-geist-sans`, `--font-geist-mono`
- Component classes follow pattern: `className='flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black'`
- **CSS Modules (SCSS)**: Only use when user explicitly opts in for complex styling needs

### TypeScript Configuration

- Path alias: `@/*` maps to project root (use `@/app/...` for imports)
- Target: ES2017 with `module: "esnext"` and `moduleResolution: "bundler"`
- Strict mode enabled - all type annotations required
- JSX runtime: `react-jsx` (no need to import React)
- **Type definitions**: Create `types.ts` files alongside components, not inline types
- Global types go in `types/` directory

### Component Patterns

- Use `'use client'` directive when needed for interactivity
- Metadata exported from `layout.tsx` (see existing `Metadata` type import)
- Font variables applied via template literals: `` `${geistSans.variable} ${geistMono.variable}` ``
- Shared components go in `components/` directory
- Custom hooks go in `hooks/` directory
- Utilities and helpers go in `lib/` directory
- Global type definitions go in `types/` directory

### Routing & Error Handling

- Use **dynamic catch-all segments** (`[...slug]`) for all problem routes
- `loading.tsx` and `error.tsx` are defined at root layout level and inherited by all routes
- No need to create per-route loading/error files unless specific UI is needed

## Development Workflows

### Commands

```bash
pnpm dev          # Start dev server (port 3000)
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # ESLint with Next.js config
```

### ESLint Configuration

- Uses flat config (`eslint.config.mjs`) with `defineConfig` from `eslint/config`
- Applies `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Custom global ignores include `.next/**`, `out/**`, `build/**`, `next-env.d.ts`

### Package Management

- **Always use pnpm** - not npm or yarn
- `pnpm.onlyBuiltDependencies` restricts builds to `sharp` and `unrs-resolver`
- Dependencies are locked via `pnpm-lock.yaml` - commit this file

## Content Architecture (Intended)

Based on the README, this app will showcase:

1. **Pattern identification guides** - How to recognize algorithm patterns
2. **Pseudocode templates** - Structured approaches before coding
3. **Brute force solutions** - Initial approaches with complexity analysis
4. **Optimized solutions** - Improved implementations with explanations
5. **Talking points** - Interview communication strategies
6. **Interactive code examples** - Live code editor/playground for testing solutions

Each problem page should include:

- Problem description and constraints
- Pattern recognition tips
- Pseudocode walkthrough
- Brute force implementation + time/space complexity
- Optimized solution + complexity analysis
- Interactive code editor for practice
- Interview talking points and edge cases

## Routing Patterns

Dynamic catch-all segments handle all nested routes using kebab-case URLs:

- `/data-structures/arrays-strings/two-sum` → `app/data-structures/[...slug]/page.tsx`
- `/patterns/sliding-window/longest-substring` → `app/patterns/[...slug]/page.tsx`
- `/complexity/medium/decode-ways` → `app/complexity/[...slug]/page.tsx`

Access route segments via `params.slug` array in page components. Problem slugs should match category taxonomy - a problem can appear under multiple taxonomies (e.g., "Two Sum" exists in data-structures, patterns, and complexity).

## Important Notes

- Repository: `JustinMckee/leetcode-patterns` on GitHub
- Branch: `main`
- This is a fresh project (1 commit) - establish patterns early
- No testing framework configured yet
- No API routes or server components beyond defaults
