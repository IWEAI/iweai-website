import type { SiteConfig } from '@iweai/ui'

export const siteConfig: SiteConfig = {
  year: 2024,
  edition: '1st',
  location: { city: 'Kyoto', country: 'Japan' },
  dates: '18-19 November 2024',
  email: 'iweai2024@outlook.com',
  pricaiUrl: 'https://2024.pricai.org/',
  pricaiLabel: 'PRICAI2024',
  attendingUrl: 'https://2024.pricai.org/index.php/attending',
  welcomeText:
    'The first International Workshop on Educational Artificial Intelligence (IWEAI 2024) aims to bring together researchers and practitioners from academia and industry to explore the impact of artificial intelligence (AI) in reshaping the practice of education. We will explore the use of AI models (e.g., large language models, decision making models, user profile models) in instructional systems, as well as discuss how humans (both students and teachers) may effectively interact with AI agents, and best leverage AI\'s power for learning and teaching. Through a mixed schedule of keynote talks, participant presentations, and panel discussions, our workshop provides attendees with a special opportunity to discover the potential of AI in the area of education. We will conduct a broad discussion of applying AI technology in education as well as the challenges and issues that come along with such applications.',
  importantDates: {
    abstractDeadline: 'August 6, 2024',
    acceptance: 'August 13, 2024',
    cameraReady: 'September 4, 2024',
    workshop: 'November 18-19, 2024',
    note: 'All deadlines are at the end of the day specified, anywhere on Earth (UTC-12).',
  },
  showKeynotes: false,
  showProgram: true,
  pastIweai: [],
  carouselImageFiles: ['bg.jpg', 'bg1.jpg'],
  supportingOrgs: [
    { name: 'SCNU', logoFile: 'btm-img1.png' },
    { name: 'Deakin', logoFile: 'btm-img2.png' },
    { name: 'Supporting Org 3', logoFile: 'btm-img3.png' },
  ],
}
