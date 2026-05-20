<template>
  <div class="container animate__animated animate__fadeIn" id="past">
    <div v-if="hasPastPhotos">
      <el-card>
        <h2 class="title">PAST IWEAI {{ siteConfig.year }}</h2>
        <LocalPhotos class="common" />
      </el-card>
    </div>
    <div v-else>
      <el-card>
        <h2 class="title">PAST IWEAI</h2>
        <p>Photos will be available after the workshop.</p>
        <div v-if="siteConfig.pastIweai.length > 0" class="past-links">
          <p>View previous editions:</p>
          <ul>
            <li v-for="past in siteConfig.pastIweai" :key="past.year">
              <a :href="past.url" target="_blank">IWEAI {{ past.year }}</a>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue'
import LocalPhotos from '../../components/LocalAttra/LocalPhotos.vue'
import { SITE_CONFIG_KEY, IMAGES_KEY } from '../../injection-keys'

const siteConfig = inject(SITE_CONFIG_KEY)!
const images = inject(IMAGES_KEY)!
const hasPastPhotos = computed(() => images.pastPhotos.length > 0)
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
  padding: 10px 0;
  animation-duration: 3s;
  animation-delay: 0.7s;
}
.common {
  margin: 20px 0;
}
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #004076;
  text-align: center;
}
.past-links {
  margin-top: 20px;
  text-align: left;
}
.past-links a {
  color: #004076;
}
</style>
