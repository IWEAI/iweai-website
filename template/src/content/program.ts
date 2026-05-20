/**
 * Workshop program schedule.
 *
 * Leave sessions as an empty array until the schedule is finalized.
 * Set siteConfig.showProgram = true in site.config.ts to show this table;
 * while false, the Program page displays "To Be Determined" instead.
 *
 * isHighlighted: true  → renders the row with a light-gray background
 */
import type { ProgramData } from '@iweai/ui'

const program: ProgramData = {
  workshopLabel: 'The 3rd International Workshop on Educational Artificial Intelligence (IWEAI 2026)',
  // ← CHANGE: actual date once confirmed
  date: 'DD Month YYYY',
  // ← CHANGE: local timezone abbreviation, e.g. "UTC+9", "NZDT", "AEDT"
  timezone: 'UTC+0',
  sessions: [
    // ── Example session format ────────────────────────────────────
    // {
    //   time: '9:00–9:30',
    //   title: 'Opening Remarks',
    //   presenter: 'Workshop Chairs',
    // },
    // {
    //   time: '9:30–10:00',
    //   title: 'Keynote Talk Title',
    //   presenter: 'Speaker Name',
    //   isHighlighted: true,
    // },
    // {
    //   time: '10:00–10:15',
    //   title: 'Break',
    //   presenter: '',
    // },
    // ← ADD sessions here
  ],
}

export default program
