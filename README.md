# Event Platform

A web-based event platform built during Rocketseat's Ignite Lab 02. The application allows users to subscribe to the event and access a schedule of lessons with video playback, teacher information, and supplementary materials.

## Tech Stack

- **React 18** with TypeScript
- **Vite** as the build tool
- **Apollo Client** for GraphQL data fetching
- **GraphCMS (Hygraph)** as the headless CMS and data source
- **GraphQL Code Generator** for typed queries and mutations
- **Tailwind CSS** for styling
- **Vime** for video playback
- **React Router v6** for client-side routing
- **date-fns** for date formatting
- **Phosphor React** for icons

## Features

- Subscriber registration with name and email
- Lesson schedule sidebar with availability status
- YouTube video player embedded per lesson
- Teacher profile display (name, bio, avatar)
- Active lesson highlighting in the sidebar
- Responsive layout with Tailwind utility classes

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Lesson.tsx
│   ├── Logo.tsx
│   ├── Sidebar.tsx
│   └── Video.tsx
├── graphql/
│   ├── mutations/
│   ├── queries/
│   └── generated.ts
├── lib/
│   └── apollo.ts
├── pages/
│   ├── Event.tsx
│   └── Subscribe.tsx
├── styles/
│   └── global.css
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js 16+
- A [Hygraph (GraphCMS)](https://hygraph.com) project with the required schema

### Environment Variables

Create a `.env` file at the root of the project with the following variables:

```env
VITE_API_ACCESS_URL=your_graphcms_api_url
VITE_API_ACCESS_TOKEN=your_graphcms_access_token
```

### Installation

```bash
# Clone the repository
git clone https://github.com/sancruz-dev/event-platform.git

# Navigate to the project directory
cd event-platform

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

### GraphQL Code Generation

If you modify any `.graphql` files under `src/graphql/`, regenerate the TypeScript types by creating a `codegen.yml` file (see `codegen.example.yml`) and running:

```bash
npm run codegen
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run codegen` | Regenerate GraphQL types from schema |

## Deployment

The project includes a `vercel.json` configuration for deployment on [Vercel](https://vercel.com), with a catch-all route to support client-side navigation.

