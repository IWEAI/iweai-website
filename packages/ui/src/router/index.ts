import { createRouter, createWebHistory } from 'vue-router'

const SPA_PATH_KEY = 'iweai-spa-path'

/**
 * GitHub Pages serves the site-root 404.html for a direct visit to a client route.
 * That page stores the path and returns here; put the real URL back before the
 * router reads window.location.
 */
function restoreDirectLink(base: string) {
  if (typeof sessionStorage === 'undefined') return
  const yearMatch = base.match(/\/(20\d{2})\/?$/)
  if (!yearMatch) return
  const year = yearMatch[1]

  let raw: string | null
  try {
    raw = sessionStorage.getItem(SPA_PATH_KEY)
  } catch {
    return
  }
  if (!raw) return

  let data: { year?: string; path?: string }
  try {
    data = JSON.parse(raw)
  } catch {
    return
  }
  if (data.year !== year || typeof data.path !== 'string') return
  if (!data.path.startsWith('/') || data.path.startsWith('//')) return

  try {
    sessionStorage.removeItem(SPA_PATH_KEY)
  } catch {
    return
  }

  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  const target = normalizedBase + data.path
  const current = window.location.pathname + window.location.search + window.location.hash
  if (current !== target) {
    history.replaceState(window.history.state, '', target)
  }
}

/**
 * Creates the shared year-site router.
 * @param base  The deployment base path, e.g. "/2026/"
 */
export function createYearRouter(base: string) {
  restoreDirectLink(base)
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
      {
        path: '/gallery',
        name: 'gallery',
        component: () => import('../views/GalleryView/index.vue'),
      },
    ],
  })
}
