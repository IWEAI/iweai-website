<template>
  <div class="dates">
    <h2>News</h2>
    <ul>
      <li v-for="(item, idx) in news" :key="idx">
        <span class="date">{{ item.date }}:</span> {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { NEWS_KEY } from '../../injection-keys'

const news = inject(NEWS_KEY)!
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
ul {
  list-style-type: none;
  text-align: left;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
}
li {
  padding: 10px 0;
}
.date {
  font-weight: bold;
}
</style>
