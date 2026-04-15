# Portfolio

[Live Site](https://portfolio-ecmcodes-projects.vercel.app/)

## Introduction

A minimalist personal portfolio built with Next.js and TypeScript. Features a clean silver-white aesthetic with a focus on readability and simplicity. Blog content is managed through Contentful CMS.

## Pages

- **Home** — Introduction, project showcase, and contact form
- **About** — Background and skills
- **Projects** — Highlighted personal projects
- **Blogs** — Blog posts fetched from Contentful CMS
- **Blog post** — Individual post page with rich text rendering

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js (Pages Router) | Framework with SSG via `getStaticProps` |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Contentful | Headless CMS for blog content |
| date-fns | Date formatting |
| react-code-blocks | Syntax-highlighted code blocks in posts |

## File Structure

```
src/
├── pages/
│   ├── index.tsx           # Home (WelcomePage + ProjectShowcase + Contact)
│   ├── about/index.tsx
│   ├── projects/index.tsx
│   ├── blogs/
│   │   ├── index.tsx       # Blog list
│   │   ├── [slug].tsx      # Individual post
│   │   └── tags/           # Tag filtering
│   ├── globals.css
│   ├── _app.tsx
│   └── 404.tsx
│
├── components/
│   ├── global/             # Navbar, Footer, ThemeProvider, Gradient
│   ├── home/               # WelcomePage, ProjectShowcase, Contact
│   └── blogs/              # BlogPost, BlogPageContent, PostPageContent
│
├── hooks/
│   ├── usePost.ts          # Unpacks Contentful entry fields
│   └── Suspense.tsx        # Delayed suspense wrapper
│
├── types/                  # TypeScript types (PostType, ProjectType, etc.)
├── client.ts               # Contentful client
└── data/projects.json      # Static project data
```

## Environment Variables

Create a `.env.local` file with:

```bash
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Deployment

Deployed on Vercel. Push to `main` to trigger automatic deployment.
