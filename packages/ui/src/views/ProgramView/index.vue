<template>
  <div class="program-container animate__animated animate__fadeIn" id="program">
    <ProgramCard v-if="siteConfig.showProgram" class="common" />
    <TBDCard v-else class="common" />
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import ProgramCard from '../../components/Program/ProgramCard.vue'
import TBDCard from '../../components/TBDView/TBDCard.vue'
import { SITE_CONFIG_KEY } from '../../injection-keys'

const siteConfig = inject(SITE_CONFIG_KEY)!
</script>

<style scoped>
.program-container {
  width: 80%;
  margin: auto;
  padding: 10px 0;
  animation-duration: 3s;
  animation-delay: 0.7s;
}
.common {
  margin: 20px 0;
}
</style>
