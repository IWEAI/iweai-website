<template>
  <div class="dates">
    <h2>Welcome to IWEAI</h2>
    <p>{{ siteConfig.welcomeText }}</p>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { SITE_CONFIG_KEY } from '../../injection-keys'

const siteConfig = inject(SITE_CONFIG_KEY)!
</script>

<style scoped>
.dates {
  background: #004076;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #a1adb9;
  color: #fff;
}
.dates:hover {
  box-shadow: 0 0 20px #a1adb9;
  transition: all linear 0.3s;
  scale: 1.01;
}
h2 {
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
}
p {
  text-align: left;
}
</style>
