/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║         IWEAI YEAR-SPECIFIC SITE CONFIGURATION                  ║
 * ║                                                                  ║
 * ║  HOW TO CREATE A NEW YEAR:                                       ║
 * ║  1. Copy the entire template/ folder to apps/YEAR/              ║
 * ║  2. Edit this file (site.config.ts) with the new year's data    ║
 * ║  3. Fill in content/ files (news, program, committee, etc.)     ║
 * ║  4. Replace images in assets/imgs/                              ║
 * ║  5. Update vite.config.ts → base: '/YEAR/'                      ║
 * ║  6. Update package.json  → name: "iweai-YEAR"                   ║
 * ║  7. Update index.html    → <title>IWEAI YEAR</title>            ║
 * ║  8. Update 404.html      → replace YEAR in redirect URLs        ║
 * ║  9. Add year to root package.json build:all script              ║
 * ║ 10. Add year to .github/workflows/deploy.yml                    ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */
import type { SiteConfig } from '@iweai/ui'

export const siteConfig: SiteConfig = {
  // ── Basic information ────────────────────────────────────────────
  year: 2026,                          // ← CHANGE: The workshop year
  edition: '3rd',                      // ← CHANGE: "1st", "2nd", "3rd", etc.
  location: {
    city: 'Guangzhou',                 // ← CHANGE: Host city
    country: 'China',           // ← CHANGE: Host country
  },
  dates: 'DD-DD Month YYYY',           // ← CHANGE: e.g. "17-18 November 2026"

  // ── Contact & partner links ──────────────────────────────────────
  email: 'iweai@outlook.com',      // ← CHANGE: Year-specific contact email
  pricaiUrl: 'https://2026.pricai.org',            // ← CHANGE
  pricaiLabel: 'PRICAI2026',           // ← CHANGE: Label shown in nav bar
  attendingUrl: 'https://www.2026.pricai.org/attending', // ← CHANGE: Link for "ATTENDING" nav item

  // ── Home page welcome text ───────────────────────────────────────
  // Replace the edition ("3rd") and year (2026) references as needed.
  welcomeText:
    'The 3rd International Workshop on Educational Artificial Intelligence (IWEAI 2026) aims to bring together researchers and practitioners from academia and industry to explore the impact of artificial intelligence (AI) in reshaping the practice of education. We will explore the use of AI models (e.g., large language models, decision making models, user profile models) in instructional systems, as well as discuss how humans (both students and teachers) may effectively interact with AI agents, and best leverage AI\'s power for learning and teaching. Through a mixed schedule of keynote talks, participant presentations, and panel discussions, our workshop provides attendees with a special opportunity to discover the potential of AI in the area of education.',

  // ── Important dates ──────────────────────────────────────────────
  importantDates: {
    abstractDeadline: 'August 29, 2026',  // ← CHANGE
    acceptance: 'September 10, 2026',        // ← CHANGE
    cameraReady: 'September 20, 2026',       // ← CHANGE
    workshop: 'November 17, 2026',       // ← CHANGE
    // note: 'Custom deadline note',     // ← OPTIONAL: Override the default "anywhere on earth" note
  },

  // ── Page visibility ──────────────────────────────────────────────
  // Set showKeynotes: true once keynote speakers are confirmed
  showKeynotes: false,
  // Set showProgram: true once the program schedule is ready; until then shows "To Be Determined"
  showProgram: false,

  // ── Past IWEAI editions (shown in navigation submenu) ───────────
  // Add an entry for each previous year. These appear as external links.
  // Do NOT include the current year — it always shows as internal link.
  pastIweai: [
    { year: 2024, url: 'https://iweai.github.io/2024/' },
    { year: 2025, url: 'https://iweai.github.io/2025/' },
    // { year: 2026, url: 'https://iweai.github.io/2026/' },  // ← Add when archiving
  ],

  // ── Carousel background images ───────────────────────────────────
  // File names must match files placed in src/assets/imgs/
  // Images are sorted alphabetically, so name them to control display order.
  // Recommended: bg.jpg, bg2.jpg, bg3.jpg  (or bg1.jpg, bg2.jpg, bg3.jpg)
  carouselImageFiles: ['bg.jpg', 'bg2.jpg', 'bg3.jpg'],  // ← CHANGE filenames as needed

  // ── Supporting organisations (footer logos) ───────────────────────
  // Place logo files in src/assets/imgs/ and reference them here.
  supportingOrgs: [
    { name: 'SCNU', logoFile: 'btm-img1.png' },
    { name: 'Deakin', logoFile: 'btm-img2.png' },
    // Add or remove organisations as needed
  ],
}
