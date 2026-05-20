import { createRouter, createWebHistory } from 'vue-router'

/**
 * Creates the shared year-site router.
 * @param base  The deployment base path, e.g. "/2026/"
 */
export function createYearRouter(base: string) {
  return createRouter({
    history: createWebHistory(base),
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView/index.vue'),
      },
      {
        path: '/keynotes',
        name: 'keynotes',
        component: () => import('../views/KeyNotes/index.vue'),
      },
      {
        path: '/program',
        name: 'program',
        component: () => import('../views/ProgramView/index.vue'),
      },
      {
        path: '/organization',
        name: 'organization',
        redirect: '/organization/committee',
        children: [
          {
            path: '/organization/committee',
            name: 'committee',
            component: () => import('../views/OrgView/Committee.vue'),
          },
          {
            path: '/organization/pcmembers',
            name: 'pcmembers',
            component: () => import('../views/OrgView/PCMembers.vue'),
          },
        ],
      },
      {
        path: '/abstracts',
        name: 'abstracts',
        component: () => import('../views/PaperView/index.vue'),
      },
      {
        path: '/local',
        name: 'local',
        component: () => import('../views/LocalView/index.vue'),
      },
      {
        path: '/past',
        name: 'past',
        component: () => import('../views/PastView/index.vue'),
      },
    ],
  })
}
