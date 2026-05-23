# shubanms.github.io

Personal portfolio of **Shuban M S** — AI Engineer & Data Scientist.

Live at **https://shubanms.github.io**

## Tech stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
npm install      # install dependencies
npm run dev      # start the dev server at localhost:4321
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
public/assets/      Résumé and research-paper PDFs
src/
  components/       Section components (Hero, About, Experience, ...)
  data/content.ts   Editable site content (experience, projects, papers, skills)
  layouts/          Base layout
  pages/index.astro Page composition
  styles/           Global styles and theme tokens
```

To update content (experience, projects, research papers, skills), edit
`src/data/content.ts` — no component changes needed.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages automatically. The Pages source must be
set to **GitHub Actions** in the repository settings.
