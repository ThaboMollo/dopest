# Dopest Media Production

A responsive photography portfolio and booking website for Dopest Media Production. The site presents studio sessions, house calls, creative direction, portfolio work, and direct contact options for quote requests.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the Next.js development server with Turbopack.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs the configured lint command.

## Project Structure

```text
app/
  layout.tsx       Global layout, metadata, fonts, header, and footer
  page.tsx         Homepage section composition
  globals.css      Tailwind import, theme tokens, and global styles
  robots.ts        Robots metadata route
  sitemap.ts       Sitemap metadata route

components/
  layout/          Header and footer components
  sections/        Homepage sections
  GalleryModal.tsx Portfolio modal
  ImageViewer.tsx  Image viewing component

content/
  site.ts          Site copy, contact links, services, and portfolio data

public/images/     Website image assets
```

## Editing Content

Most site copy and structured content lives in `content/site.ts`.

Update this file to change:

- Business name, tagline, website URL, and contact details
- Navigation links
- Service descriptions
- Portfolio image labels, categories, and alt text

Portfolio images are served from `public/images/` and referenced as paths like `/images/portfolio-1.jpg`.

## Deployment

This is a standard Next.js application and can be deployed to Vercel or any platform that supports Next.js.

For a production deployment, run:

```bash
npm run build
```

Then start the production server with:

```bash
npm run start
```
