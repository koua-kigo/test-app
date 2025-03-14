# Restaurant Passport App - Developer Guide

## Commands

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run lint` - Run ESLint
- `bun run storybook` - Start Storybook (UI component explorer)
- `bun run new` - Generate new components using Plop
- `bun run drizzle:generate` - Generate database migrations
- `bun run drizzle:migrate` - Run database migrations
- `bun run scrape` - Run restaurant data scraper
- `bun run test` - Run tests with Vitest (to run single test: `bun run test path/to/test.spec.ts`)

## Code Style Guidelines

- **TypeScript**: Use strict mode, explicit return types on functions
- **Imports**: Group imports (React, third-party, internal) with blank line separators
- **Formatting**: Follow ESLint rules, 2-space indentation, avoid console.log in production
- **Components**: Use functional components with named exports
- **Naming**: PascalCase for components, camelCase for functions, kebab-case for files
- **Error Handling**: Use try/catch with appropriate error typing, avoid generic Error types
- **State Management**: Use React hooks (useState, useContext) for state
- **Database**: Use Drizzle ORM functions for all database operations
- **API Routes**: Use Next.js API routes with proper HTTP status codes and error responses
- **Mobile**: Support responsive design with mobile-first approach

## TODO

 Let me outline a step-by-step performance improvement plan for your restaurant passport app:

  1. Data Fetching Optimization

- Implement pagination in getRestaurants() function to limit initial load
- Remove eager loading of unnecessary relations in database queries
- Fix the console.log statements in production code (especially line 53 in restaurants.ts)
- Use selective fetching instead of loading all relations at once

  2. Image Optimization

- Configure Next.js Image component properly with size constraints
- Remove the unoptimized: process.env.NEXT_PUBLIC_SKIP_IMAGE_OPTIMIZATION === "true" option
- Implement image lazy loading for off-screen images
- Use proper image formats (WebP/AVIF) with fallbacks

  3. Component Rendering Improvements

- Replace heavy animation libraries with lighter alternatives
- Replace staggered animations with simpler transitions that don't block rendering
- Implement virtualization for long lists (especially RestaurantList)
- Add proper Suspense boundaries for code splitting

  4. Code Splitting & Bundle Size Reduction

- Implement dynamic imports for admin-only components
- Separate public and admin bundle code
- Remove unnecessary third-party libraries or replace with lighter alternatives
- Configure proper tree-shaking in the build process

  5. State Management Refinement

- Optimize the location context to prevent unnecessary rerenders
- Implement lazy initialization for expensive computations
- Improve the caching strategy for restaurant data
- Remove debug logs in context providers (line 20 in location-context.tsx)

  6. Mobile Optimization

- Implement proper lazy loading for mobile devices
- Reduce animation complexity on mobile
- Add resource hints (preconnect, prefetch) for critical resources
- Optimize QR scanner code to reduce CPU usage on mobile

  7. Caching Strategy

- Implement proper caching headers for static resources
- Use SWR or React Query for client-side data fetching with caching
- Add ISR (Incremental Static Regeneration) for semi-static pages
- Configure Next.js cache for optimal performance

  8. Performance Monitoring

- Add real user monitoring (RUM) solution
- Implement Core Web Vitals tracking
- Add error boundary components to prevent cascade failures
- Set up performance budget alerts

  This plan addresses the main performance issues identified in your codebase and provides a structured approach
  to improving the application's speed and user experience.
