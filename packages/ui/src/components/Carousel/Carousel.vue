<template>
  <div class="carousel-container">
    <el-carousel height="calc(100vh - 60px)" arrow="always">
      <el-carousel-item v-for="(img, idx) in carouselImages" :key="idx">
        <img class="img" :src="img" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="overlay">
      <div class="welcome-text">
        <h1 class="animate__animated animate__fadeInDown">
          IWEAI {{ siteConfig.year }}：The {{ siteConfig.edition }} International Workshop on
          Educational Artificial Intelligence
        </h1>
        <h2 class="animate__animated animate__fadeInUp">
          {{ siteConfig.location.city }}, {{ siteConfig.location.country }}
        </h2>
        <h2 class="animate__animated animate__fadeInUp">
          {{ siteConfig.dates }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { SITE_CONFIG_KEY, IMAGES_KEY } from '../../injection-keys'

const siteConfig = inject(SITE_CONFIG_KEY)!
const images = inject(IMAGES_KEY)!
const carouselImages = images.carousel
</script>

<style scoped>
.carousel-container {
  height: calc(100vh - 60px);
}

.img {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  min-width: 100%;
  width: 100% !important;
  object-fit: cover;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 15%;
  left: 0;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
}

.welcome-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 57, 115, 0.5);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
