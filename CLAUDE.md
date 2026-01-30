# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio site using the App Router architecture with TypeScript, Tailwind CSS v4, and microCMS as a headless CMS for blog content. The site features ISR (Incremental Static Regeneration) for optimal performance with dynamic content, and includes theme support via next-themes.

## Development Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Build & Production
npm run build        # Production build (will fail if microCMS API not configured)
npm start            # Run production server

# Linting
npm run lint         # Run ESLint
```

## Environment Configuration

Required environment variables in `.env.local`:

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Important**: The build will fail if microCMS environment variables are not set, even if you're just working on non-blog pages. The microCMS client initialization in `src/lib/microcms.ts` throws errors immediately if these env vars are missing.

## Architecture

### microCMS Integration Pattern

The blog content is fetched from microCMS using three main functions in `src/lib/microcms.ts`:

- `getBlogs(queries?)` - Fetches paginated blog list (used in homepage and blog listing)
- `getBlogDetail(contentId)` - Fetches single blog post (used in blog detail page)
- `getBlogIds()` - Fetches all blog IDs for SSG via `generateStaticParams()`

**Key architectural decisions**:

1. **Server Components with ISR**: Blog pages use `export const revalidate = 3600` (1 hour) for ISR
2. **Error handling**: Blog fetching failures are caught and handled gracefully - pages render with empty states rather than crashing
3. **Type safety**: microCMS responses are typed via `src/types/blog.ts` interfaces

### Page Structure

- `src/app/layout.tsx` - Root layout with Header/Footer (uses Japanese lang attribute)
- `src/app/page.tsx` - Homepage with featured projects (hardcoded) and latest blogs (microCMS)
- `src/app/blog/page.tsx` - Blog listing with ISR
- `src/app/blog/[id]/page.tsx` - Dynamic blog detail with SSG/ISR using `generateStaticParams()`
- `src/app/about/page.tsx` - Static profile page (hardcoded data)
- `src/app/projects/page.tsx` - Static projects page (hardcoded data)
- `src/app/contact/page.tsx` - Contact page (form is client component but doesn't actually submit)

### Client vs Server Components

**Client Components** (marked with `'use client'`):
- `src/components/Header.tsx` - Mobile menu state
- `src/components/ContactForm.tsx` - Form state management
- `src/components/ShareButtons.tsx` - Browser APIs (clipboard, window.location)
- `src/components/ThemeProvider.tsx` - Theme context wrapper for next-themes

**Server Components** (default):
- All page components
- `src/components/Footer.tsx`
- `src/components/Hero.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/BlogCard.tsx`

### SEO & Static Generation

- `src/app/sitemap.ts` - Dynamic sitemap including all blog posts from microCMS
- `src/app/robots.ts` - Robots.txt generation
- Each page exports `metadata` or `generateMetadata()` for SEO

### Styling Architecture

- Tailwind CSS v4 with inline theme configuration in `src/app/globals.css`
- Custom prose styles for blog content rendering (`.prose` class)
- Global animations and card hover effects defined in globals.css
- Theme support via `next-themes` package (light/dark mode capability via ThemeProvider)

### Image Configuration

- `next.config.ts` allows remote images from `images.microcms-assets.io` for microCMS thumbnails
- Next.js Image component is used throughout for automatic optimization

## microCMS Blog Schema

The `blogs` API endpoint expects:

```typescript
{
  title: string           // Required
  content: string         // Required (rich editor HTML)
  description?: string    // Optional (for meta description)
  thumbnail?: {           // Optional
    url: string
    width: number
    height: number
  }
  category?: string       // Optional
  publishedAt: string     // Required (ISO date)
}
```

## Static Assets

Images should be placed in `public/images/`:
- `profile.jpg` - About page profile photo (500x500px recommended)
- `project1.jpg` through `project6.jpg` - Project thumbnails (1200x630px recommended)

These images are referenced directly in components but the app will still work if they're missing (Next.js Image component handles missing images).

## Customization Points

When updating personal information:

1. **Hero section**: `src/components/Hero.tsx` - Main headline and tagline
2. **Navigation logo**: `src/components/Header.tsx` - Logo text in header
3. **Social links**: `src/components/Footer.tsx` - GitHub, Twitter, LinkedIn URLs
4. **Projects**: `src/app/page.tsx` and `src/app/projects/page.tsx` - Project data arrays
5. **About page**: `src/app/about/page.tsx` - Skills, technologies, experience arrays
6. **Contact info**: `src/app/contact/page.tsx` - Email and social links

All of these use hardcoded data (no CMS), so direct file edits are required.

## Common Issues & Solutions

### Type Import Errors with next-themes

When importing types from `next-themes`, always import from the package root, not from `/dist/types`:

```typescript
// ✅ Correct
import { ThemeProvider, type ThemeProviderProps } from 'next-themes';

// ❌ Wrong - causes build errors
import { type ThemeProviderProps } from 'next-themes/dist/types';
```

## Known Behaviors

- Build warnings about multiple lockfiles are expected (workspace root detection)
- 404 errors during build for blog endpoints are expected if microCMS is not configured
- Blog pages will show "no articles" state if microCMS returns empty or fails
- Contact form is non-functional (simulates submission but doesn't send anywhere)
- Share buttons use browser APIs and won't work in SSR/build phase
