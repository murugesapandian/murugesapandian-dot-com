# murugesapandian.com

Personal site for Murugesapandian Thangaraj — a career narrative for
recruiters, hiring managers, and industry peers. Built with
[Astro 7](https://astro.build) (static output) and
[Tailwind CSS v4](https://tailwindcss.com), no client-side framework.

## Project structure

```
src/
  components/   UI building blocks (Header, Hero, Timeline, ProjectCard, ...)
  content/      All site copy as typed data — edit these, not the components
  layouts/      Layout.astro — <head>, SEO/meta, JSON-LD, header/footer shell
  pages/        index.astro (the one-page site), resume.astro, 404.astro
  scripts/      main.ts — mobile menu, scroll-spy, reveal, counters, theme
  styles/       global.css — brand tokens, dark-mode variant, base styles
public/         Static files served as-is: favicons, og-image, robots.txt,
                sitemap (generated at build), and the résumé PDF
scripts/        generate-assets.mjs + og-image.svg (regenerate favicons/OG)
```

## Editing content

Everything on the page is copy that lives in `src/content/*.ts` as plain,
typed objects — no CMS, no build step required to edit text:

| File           | Controls                                                       |
| -------------- | -------------------------------------------------------------- |
| `site.ts`      | Nav, hero, about, stats, impact tiles, vision, contact, footer |
| `journey.ts`   | Career timeline entries                                        |
| `projects.ts`  | Project / case-study cards                                     |
| `expertise.ts` | Grouped skill chips                                            |
| `education.ts` | Education & credentials list                                   |

**Open TODOs:** `journey.ts` has employer entries (Mphasis, SoftClouds, TCS,
and the earlier Walmart tenure) marked `comingSoon: true` with `TODO(MP)`
comments — no dates, titles, or bullets were invented for these. Fill in the
real `title`, `period`, and `bullets` fields and the timeline renders them
automatically; until then the site shows "Role details coming soon." The
current Walmart/Sam's Club role is also missing its start date
(`period: undefined` — see the `TODO(MP)` comment above it).

## Adding the résumé PDF

Drop the file at:

```
public/Murugesapandian-Thangaraj-Resume.pdf
```

`/resume` detects the file at build time — with it present, the page embeds
and offers a download; without it, the page shows a friendly "not posted
yet" message with mailto/LinkedIn links instead of a broken link.

## Local development

Requires Node 22.12+.

```sh
npm install
npm run dev        # http://localhost:4321
npm run build       # production build to dist/
npm run preview     # serve the production build locally
npm run format      # format with Prettier
npm run assets:generate  # regenerate favicons + og-image.png from the SVG sources
```

## Deploying to Cloudflare Pages

1. Push this repo to GitHub (or GitLab).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect
   to Git**, pick this repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.

### Pointing murugesapandian.com at it

1. In the Pages project: **Custom domains → Set up a custom domain**, enter
   `murugesapandian.com` (and `www.murugesapandian.com` if you want both).
2. If the domain's nameservers are already on Cloudflare, it adds the DNS
   record for you automatically — nothing else to do.
3. If the domain is registered elsewhere and not on Cloudflare DNS, add a
   CNAME record at your registrar/DNS provider:
   - Host: `@` (root) — some registrars require an ALIAS/ANAME record
     instead of CNAME at the apex; Cloudflare's UI tells you which to use
   - Value: `<your-project>.pages.dev`
   - For `www`: CNAME `www` → `<your-project>.pages.dev`
4. DNS propagation can take a few minutes to a few hours. Cloudflare
   auto-provisions the TLS certificate once the record resolves.

## Design system

- **Colors:** navy `#0B1F3A` / deep navy `#061428` (dark surfaces), gold
  `#C9A227` (accent), soft gold `#F1E5B8`, off-white `#F7F7F4`, slate
  `#3A4553` (body text), mist `#DCE1E8` (borders). A darker `gold-ink`
  (`#8A6D1E`) is used for gold text on light backgrounds to meet WCAG AA
  contrast — see the note in `src/styles/global.css`.
- **Type:** Fraunces (display/serif), Inter (body/UI), JetBrains Mono
  (labels/tags) — all self-hosted via `@fontsource`, no external font
  requests.
- **Dark mode:** manual toggle in the header/footer, persisted to
  `localStorage` and applied via `data-theme="dark"` on `<html>`; defaults
  to light. See `src/scripts/main.ts`.
- **Motion:** the gold "flow line" (the SVG spine through the hero and
  Career Journey timeline) draws itself in once on scroll; sections fade up
  once on scroll; stat counters animate up once. Everything is gated behind
  a `.js` class (so content is never hidden without JavaScript) and fully
  disabled under `prefers-reduced-motion: reduce`.

## Quality checks run against this build

- `npm run build` — no errors or warnings.
- Lighthouse (production build, desktop): **Performance 98 · Accessibility
  100 · Best Practices 100 · SEO 100** on `/` and `/resume`. Re-run with
  `npm run preview` in one terminal and
  `npx lighthouse http://localhost:4322/ --view` in another.
- Manually verified at 375px, 390px, 768px, and 1440px, in both light and
  dark mode, plus the mobile menu, scroll-spy nav, and the résumé
  present/absent states.
