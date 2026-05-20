<template>
  <div class="gallery-grid">
    <div
      v-for="(photo, idx) in pastPhotos"
      :key="idx"
      class="gallery-item"
      @click="openPreview(idx)"
    >
      <img :src="photo" :alt="`Photo ${idx + 1}`" class="gallery-thumb" />
      <div class="gallery-overlay">
        <el-icon :size="28" color="#fff"><ZoomIn /></el-icon>
      </div>
    </div>

    <!-- Full-screen preview -->
    <el-image-viewer
      v-if="previewVisible"
      :url-list="pastPhotos"
      :initial-index="previewIndex"
      @close="previewVisible = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import { ZoomIn } from '@element-plus/icons-vue'
import { IMAGES_KEY } from '../../injection-keys'

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
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.gallery-item {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
}
.gallery-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
}
.gallery-item:hover .gallery-thumb {
  transform: scale(1.06);
}
.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.gallery-item:hover .gallery-overlay {
  opacity: 1;
}
</style>
