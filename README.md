# IWEAI Website — Unified Monorepo

This repository contains the website for all editions of the **International Workshop on Educational Artificial Intelligence (IWEAI)**, hosted at `iweai.github.io/YEAR/`.

## Repository Structure

```
iweai/
├── packages/
│   └── ui/                  # Shared Vue 3 component library (@iweai/ui)
│       └── src/
│           ├── types.ts         # TypeScript type definitions
│           ├── injection-keys.ts
│           ├── components/      # All shared UI components
│           ├── views/           # All shared page views
│           ├── router/          # Shared router factory
│           └── store/
├── apps/
│   ├── 2024/                # IWEAI 2024 (Kyoto, Japan)
│   └── 2025/                # IWEAI 2025 (Wellington, New Zealand)
├── template/                # Scaffold for new years (copy this!)
└── .github/workflows/
    └── deploy.yml           # Automated build & deploy
```

## Adding a New Year (e.g. 2026)

1. **Copy the template:**
   ```bash
   cp -r template/ apps/2026/
   ```

2. **Edit the following files** (search for `← CHANGE`):

   | File | What to update |
   |------|----------------|
   | `apps/2026/src/site.config.ts` | Year, edition, location, dates, email, links |
   | `apps/2026/src/content/news.ts` | Workshop news items |
   | `apps/2026/src/content/program.ts` | Session schedule |
   | `apps/2026/src/content/committee.ts` | Organizing committee |
   | `apps/2026/src/content/pcmembers.ts` | PC members list |
   | `apps/2026/src/content/local.ts` | Local attractions for host city |
   | `apps/2026/src/main.ts` | Router base path `/2026/` |
   | `apps/2026/vite.config.ts` | `base: '/2026/'` |
   | `apps/2026/package.json` | `name: "iweai-2026"` |
   | `apps/2026/index.html` | `<title>IWEAI 2026</title>` |
   | `apps/2026/404.html` | Replace `2026` in redirect URLs |

3. **Add images:**
   - `apps/2026/src/assets/imgs/bg.jpg`, `bg2.jpg`, `bg3.jpg` — carousel backgrounds
   - `apps/2026/src/assets/imgs/btm-img1.png`, `btm-img2.png` — supporting org logos
   - `apps/2026/src/assets/imgs/people/Name.jpg` — committee member photos
   - `apps/2026/src/assets/imgs/past/*.jpg` — photos from the current year's workshop event

4. **Register in build pipeline** — add to two places:
   - `package.json` → `build:all` script
   - `.github/workflows/deploy.yml` → `matrix.year` array

5. **Update past years list** — in `apps/2026/src/site.config.ts`, add 2025 to `pastIweai`.

## Development

```bash
# Install all dependencies
npm install

# Start dev server for a specific year
npm run dev:2024
npm run dev:2025

# Build all years
npm run build:all

# Build a single year
npm run build --workspace=apps/2024
```

## Pages

Every year includes the following pages:

| Route | Page |
|-------|------|
| `/YEAR/home` | Home (news, welcome, important dates) |
| `/YEAR/program` | Program schedule (or TBD) |
| `/YEAR/organization/committee` | Organizing committee |
| `/YEAR/organization/pcmembers` | PC members |
| `/YEAR/abstracts` | Call for Abstracts |
| `/YEAR/attending` | External link to PRICAI registration |
| `/YEAR/local` | Local attractions |
| `/YEAR/past` | Past IWEAI editions + workshop photos |
| `/YEAR/keynotes` | Keynotes (hidden until `showKeynotes: true`) |

## Deployment

Push to `main` branch → GitHub Actions automatically:
1. Builds all years in parallel
2. Assembles output into a single deployment directory:
   ```
   deploy/2024/   ← built from apps/2024/dist/
   deploy/2025/   ← built from apps/2025/dist/
   ```
3. Deploys to the `gh-pages` branch

The site is then served at `iweai.github.io/2024/`, `iweai.github.io/2025/`, etc.

> **Note:** This repository should be hosted at `iweai/iweai.github.io` on GitHub for the URL structure to work correctly with GitHub Pages.

## Controlling Page Visibility

In `site.config.ts`:

```ts
showProgram: false,    // → shows "To Be Determined" on Program page
showProgram: true,     // → shows the full schedule table

showKeynotes: false,   // → Keynotes hidden from navigation
showKeynotes: true,    // → Keynotes visible in navigation
```
