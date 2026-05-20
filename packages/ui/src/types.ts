// ─── Site Configuration ──────────────────────────────────────────────────────

export interface ImportantDates {
  abstractDeadline: string
  acceptance: string
  cameraReady: string
  workshop: string
  note?: string
}

export interface PastYear {
  year: number
  /** External URL (e.g. https://iweai.github.io/2024/). Provide for all archived years. */
  url: string
}

export interface SupportingOrg {
  name: string
  /** Image file name relative to assets/imgs/ (e.g. 'btm-img1.png') */
  logoFile: string
}

export interface SiteConfig {
  year: number
  /** e.g. "1st", "2nd", "3rd" */
  edition: string
  location: { city: string; country: string }
  /** Display string for hero, e.g. "17-18 November 2025" */
  dates: string
  email: string
  pricaiUrl: string
  /** Label shown in nav, e.g. "PRICAI2025" */
  pricaiLabel: string
  attendingUrl: string
  /** Full welcome paragraph text shown on Home page */
  welcomeText: string
  importantDates: ImportantDates
  /** Whether Keynotes page shows in navigation */
  showKeynotes: boolean
  /** When false, Program page shows TBD placeholder */
  showProgram: boolean
  /**
   * All past IWEAI years (not including the current year).
   * These appear as external links in the "PAST IWEAI" nav submenu.
   */
  pastIweai: PastYear[]
  /** File names of carousel backgrounds, e.g. ["bg.jpg","bg2.jpeg","bg3.jpg"] */
  carouselImageFiles: string[]
  /** Supporting organisation logos */
  supportingOrgs: SupportingOrg[]
}

// ─── News ────────────────────────────────────────────────────────────────────

export interface NewsItem {
  date: string
  text: string
}

// ─── Program ─────────────────────────────────────────────────────────────────

export interface ProgramSession {
  time: string
  title: string
  presenter: string
  /** Style this row differently (e.g. break rows) */
  isHighlighted?: boolean
}

export interface ProgramData {
  /** Workshop edition label shown in table header, e.g. "The 1st International Workshop..." */
  workshopLabel: string
  date: string
  timezone: string
  sessions: ProgramSession[]
}

// ─── Organisation ────────────────────────────────────────────────────────────

export interface CommitteeMember {
  name: string
  affiliation: string
  /**
   * File name (without extension) matching a key in the injected people images,
   * e.g. "Yunchengjiang", "GangLi".  Leave empty string if no photo available.
   */
  photoKey: string
}

export interface CommitteeGroup {
  role: string
  members: CommitteeMember[]
}

export interface PCMember {
  name: string
  /** e.g. "Co-Chair" */
  role?: string
}

// ─── Local Attractions ───────────────────────────────────────────────────────

export interface LocalItem {
  name: string
  description: string
}

export interface LocalSection {
  heading: string
  /** Heading level – defaults to 'h3' */
  level?: 'h2' | 'h3' | 'p'
  items: LocalItem[]
}

export interface LocalData {
  intro?: string
  sections: LocalSection[]
  practicalTips?: string[]
}

// ─── Injected Images ─────────────────────────────────────────────────────────

export interface InjectedImages {
  /** Ordered array of carousel background image URLs */
  carousel: string[]
  /** Map of filename-without-extension → resolved URL, e.g. { "Yunchengjiang": "/.../hash.jpg" } */
  people: Record<string, string>
  /** Ordered array of supporting-org logo URLs */
  orgLogos: string[]
  /** Ordered array of past-event photo URLs (shown on Past IWEAI page) */
  pastPhotos: string[]
}
