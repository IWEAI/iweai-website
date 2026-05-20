<script setup lang="ts">
import NavView from './NavView/NavView.vue'
import Carousel from './Carousel/Carousel.vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { IMAGES_KEY } from '../injection-keys'

const router = useRouter()
const images = inject(IMAGES_KEY)!

router.afterEach((to) => {
  const carouselHeight = document.querySelector('.carousel')?.scrollHeight
  if (to.path !== '/home' && carouselHeight) {
    window.scrollTo({
      top: carouselHeight + 60,
      behavior: 'smooth',
    })
  }
})
</script>

<template>
  <div id="app">
    <el-affix :offset="0">
      <NavView class="nav" />
    </el-affix>
    <Carousel class="carousel" />
    <router-view />
    <div class="footer-row">
      <div class="footer-inner">
        <el-row justify="center" align="middle">
          <el-col :xs="13" :sm="13" :md="8" :lg="4" :xl="4">
            <h2>SUPPORTING ORGANIZATIONS</h2>
          </el-col>
          <el-col :xs="13" :sm="13" :md="16" :lg="20" :xl="20">
            <div class="logos">
              <img
                v-for="(logo, idx) in images.orgLogos"
                :key="idx"
                :src="logo"
                alt="Supporting organization"
              />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.nav {
  width: 100%;
  height: 60px;
  color: #fff;
}
.carousel {
  width: 100%;
}
.footer-row {
  min-height: 120px;
  height: auto;
  background: #fff;
  margin: auto;
  align-content: center;
}
.footer-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h2 {
    color: #004076;
  }
}
.logos {
  height: 55px;
  img {
    height: 100%;
    margin: 0 20px;
  }
}
</style>
