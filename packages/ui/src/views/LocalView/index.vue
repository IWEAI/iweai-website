<template>
  <div class="container animate__animated animate__fadeIn" id="local">
    <LocalCard class="common" />
  </div>
</template>

<script lang="ts" setup>
import LocalCard from '../../components/LocalAttra/LocalCard.vue'
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
</style>
