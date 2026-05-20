<script setup lang="ts">
import { provide } from 'vue'
import {
  SharedApp,
  SITE_CONFIG_KEY,
  IMAGES_KEY,
  NEWS_KEY,
  PROGRAM_KEY,
  COMMITTEE_KEY,
  PC_MEMBERS_KEY,
  LOCAL_KEY,
} from '@iweai/ui'
import { siteConfig } from './site.config'
import news from './content/news'
import program from './content/program'
import committee from './content/committee'
import pcMembers from './content/pcmembers'
import local from './content/local'

// ── Collect images via Vite glob ──────────────────────────────────────────────

const bgModules = import.meta.glob<string>(
  './assets/imgs/bg*.{jpg,jpeg,png}',
  { eager: true, import: 'default' }
)
const logoModules = import.meta.glob<string>(
  './assets/imgs/btm-img*.{jpg,jpeg,png}',
  { eager: true, import: 'default' }
)
const peopleModules = import.meta.glob<string>(
  './assets/imgs/people/*',
  { eager: true, import: 'default' }
)
const pastModules = import.meta.glob<string>(
  './assets/imgs/past/*',
  { eager: true, import: 'default' }
)

const carouselImages = Object.keys(bgModules)
  .sort()
  .map((k) => bgModules[k])

const orgLogos = Object.keys(logoModules)
  .sort()
  .map((k) => logoModules[k])

const people: Record<string, string> = {}
for (const [path, url] of Object.entries(peopleModules)) {
  const filename = path.split('/').pop()!.replace(/\.[^.]+$/, '')
  people[filename] = url
}

const pastPhotos = Object.keys(pastModules)
  .sort()
  .map((k) => pastModules[k])

// ── Provide data to all shared components ────────────────────────────────────

provide(SITE_CONFIG_KEY, siteConfig)
provide(NEWS_KEY, news)
provide(PROGRAM_KEY, program)
provide(COMMITTEE_KEY, committee)
provide(PC_MEMBERS_KEY, pcMembers)
provide(LOCAL_KEY, local)
provide(IMAGES_KEY, { carousel: carouselImages, people, orgLogos, pastPhotos })
</script>

<template>
  <SharedApp />
</template>
