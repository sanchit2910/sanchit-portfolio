# Overview

This is a personal portfolio website for Sanchit Khandelwal, an Android Developer with 4+ years of experience. The project is built as a modern full-stack web application featuring a responsive React frontend with a clean, professional design showcasing skills, experience, projects, and contact information. The backend provides API endpoints for contact form submissions and includes basic data storage capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized builds
- **Theme System**: Custom theme provider supporting light/dark mode with system preference detection

## Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints with proper HTTP status codes and error handling
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Request Handling**: Express middleware for JSON parsing, logging, and error handling
- **Development Server**: Vite integration for hot module replacement in development

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Schema**: Shared schema definitions between frontend and backend using Zod for validation
- **Migrations**: Database migration support through Drizzle Kit
- **Current Implementation**: In-memory storage with plans for PostgreSQL integration

## Component Architecture
- **Layout**: Single-page application with smooth scrolling navigation between sections
- **Sections**: Modular components for Hero, About, Skills, Experience, Projects, Apps, and Contact
- **Form Handling**: React Hook Form with Zod validation for contact form
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Accessibility**: ARIA labels and semantic HTML throughout

## Development Workflow
- **Development**: Hot reload with Vite dev server and Express backend
- **Building**: Separate build processes for client (Vite) and server (esbuild)
- **Type Checking**: TypeScript compilation with shared types between client and server
- **Asset Handling**: Static asset serving with proper caching headers

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack Query for state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tools**: Vite with React plugin, esbuild for server bundling
- **TypeScript**: Full TypeScript support across client and server

## UI and Styling
- **Component Library**: Shadcn/ui built on Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Theming**: CSS custom properties with dark/light mode support

## Backend Services
- **Web Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM configured for PostgreSQL via Neon serverless
- **Validation**: Zod for runtime type checking and form validation
- **Development**: TSX for TypeScript execution in development

## Form and Interaction
- **Form Management**: React Hook Form with Hookform Resolvers
- **Validation**: Zod schemas shared between client and server
- **User Feedback**: Toast notifications for user interactions
- **Date Handling**: date-fns for date formatting and manipulation

## Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Error Handling**: Runtime error overlay for development
- **Type Safety**: Shared TypeScript configuration across all packages