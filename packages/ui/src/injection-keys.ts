import type { InjectionKey } from 'vue'
import type {
  SiteConfig,
  NewsItem,
  ProgramData,
  CommitteeGroup,
  PCMember,
  LocalData,
  InjectedImages,
} from './types'

export const SITE_CONFIG_KEY: InjectionKey<SiteConfig> = Symbol('siteConfig')
export const IMAGES_KEY: InjectionKey<InjectedImages> = Symbol('images')
export const NEWS_KEY: InjectionKey<NewsItem[]> = Symbol('news')
export const PROGRAM_KEY: InjectionKey<ProgramData> = Symbol('program')
export const COMMITTEE_KEY: InjectionKey<CommitteeGroup[]> = Symbol('committee')
export const PC_MEMBERS_KEY: InjectionKey<PCMember[]> = Symbol('pcMembers')
export const LOCAL_KEY: InjectionKey<LocalData> = Symbol('local')
