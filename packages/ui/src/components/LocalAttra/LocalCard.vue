<template>
  <div>
    <el-card class="card">
      <h2 class="title">LOCAL ATTRACTIONS</h2>
      <p v-if="local.intro">{{ local.intro }}</p>

      <template v-for="section in local.sections" :key="section.heading">
        <h2 v-if="section.level === 'h2'">{{ section.heading }}</h2>
        <p v-else-if="section.level === 'p'"><strong>{{ section.heading }}</strong></p>
        <h3 v-else>{{ section.heading }}</h3>

        <div>
          <div
            v-for="item in section.items"
            :key="item.name"
            class="text-block"
          >
            <strong>{{ item.name }} - </strong>{{ item.description }}
          </div>
        </div>
      </template>

      <div v-if="local.practicalTips" class="text-block">
        <h3>Practical Tips</h3>
        <ul>
          <li v-for="(tip, idx) in local.practicalTips" :key="idx">{{ tip }}</li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { LOCAL_KEY } from '../../injection-keys'

const local = inject(LOCAL_KEY)!
</script>

<style lang="less" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #004076;
  text-align: center;
}
strong,
h3 {
  color: #004076;
}
h2,
p {
  text-align: left;
}
div {
  list-style-type: none;
  text-align: left;
  padding-inline-start: 0;
}
ul {
  padding-left: 20px;
}
.text-block {
  margin-bottom: 10px;
  width: 80%;
}
</style>
