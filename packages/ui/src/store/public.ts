import { defineStore } from 'pinia'
import { Names } from './store-name'

export const usePublicStore = defineStore(Names.PUBLIC, {
  state: () => ({
    activeIndex: sessionStorage.getItem('activeIndex') || '/home',
  }),
})
