# Ain Muhammad — Portfolio

Personal portfolio site covering my experience, projects, skills and education, with scroll-driven animations throughout.

**Live site: https://ainemuhammad.github.io/portfolio/**

## Tech stack

- React 18 and TypeScript
- Vite 5
- Framer Motion for scroll and entrance animations
- GitHub Actions deploying to GitHub Pages

## Project structure

```
src/
  components/   Hero, About, Experience, Projects, Skills, Education, Contact, Nav
  data/resume.ts   All content (experience, projects, skills, education)
```

To add or edit a project, experience entry or skill, change `src/data/resume.ts`; the components render from it.

## Local development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
```

The site is served under `/portfolio/` (see `base` in `vite.config.ts`), so the dev server is at http://localhost:5173/portfolio/.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
