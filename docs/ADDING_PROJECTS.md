# Adding a New Project

Complete guide for adding projects to your portfolio site.

## Overview

Each project is a folder in `src/content/projects/` containing:
- `index.mdx` - Project metadata and content
- Images (poster and gallery)
- Synopsis files (EN/CZ)

## Step-by-Step Guide

### 1. Create Project Folder

Create a new folder with your project's slug (URL-friendly name):

```bash
mkdir src/content/projects/my-project
```

**Slug naming rules:**
- Lowercase only
- Use hyphens for spaces
- No special characters
- Example: `my-awesome-film`, `summer-2024`, `documentary-project`

### 2. Add Images

Place your images in the project folder:

**Required:**
- `poster.jpg` or `poster.svg` - Main image for homepage grid (16:9 aspect ratio recommended)

**Optional:**
- `1.jpg`, `2.jpg`, `3.jpg`, etc. - Gallery images for project detail page

**Image specifications:**
- Format: JPG, PNG, or SVG
- Aspect ratio: 16:9 preferred
- Resolution: 1920x1080px minimum
- Optimize file size (< 500KB recommended)

```
src/content/projects/my-project/
├── poster.jpg
├── 1.jpg
├── 2.jpg
└── 3.jpg
```

### 3. Create index.mdx

Create `src/content/projects/my-project/index.mdx` with the following structure:

### 3. Create index.mdx

Create `src/content/projects/my-project/index.mdx` with the following structure:

```yaml
---
title:
  en: Project Title
  cz: Název projektu
logline:
  en: One-line compelling description
  cz: Jednořádkový přitažlivý popis
year: 2024
duration: 18 min
category: short
status: released
image: ./poster.jpg
credits:
  - role: Director
    name: Your Name
  - role: Producer
    name: Producer Name
  - role: Cinematographer
    name: DP Name
synopsis:
  en: "./synopsis-en.md"
  cz: "./synopsis-cz.md"
stills:
  - src: ./1.jpg
    alt: Opening scene
  - src: ./2.jpg
    alt: Key moment
  - src: ./3.jpg
    alt: Another scene
video:
  provider: youtube
  id: "dQw4w9WgXcQ"
  aspect: 16:9
festivals:
  - name: Karlovy Vary International Film Festival
    year: 2024
  - name: Berlinale
    year: 2024
    award: Special Mention
links:
  instagram: https://instagram.com/project
  facebook: https://facebook.com/project
  website: https://project-website.com
support:
  - Czech Film Fund
  - Creative Europe MEDIA
order: 0
---
```

### 4. Field Descriptions

#### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `title` | Object | Project titles | `en: "My Film"` |
| `year` | Number | Release year | `2024` |
| `category` | Enum | Film type | `short`, `feature`, `documentary`, `experimental` |
| `status` | Enum | Production status | `in development`, `in postproduction`, `released` |
| `image` | String | Path to poster | `./poster.jpg` |
| `credits` | Array | Team credits | See example above |

#### Optional Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `logline` | Object | One-line description | `en: "Brief description"` |
| `duration` | String | Runtime | `18 min`, `95 min` |
| `synopsis` | Object | Path to synopsis files | `en: "./synopsis-en.md"` |
| `stills` | Array | Gallery images | See example above |
| `video` | Object | Trailer/video | See providers below |
| `support` | Array | Funding sources | List of organizations |
| `pitching` | Array | Development events & pitching | See example below |
| `festivals` | Array | Festival selections | See example below |
| `links` | Object | Social media | `instagram`, `facebook`, `website` |
| `tags` | Array | Keywords | `["drama", "family"]` |
| `order` | Number | Display order | Lower numbers appear first |

#### Development Events & Pitching

Use `pitching` for development programs, pitching events, labs, and workshops:

```yaml
pitching:
  - name: Berlinale - BIFA Pitching Event
    year: 2026
    award: Will be presented
  - name: MIDPOINT Feature Launch
    year: 2025
    award: Selected
```

#### Festival Selections

Use `festivals` for actual film festival selections and screenings:

```yaml
festivals:
  - name: Cannes Film Festival
    year: 2026
    award: Official Selection - Short Film Competition
  - name: Sundance Film Festival
    year: 2026
    award: Winner - Best Short Film
```

#### Video Providers

**YouTube:**
```yaml
video:
  provider: youtube
  id: "VIDEO_ID"
  aspect: 16:9
```

**Vimeo:**
```yaml
video:
  provider: vimeo
  id: "VIDEO_ID"
  aspect: 16:9
```

**Direct file:**
```yaml
video:
  provider: direct
  url: "/videos/my-film.mp4"
```

### 5. Add Synopsis Files

Create two synopsis files in your project folder:

**`synopsis-en.md`:**
```markdown
First paragraph providing context and setup.

Second paragraph delving into themes and approach.

Third paragraph about reception or production notes.
```

**`synopsis-cz.md`:**
```markdown
První odstavec poskytující kontext a nastavení.

Druhý odstavec zabývající se tématy a přístupem.

Třetí odstavec o recepci nebo produkčních poznámkách.
```

### 6. Test Locally

```bash
npm run dev
```

1. Open `http://localhost:4321`
2. Verify your project appears on homepage
3. Click to view detail page
4. Check all content renders correctly
5. Test responsive design (mobile/tablet/desktop)
6. Verify gallery lightbox works (desktop only)

### 7. Build & Deploy

```bash
npm run build
npm run preview
```

If build succeeds, deploy to your hosting platform.

## Complete Example

**File structure:**
```
src/content/projects/night-games/
├── index.mdx
├── poster.jpg
├── 1.jpg
├── 2.jpg
├── synopsis-en.md
└── synopsis-cz.md
```

**index.mdx:**
```yaml
---
title:
  en: Night Games
  cz: Bojovka
logline:
  en: A religious sect prepares for baptism, but teenager Anna longs for freedom
  cz: Náboženská sekta se připravuje na křest, ale teenagerka Anna touží po svobodě
year: 2023
duration: 12 min
category: experimental
status: released
image: ./poster.jpg
credits:
  - role: Director
    name: Anna Novotná
  - role: Cinematographer
    name: Anna Novotná
  - role: Sound Design
    name: Tomáš Král
  - role: Producer
    name: Jan Dvořák
synopsis:
  en: "./synopsis-en.md"
  cz: "./synopsis-cz.md"
video:
  provider: vimeo
  id: "827672933"
  aspect: 16:9
stills:
  - src: ./1.jpg
    alt: Lake scene
  - src: ./2.jpg
    alt: Anna's portrait
festivals:
  - name: Karlovy Vary International Film Festival
    year: 2024
  - name: Berlinale
    year: 2024
    award: Special Mention
support:
  - Czech Film Fund
  - Karlovarský kraj
order: 0
---
```

## Tips & Best Practices

1. **Images:** Always optimize images before adding (use tools like TinyPNG or ImageOptim)
2. **Slugs:** Keep them short and memorable
3. **Order:** Use increments of 10 (0, 10, 20) to allow easy reordering
4. **Synopsis:** Keep EN/CZ files in sync structurally
5. **Testing:** Always test locally before deploying
6. **Backups:** Keep original high-res images backed up elsewhere

## Troubleshooting

**Project doesn't appear:**
- Check `order` field is set
- Verify all required fields are present
- Run `npm run dev` to see build errors

**Images not loading:**
- Check image paths start with `./`
- Verify image files exist in project folder
- Check file extensions match exactly

**Build fails:**
- Check YAML syntax in index.mdx
- Verify all enum values match exactly
- Check synopsis file paths are correct

## Complete Example

Here's a full real-world example:

```typescript
{
  slug: "silent-waters",
  title_en: "Silent Waters",
  title_local: "Tiché vody",
  category: "documentary",
  status: "in postproduction",
  year: 2025,
  duration: "72 min",
  logline: "An intimate portrait of a fishing village facing environmental change",
  synopsis: `Silent Waters follows three generations of fishermen in a small coastal village as they witness the dramatic transformation of their ecosystem and way of life.

Through observational cinematography and personal testimonies, the film explores the intersection of tradition, economy, and environmental crisis. The documentary avoids easy answers, instead creating space for subjects to articulate their complex relationship with the changing sea.

Currently in post-production with completion expected in early 2025. The project has received support from multiple environmental and cultural foundations.`,
  credits: [
    { role: "Director", name: "Martin Svoboda" },
    { role: "Director", name: "Anna Malá" },
    { role: "Producer", name: "Jan Novák" },
    { role: "Cinematographer", name: "Petr Dvořák" },
    { role: "Editor", name: "Eva Horáková" },
    { role: "Sound Design", name: "Tomáš Král" },
  ],
  support: [
    "Czech Film Fund - Documentary Support",
    "Regional Development Fund",
    "Green Documentary Fund",
    "Czech Television",
  ],
  gallery: [
    { src: "/images/silent-waters-1.jpg", alt: "Fisherman at dawn" },
    { src: "/images/silent-waters-2.jpg", alt: "Village harbor" },
    { src: "/images/silent-waters-3.jpg", alt: "Traditional fishing boats" },
    { src: "/images/silent-waters-4.jpg", alt: "Community meeting" },
  ],
  order: 6,
}
```

## Tips

### Writing Synopsis
- **First paragraph**: Setup and context
- **Middle paragraph**: Themes and approach
- **Final paragraph**: Status and reception

### Choosing Order
- Lower numbers appear first
- Released projects typically come before in-development
- Feature films often placed before shorts
- Consider featuring your strongest work first

### Alt Text for Images
- Describe what's in the image concisely
- Helps with accessibility and SEO
- Example: "Protagonist standing in wheat field at sunset"

### Credits
Common roles to include:
- Director
- Producer / Co-Producer / Executive Producer
- Scriptwriter / Screenplay
- Cinematographer / Director of Photography
- Editor
- Sound Design / Sound
- Music / Composer
- Production Designer
- Costume Designer

## Troubleshooting

**Project not appearing?**
- Check that you added it to the array in `lib/projects.ts`
- Verify no syntax errors (missing commas, brackets)
- Run `npm run dev` and check console for errors

**Images not loading?**
- Verify paths start with `/images/`
- Check file names match exactly (case-sensitive)
- Ensure images are in `public/images/` folder

**Formatting looks wrong?**
- Check that synopsis uses proper line breaks (`\n\n` for new paragraphs)
- Verify all required fields are present
- Ensure credits array has proper structure

---

That's it! Your new project should now appear on the site with its own dedicated page.
