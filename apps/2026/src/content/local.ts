/**
 * Local Attractions page content.
 *
 * Organise content into sections.  Each section has:
 *   - heading: section title
 *   - level: heading level — 'h2' | 'h3' | 'p'  (default: 'h3')
 *   - items: array of { name, description } entries
 *
 * practicalTips: optional bullet list at the end of the page.
 *
 * Replace ALL content below with information about the host city/country.
 */
import type { LocalData } from '@iweai/ui'

const local: LocalData = {
  // ← CHANGE: one-line introduction (optional)
  intro: 'This year, IWEAI will be co-located in City Name, Country.',

  sections: [
    // ── Sightseeing ───────────────────────────────────────────────
    {
      heading: 'Local Attractions',
      level: 'h3',
      items: [
        // ← REPLACE with actual attractions
        {
          name: 'Attraction Name',
          description: 'Brief description of the attraction and why it is worth visiting.',
        },
      ],
    },

    // ── Shopping ─────────────────────────────────────────────────
    {
      heading: 'Shopping',
      level: 'h3',
      items: [
        // ← REPLACE with actual shopping spots
        {
          name: 'Market or Shopping Area',
          description: 'What to find here.',
        },
      ],
    },

    // ── Food ─────────────────────────────────────────────────────
    {
      heading: 'Food & Dining',
      level: 'h3',
      items: [
        // ← REPLACE with local dishes / restaurants
        {
          name: 'Local Dish',
          description: 'Description and where to try it.',
        },
      ],
    },
  ],

  // ← OPTIONAL: practical travel tips
  practicalTips: [
    'Transportation: ...',
    'Best time to visit: ...',
  ],
}

export default local
