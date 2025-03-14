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