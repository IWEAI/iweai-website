<template>
  <div class="dates">
    <h2>Important Dates</h2>
    <p class="bold">Abstract Submission Deadline</p>
    <p>{{ d.abstractDeadline }}</p>
    <p class="bold">Acceptance Notification</p>
    <p>{{ d.acceptance }}</p>
    <p class="bold">Camera ready deadline</p>
    <p>{{ d.cameraReady }}</p>
    <p class="bold">Workshop Date</p>
    <p>{{ d.workshop }}</p>
    <p v-if="d.note" class="bold">{{ d.note }}</p>
    <p v-else class="bold">All deadlines are at the end of the day specified, anywhere on earth.</p>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { SITE_CONFIG_KEY } from '../../injection-keys'

const siteConfig = inject(SITE_CONFIG_KEY)!
const d = siteConfig.importantDates
</script>

<style scoped>
.dates {
  background: #004076;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #a1adb9;
  color: #fff;
  margin: 20px 0;
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
.bold {
  font-weight: bold;
}
p {
  text-align: left;
}
</style>
