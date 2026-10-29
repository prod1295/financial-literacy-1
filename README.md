# Financial Literacy for Kids

A website for Alex Lam’s student-led financial literacy program in Dublin, California. Built with Next.js App Router, TypeScript, and Tailwind CSS. Seven pages, no database, no tracking, and no external image or font services.

## Run locally

Use Node.js 20.9 or newer (Node 24 was used during development).

```sh
npm install
npm run dev
```

The development server runs on port 3000. For a production build:

```sh
npm run typecheck
npm run build
npm start
```

Use `npm ci` for repeatable installs from the committed lockfile. The project’s `.npmrc` keeps the npm cache in the ignored `.npm-cache` folder so installation also works in restricted cloud workspaces.

## Deploy on Vercel

Import this GitHub repository into Vercel. Use the repository root (the folder containing `package.json` and `vercel.json`) as the Root Directory. No environment variables or backend services are required.

The checked-in `vercel.json` explicitly selects the Next.js framework, installs with `npm ci`, builds with `npm run build`, and sets the output directory to `.next`.

If an existing project reports `STATIC_BUILD_NO_OUT_DIR` and asks for a `public` folder, check **Settings → Build and Deployment**:

- Framework Preset: **Next.js**
- Root Directory: repository root (leave blank)
- Build Command: `npm run build`
- Output Directory: clear any `public` override and use the Next.js default (`.next`)

Redeploy the latest `main` commit after saving the settings. `public` is for optional source assets, such as future photos and worksheets; it is not the compiled website output.

## Update content

- Page content lives in `src/app/`, with one directory per route.
- Shared contact details, navigation, teaching topics, resource entries, and approved photo placeholders are in `src/lib/site.ts`.
- Shared UI lives in `src/components/`. Styles and Tailwind’s theme are in `src/app/globals.css`.
- To add real resources, put the supplied PowerPoint files in `public/resources/` and add descriptive download links with PPTX labels to the resources page. Preserve hypothetical investment assumptions in previews. Check each link before publishing.
- To add photos, place your own images in `public/images/` and fill in the relevant photo entry with a local path, meaningful alt text, and an optional caption. Founder, fundraiser, workshop, and teaching material slots are labeled in code. Obtain permission before using identifiable photos of children. No stock photos are included.
- Confirmed progress: 2 online workshops and 53 students taught. Alex raised more than $8,000 through his Can Am San Jose badminton tournament to support the program. Do not infer event responsibilities or spending. No school or city endorsements are claimed.

## Inquiry form

Email is the primary contact method. The form validates required fields and opens a `mailto:` draft in the visitor’s email app. It does **not** transmit or store inquiries and never claims a message was delivered. After preparing a draft, visitors can also copy its contents and send it manually. A configured email app is needed for `mailto:` links to open directly.

## Visual approach

Near-white, near-black, dark green, and a single system sans-serif family. The centered hero leads into an explicitly labeled HTML example of a $20 budgeting activity. There are no testimonials, partner logos, or staged photos. The requested slideshow files were not supplied; add verified files before publishing download links.
