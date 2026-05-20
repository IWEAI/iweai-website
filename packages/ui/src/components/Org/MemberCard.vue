<template>
  <div>
    <el-card>
      <h2 class="title">PC MEMBERS</h2>
      <div class="mx-auto">
        <div class="text-center animate__animated animate__backInDown">
          <div
            v-for="member in pcMembers"
            :key="member.name"
            class="col-md-6"
            style="padding: 10px"
          >
            <b>{{ member.name }}<span v-if="member.role"> ({{ member.role }})</span></b>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { PC_MEMBERS_KEY } from '../../injection-keys'

const pcMembers = inject(PC_MEMBERS_KEY)!
</script>

<style lang="less" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #004076;
  text-align: center;
}
.text-center {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-content: center;
  justify-content: center;
  animation-delay: 0.5s;
}
.col-md-6 {
  cursor: pointer;
  width: 40%;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px #004076;
  background: #004076;
  color: #fff;
}
.col-md-6:hover {
  transform: scale(1.02);
  transition: ease-in-out 0.2s;
}
</style>
