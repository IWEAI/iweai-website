import type { ProgramData } from '@iweai/ui'

const program: ProgramData = {
  workshopLabel: 'The 3rd International Workshop on Educational Artificial Intelligence (IWEAI 2026)',
  date: '17 November 2026',
  timezone: 'UTC+8',
  sessions: [
    {
      time: '8:30 – 9:00',
      title: 'Rethinking Assessment in Computer Science in the Era of GenAI: The Lincoln University Experience',
      presenter: 'Patricia Anthony (Lincoln University)',
    },
    {
      time: '9:00 – 9:30',
      title: 'Personalized Knowledge Recommendation: From Exercise Recommendation and Learning Path Planning to Unified Evaluation',
      presenter: 'Quanlong Guan (Jinan University)',
    },
    {
      time: '9:30 – 10:00',
      title: 'Federated Graph Learning for AI in Education',
      presenter: 'Di Wu (Sun Yat-sen University)',
    },
    {
      time: '10:00 – 10:10',
      title: 'Break',
      presenter: '',
      isHighlighted: true,
    },
    {
      time: '10:10 – 10:40',
      title: 'From Knowledge Tracing to Exercise Recommendation: Towards Personalized Learning',
      presenter: 'Yubing Li (South China Normal University)',
    },
    {
      time: '10:40 – 11:10',
      title: 'Bridging Knowledge and Self-Awareness: Tracing What Students Know and What They Think They Know',
      presenter: 'Gen Li (Chubu University)',
    },
    {
      time: '11:10 – 11:25',
      title: 'Break and Panel Setup',
      presenter: '',
      isHighlighted: true,
    },
    {
      time: '11:25 – 12:10',
      title: 'Panel Discussion: Are we building AI that makes students better, or just makes their work look better?',
      presenter: 'Sankalp Khanna (CSIRO, moderator), Abdul Sattar (Griffith University), Patricia Anthony (Lincoln University), Gen Li (Chubu University), Chen Li (Osaka University)',
    },
  ],
}

export default program
