/**
 * Programme Committee members list (shown on the PC Members page).
 * role: optional — shows in parentheses after the name, e.g. "(Co-Chair)"
 */
import type { PCMember } from '@iweai/ui'

const pcMembers: PCMember[] = [
  { name: 'Yuncheng Jiang', role: 'Co-Chair' },
  { name: 'Gang Li', role: 'Co-Chair' },
  // ← ADD more PC members here
  { name: 'PC Member Name' },
]

export default pcMembers
