import type { SiteConfig } from '@iweai/ui'

export const siteConfig: SiteConfig = {
  year: 2025,
  edition: '2nd',
  location: { city: 'Wellington', country: 'New Zealand' },
  dates: '17-18 November 2025',
  email: 'iweai2025@outlook.com',
  pricaiUrl: 'https://2025.pricai.org/',
  pricaiLabel: 'PRICAI2025',
  attendingUrl: 'https://2025.pricai.org/index.php',
  welcomeText:
    'The 2nd International Workshop on Educational Artificial Intelligence (IWEAI 2025) aims to bring together researchers and practitioners from academia and industry to explore the impact of artificial intelligence (AI) in reshaping the practice of education. We will explore the use of AI models (e.g., large language models, decision making models, user profile models) in instructional systems, as well as discuss how humans (both students and teachers) may effectively interact with AI agents, and best leverage AI\'s power for learning and teaching. Through a mixed schedule of keynote talks, participant presentations, and panel discussions, our workshop provides attendees with a special opportunity to discover the potential of AI in the area of education. We will conduct a broad discussion of applying AI technology in education as well as the challenges and issues that come along with such applications.',
  importantDates: {
    abstractDeadline: 'August 29th, 2025',
    acceptance: 'September 10th, 2025',
    cameraReady: 'September 20th, 2025',
    workshop: 'November 17-18th, 2025',
  },
  showKeynotes: false,
  showProgram: false,
  pastIweai: [
    { year: 2024, url: 'https://iweai.github.io/2024/' },
  ],
  carouselImageFiles: ['bg.jpg', 'bg2.jpeg', 'bg3.jpg'],
  supportingOrgs: [
    { name: 'SCNU', logoFile: 'btm-img1.png' },
    { name: 'Deakin', logoFile: 'btm-img2.png' },
  ],
}
