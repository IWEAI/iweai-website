<template>
  <div>
    <el-card>
      <h2>PROGRAM</h2>
      <table class="table table-bordered table-hover mx-auto">
        <thead>
          <tr class="text-center">
            <th colspan="3">
              <h2>{{ program.workshopLabel }}</h2>
              <h4>{{ program.date }}</h4>
            </th>
          </tr>
          <tr class="table-secondary">
            <th width="20%">Time ({{ program.timezone }})</th>
            <th width="60%">Talk Title</th>
            <th width="20%">Presenter(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(session, idx) in program.sessions"
            :key="idx"
            :class="{ 'table-secondary': session.isHighlighted }"
          >
            <td>{{ session.time }}</td>
            <td>{{ session.title }}</td>
            <td>{{ session.presenter }}</td>
          </tr>
        </tbody>
      </table>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { PROGRAM_KEY } from '../../injection-keys'

const program = inject(PROGRAM_KEY)!
</script>

<style scoped>
h2 {
  padding-bottom: 10px;
  border-bottom: 1px solid #04162c;
}
table.table-bordered {
  border: 2px solid #1b2e60;
  margin-top: 20px;
  width: 100%;
}
table.table-bordered > thead > tr > th {
  border: 2px solid #1b2e60;
  padding: 8px 12px;
}
table.table-bordered > tbody > tr > td {
  border: 2px solid #1b2e60;
  line-height: 50px;
  font-size: 18px;
  padding: 0 20px;
}
tr:hover {
  background-color: rgba(180, 214, 255, 0.3);
}
</style>
