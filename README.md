# Film Production Studio Portfolio

Portfolio website built with Astro, showcasing film projects with multilingual support (English/Czech).

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 📜 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 📁 Project Structure

```
/
├── public/              # Static assets
│   └── images/          # Project images
├── src/
│   ├── components/      # Astro components (Header, Footer)
│   ├── content/         # Content collections
│   │   ├── config.ts    # Content schema definitions
│   │   └── projects/    # Project MDX files
│   │       └── {slug}/
│   │           ├── index.mdx      # Project metadata
│   │           ├── poster.jpg     # Main project image
│   │           ├── 1.jpg, 2.jpg   # Gallery images
│   │           ├── synopsis-en.md # English synopsis
│   │           └── synopsis-cz.md # Czech synopsis
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes
│   │   ├── index.astro  # Homepage (projects list)
│   │   ├── [slug].astro # Project detail pages
│   │   ├── about.astro  # About page
│   │   └── contact.astro# Contact page
│   ├── lib/             # Utilities and config
│   ├── styles/          # Global styles
│   └── types/           # TypeScript types
└── docs/                # Documentation
    └── ADDING_PROJECTS.md
```

## 🎬 Adding a New Project

See [docs/ADDING_PROJECTS.md](docs/ADDING_PROJECTS.md) for detailed instructions.

### Quick Guide

1. **Create project folder:**
```bash
mkdir src/content/projects/my-project
```

2. **Add images:**
   - Main poster: `poster.jpg` (for homepage)
   - Gallery: `1.jpg`, `2.jpg`, etc. (for detail page)

3. **Create `index.mdx`:**
```yaml
---
title:
  en: Project Title
  cz: Název projektu
logline:
  en: One-line description
  cz: Jednořádkový popis
year: 2024
duration: 18 min
category: short
status: released
image: ./poster.jpg
credits:
  - role: Director
    name: Name
synopsis:
  en: "./synopsis-en.md"
  cz: "./synopsis-cz.md"
order: 0
---
```

4. **Add synopsis files:**
   - `synopsis-en.md` - English synopsis
   - `synopsis-cz.md` - Czech synopsis

5. **Build and preview:**
```bash
npm run build
npm run preview
```

## 🌐 URLs

Projects are accessible directly by their slug:
- Homepage: `/`
- Project: `/{project-slug}` (e.g., `/night-games`)
- About: `/about`
- Contact: `/contact`

## 🛠 Technology Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS
- **Content:** MDX with Content Collections
- **TypeScript:** For type safety
- **Image Optimization:** Astro's built-in image optimization

## 📝 Configuration

### Site Config

Edit site information in `src/lib/config.ts`:
```typescript
export const siteConfig: SiteConfig = {
  siteName: "Your Studio Name",
  location: "Your Location",
  email: "your@email.com",
  // ...
};
```

### Content Schema

Project content schema is defined in `src/content/config.ts`. Modify if you need to add/change fields.

## 🚢 Deployment

### Custom Domain Setup

This site is configured for a custom domain. See [docs/CUSTOM_DOMAIN_SETUP.md](docs/CUSTOM_DOMAIN_SETUP.md) for complete setup instructions.

**Quick steps:**
1. Update `public/CNAME` with your domain
2. Configure DNS at your domain registrar
3. Update `astro.config.mjs` with your domain
4. Enable custom domain in GitHub Pages settings

### Building for Production

Build the production site:
```bash
npm run build
```

The output will be in the `dist/` directory, ready to deploy to any static hosting service:
- GitHub Pages (with custom domain)
- Netlify
- Vercel
- Cloudflare Pages

## 📄 License

[Add your license here]
