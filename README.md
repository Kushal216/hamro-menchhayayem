# हाम्रो मेन्छ्यायेम — Website

This repository contains the Next.js + Tailwind CSS website for "Hamro Menchhayayem" — a Nepali-language site showcasing places, cultures, schools, people and tourism information for the municipality.

**Tech stack**

- Next.js 14 (app router)
- Tailwind CSS
- Swagger (swagger-jsdoc + swagger-ui)
- Node 18+ / npm

**Project structure (high level)**

- `app/` — Next.js application (pages, layouts, global styles)
- `app/api/v1/` — Versioned API routes (route.js files annotated with Swagger JSDoc)
- `components/` — React components used in UI
- `public/images/` — static images

**Local setup**

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm start
```

**Environment / Notes**

- This project uses Tailwind CSS; ensure the Tailwind plugin for hiding scrollbars (if used) is configured in `tailwind.config.js` when using classes like `scrollbar-hide`.
- The main OpenAPI/Swagger spec is generated from JSDoc comments in `app/api/v1/**/route.js`. The runtime Swagger JSON is exposed at `/api/v1/swagger`.

**API documentation**

- The repository contains JSDoc-style Swagger blocks above each route handler. Example endpoint to view the generated spec in development:

```bash
# open in browser
http://localhost:3000/api/v1/swagger
```

If you want a UI, add `swagger-ui-react` or serve the generated JSON to a Swagger UI instance.

**Common developer tasks**

- Linting / formatting: follow existing project scripts (check `package.json` for `lint` / `format`).
- Add new API routes under `app/api/v1/` and annotate them with Swagger JSDoc blocks so they appear in the generated spec.

**Styling / responsiveness**

- UI components use Tailwind utility classes. For responsive fixes, ensure containers use responsive grid/col classes (e.g. `col-span-5 md:col-span-4`), and apply scrolling/hiding classes to the actual scrollable element.

**Contributing**

- Create a branch for your change (example: `feature/your-change`).
- Open a PR describing what you changed and why.

**License**

- Add your project's license here (e.g. MIT) or include a `LICENSE` file.

---

If you'd like, I can:

- run the dev server and open the Swagger JSON locally,
- add a simple Swagger UI page that renders the spec,
- or update `package.json` scripts for lint/build checks.
