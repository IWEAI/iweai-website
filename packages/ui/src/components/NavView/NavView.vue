<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, computed } from 'vue'
import { usePublicStore } from '../../store/public'
import { useRouter } from 'vue-router'
import { inject } from 'vue'
import { SITE_CONFIG_KEY } from '../../injection-keys'

const router = useRouter()
const publicStore = usePublicStore()
const siteConfig = inject(SITE_CONFIG_KEY)!

const activeIndex = ref('/home')
const ellipsis = ref(false)

const menuList = computed(() => {
  const items: any[] = [
    { title: 'HOME', path: '/home' },
  ]

  if (siteConfig.showKeynotes) {
    items.push({ title: 'KEYNOTES', path: '/keynotes' })
  }

  items.push(
    { title: 'PROGRAM', path: '/program' },
    {
      title: 'ORGANIZATION',
      path: '/organization',
      children: [
        { title: 'ORGANIZING COMMITTEE', path: '/organization/committee' },
        { title: 'PC MEMBERS', path: '/organization/pcmembers' },
      ],
    },
    { title: 'CALL FOR ABSTRACTS', path: '/abstracts' },
    {
      title: 'ATTENDING',
      path: '/attending',
      link: siteConfig.attendingUrl,
    },
    { title: 'LOCAL ATTRACTIONS', path: '/local' },
  )

  if (siteConfig.pastIweai.length > 0) {
    items.push({ title: 'PAST IWEAI', path: '/past' })
  }
  items.push({ title: 'PHOTO GALLERY', path: '/gallery' })

  items.push({
    title: siteConfig.pricaiLabel,
    path: '/pricai',
    link: siteConfig.pricaiUrl,
  })

  return items
})

const changeMenuItem = (item: any) => {
  if (!item.link) {
    router.push(item.index)
    publicStore.activeIndex = item.index
    sessionStorage.setItem('activeIndex', item.index)
    activeIndex.value = item.index
  }
}

const updateCollapse = () => {
  ellipsis.value = window.innerWidth < 1250
}

onMounted(() => {
  activeIndex.value = sessionStorage.getItem('activeIndex') || '/home'
  window.addEventListener('resize', updateCollapse)
  updateCollapse()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCollapse)
})
</script>

<template>
  <el-menu :default-active="activeIndex" router mode="horizontal" :ellipsis="ellipsis">
    <template v-for="(item, index) in menuList" :key="index">
      <el-menu-item
        v-if="!item.children && !item.link"
        :index="item.path"
        @click="changeMenuItem"
        class="menu-item"
      >
        <span>{{ item.title }}</span>
      </el-menu-item>

      <el-menu-item v-else-if="item.link && !item.children" :index="item.title">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </el-menu-item>

      <el-sub-menu v-else-if="item.children" :index="item.path">
        <template #title>{{ item.title }}</template>
        <el-menu-item
          v-for="(subItem, si) in item.children"
          :index="subItem.path"
          :key="si"
        >
          <a v-if="subItem.link" :href="subItem.link" target="_blank">{{ subItem.title }}</a>
          <span v-else @click="changeMenuItem">{{ subItem.title }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped>
.el-menu {
  width: 100%;
  justify-content: center;
  overflow: hidden;
}
</style>
