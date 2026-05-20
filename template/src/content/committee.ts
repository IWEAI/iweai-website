/**
 * Organizing committee data.
 *
 * photoKey: the filename (without extension) of the person's photo in
 *           src/assets/imgs/people/.  Leave as empty string '' if no photo.
 *
 * Example photo file:  src/assets/imgs/people/JohnSmith.jpg
 * Corresponding key:   photoKey: 'JohnSmith'
 */
import type { CommitteeGroup } from '@iweai/ui'

const committee: CommitteeGroup[] = [
  {
    role: 'Workshop Chairs',
    members: [
      // ← CHANGE or add members
      { name: 'Yuncheng Jiang', affiliation: 'South China Normal University, China', photoKey: 'Yunchengjiang' },
      { name: 'Gang Li', affiliation: 'Deakin University, Australia', photoKey: 'GangLi' },
    ],
  },
  {
    role: 'Program Chairs',
    members: [
      // ← CHANGE or add members
      { name: 'Program Chair Name', affiliation: 'University, Country', photoKey: '' },
    ],
  },
  {
    role: 'Publicity Chairs',
    members: [
      // ← CHANGE or add members
      { name: 'Lihua Cai', affiliation: 'South China Normal University, China', photoKey: 'LihuaCai' },
      { name: 'Wenjun Ma', affiliation: 'South China Normal University, China', photoKey: 'WenjunMa' },
      { name: 'Jieyu Zhan', affiliation: 'South China Normal University, China', photoKey: 'JieyuZhan' },
    ],
  },
  {
    role: 'Advisory Board',
    members: [
      // ← CHANGE or add members
      { name: 'Weiru Liu', affiliation: 'University of Bristol, United Kingdom', photoKey: 'WeiruLiu' },
      { name: 'Laura E. Barnes', affiliation: 'University of Virginia, United States', photoKey: 'LauraBarnes' },
      { name: 'Aladdin Ayesh', affiliation: 'University of Aberdeen, United Kingdom', photoKey: 'Aladdin' },
      { name: 'Mengchi Liu', affiliation: 'Carleton University, Canada', photoKey: 'MengchiLiu' },
      { name: 'Yong Tang', affiliation: 'South China Normal University, China', photoKey: 'YongTang' },
    ],
  },
]

export default committee
