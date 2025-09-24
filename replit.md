# Overview

This is a full-stack web application for Sikkim Monasteries, built to showcase sacred Buddhist monasteries, spiritual experiences, and cultural heritage of Sikkim. The application features a comprehensive guide to monasteries with detailed information, upcoming events, blog posts, spiritual experiences, and an interactive map. Users can explore monasteries, read stories, view upcoming festivals, and subscribe to newsletters for updates.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client uses React 18 with TypeScript in a single-page application (SPA) architecture. The UI is built with shadcn/ui components based on Radix UI primitives, providing a consistent and accessible design system. Styling is handled through Tailwind CSS with custom CSS variables for theming support (light/dark modes). The application uses Wouter for client-side routing and TanStack Query for server state management and caching.

## Backend Architecture
The server follows an Express.js REST API architecture with TypeScript. The application uses a modular route structure where all API endpoints are registered through a central route handler. The server implements middleware for request logging, JSON parsing, and error handling. In development, it integrates with Vite for hot module replacement and development tooling.

## Data Storage Solutions
The application uses PostgreSQL as the primary database with Drizzle ORM for type-safe database operations and migrations. The database schema includes tables for monasteries, experiences, events, blog posts, products, reviews, and newsletter subscriptions. The application is configured to work with Neon serverless PostgreSQL through connection pooling. A fallback memory storage implementation is provided for development scenarios.

## State Management
Frontend state is managed through TanStack Query for server state, providing automatic caching, background refetching, and optimistic updates. Local component state is handled with React hooks. The query client is configured with custom fetch functions that handle authentication and error responses.

## Authentication and Authorization
The application uses cookie-based session management with PostgreSQL session storage via connect-pg-simple. Sessions are configured to persist server-side with automatic cleanup. The frontend query client supports unauthorized request handling with configurable behavior.

## Build and Development Tools
The project uses Vite as the build tool and development server, providing fast hot module replacement and optimized production builds. TypeScript is configured with strict mode and modern ES modules. The build process compiles the frontend to static assets and bundles the backend with esbuild for production deployment.

# External Dependencies

## UI Component Library
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: Type-safe SQL query builder and migration tool
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Frontend Libraries
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing
- **React Hook Form**: Form handling and validation
- **date-fns**: Date manipulation and formatting utilities

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Development environment enhancements for Replit platform