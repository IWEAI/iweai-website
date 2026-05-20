<template>
  <div class="container animate__animated animate__fadeIn" id="committee">
    <CommitteeCard class="common" />
  </div>
</template>

<script lang="ts" setup>
import CommitteeCard from '../../components/Org/CommitteeCard.vue'
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
