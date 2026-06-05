# Amirreza Ahadzadeh — Portfolio

Personal portfolio website built with **Vite + React + TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # output → dist/
npm run preview    # serve the production build locally
```

TypeScript is checked as part of the build (`tsc -b && vite build`).

## Updating content

All text and data lives in **`src/data/content.ts`**. Edit that file to update your name, projects, skills, etc. — no component changes needed.

## Light / dark mode

The toggle respects your OS preference on first visit and persists the choice in `localStorage`. To change the accent colour, edit the two CSS variable declarations at the top of `src/index.css`:

```css
:root  { --color-accent: 31 78 121; }   /* light: #1F4E79 */
.dark  { --color-accent: 96 165 250; }   /* dark:  #60A5FA */
```

Values are space-separated RGB channels (required for Tailwind opacity modifiers).

## Adding your resume

Drop `resume.pdf` into the `public/` folder. The "Resume" button in the hero links to `/resume.pdf` automatically.

## Adding LinkedIn

Open `src/data/content.ts` and set `person.linkedin` to your profile URL. The contact section will render the link once it's non-empty.

---

## Deploying

### Vercel (recommended — zero config)

1. Push to GitHub.
2. Import the repo in [vercel.com](https://vercel.com). Vercel auto-detects Vite; no settings needed.

### GitHub Pages

1. **Set the base path** — edit `vite.config.ts` and replace `'/'` with your repo name:

   ```ts
   base: '/your-repo-name/',
   ```

   Or pass it via environment variable without touching the file:

   ```bash
   VITE_BASE_PATH=/your-repo-name/ npm run build
   ```

2. **Deploy:**

   ```bash
   npm run deploy
   ```

   This runs `npm run build` then pushes `dist/` to the `gh-pages` branch via the `gh-pages` package.

3. In your GitHub repo → **Settings → Pages**, set the source to the `gh-pages` branch, root folder.

4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

> **Note:** The `gh-pages` package needs write access to your repo. Make sure you have Git configured and are authenticated.

---

## Project structure

```
src/
├── data/
│   └── content.ts          ← all site content lives here
├── hooks/
│   ├── useTheme.ts
│   └── useActiveSection.ts
├── components/
│   ├── Nav.tsx
│   ├── ThemeToggle.tsx
│   ├── SectionWrapper.tsx  ← scroll-triggered fade-in
│   ├── SectionHeading.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ResearchTeaching.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
public/
├── favicon.svg
└── resume.pdf              ← drop your CV here
```
