<template>
  <div>
    <el-carousel :interval="2000" type="card" height="400px">
      <el-carousel-item v-for="(photo, idx) in pastPhotos" :key="idx">
        <img :src="photo" style="width: 100%; height: 100%; object-fit: cover" :alt="`Photo ${idx + 1}`" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { IMAGES_KEY } from '../../injection-keys'

const images = inject(IMAGES_KEY)!
const pastPhotos = images.pastPhotos
</script>

<style scoped>
.el-carousel__item {
  height: 400px;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
