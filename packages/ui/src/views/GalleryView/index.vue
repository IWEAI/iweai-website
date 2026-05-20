<template>
  <div class="container animate__animated animate__fadeIn" id="gallery">
    <el-card>
      <h2 class="title">PHOTO GALLERY — IWEAI {{ siteConfig.year }}</h2>

      <div v-if="pastPhotos.length > 0" class="slideshow-wrap">
        <el-carousel
          :interval="3500"
          height="520px"
          indicator-position="outside"
          arrow="always"
        >
          <el-carousel-item v-for="(photo, idx) in pastPhotos" :key="idx">
            <img
              :src="photo"
              :alt="`IWEAI ${siteConfig.year} — Photo ${idx + 1}`"
              class="slide-img"
              @click="openPreview(idx)"
            />
          </el-carousel-item>
        </el-carousel>

        <p class="hint">Click any photo to enlarge</p>

        <!-- Full-screen preview -->
        <el-image-viewer
          v-if="previewVisible"
          :url-list="pastPhotos"
          :initial-index="previewIndex"
          @close="previewVisible = false"
        />
      </div>

      <div v-else class="empty">
        <el-empty description="Photos will be posted after the workshop." />
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import { SITE_CONFIG_KEY, IMAGES_KEY } from '../../injection-keys'

const siteConfig = inject(SITE_CONFIG_KEY)!
const images = inject(IMAGES_KEY)!
const pastPhotos = images.pastPhotos

const previewVisible = ref(false)
const previewIndex = ref(0)

function openPreview(idx: number) {
  previewIndex.value = idx
  previewVisible.value = true
}
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
  padding: 10px 0;
  animation-duration: 3s;
  animation-delay: 0.7s;
}
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #004076;
  text-align: center;
  margin-bottom: 24px;
}
.slideshow-wrap {
  padding: 0 4px;
}
.slide-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: zoom-in;
  background: #000;
}
.hint {
  text-align: center;
  color: #888;
  font-size: 13px;
  margin-top: 10px;
}
.empty {
  padding: 40px 0;
}
</style>
