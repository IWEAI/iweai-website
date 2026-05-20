<template>
  <div class="container animate__animated animate__fadeIn" id="past">
    <el-card>
      <h2 class="title">PAST IWEAI</h2>

      <div v-if="siteConfig.pastIweai.length > 0" class="past-list">
        <el-row :gutter="20">
          <el-col
            v-for="past in siteConfig.pastIweai"
            :key="past.year"
            :xs="24" :sm="12" :md="8"
          >
            <a :href="past.url" target="_blank" class="past-card">
              <el-card shadow="hover" class="year-card">
                <div class="year-number">IWEAI {{ past.year }}</div>
                <div class="visit-label">Visit site →</div>
              </el-card>
            </a>
          </el-col>
        </el-row>
      </div>

      <div v-else class="empty-note">
        <p>No previous editions yet.</p>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { SITE_CONFIG_KEY } from '../../injection-keys'

const siteConfig = inject(SITE_CONFIG_KEY)!
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
.past-list {
  margin-top: 8px;
}
.past-card {
  text-decoration: none;
  display: block;
  margin-bottom: 16px;
}
.year-card {
  text-align: center;
  padding: 12px 0;
}
.year-number {
  font-size: 22px;
  font-weight: 700;
  color: #004076;
  margin-bottom: 6px;
}
.visit-label {
  font-size: 13px;
  color: #888;
}
.empty-note {
  color: #666;
  padding: 20px 0;
}
</style>
