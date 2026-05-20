<template>
  <div>
    <el-card>
      <h2 class="title">ORGANIZING COMMITTEE</h2>
      <div class="mx-auto text-center">
        <template v-for="group in committee" :key="group.role">
          <div class="col-lg-12">
            <h3>{{ group.role }}</h3>
          </div>
          <div class="row committee-sub mx-auto">
            <div
              v-for="member in group.members"
              :key="member.name"
              class="committee-people"
            >
              <div class="img-box">
                <img
                  v-if="member.photoKey && peopleImgs[member.photoKey]"
                  :src="peopleImgs[member.photoKey]"
                  class="img-thumbnail rounded-circle"
                  :alt="member.name"
                />
                <div v-else class="placeholder-avatar"></div>
              </div>
              <br /><strong>{{ member.name }}</strong>
              <br />{{ member.affiliation }}
            </div>
          </div>
        </template>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { COMMITTEE_KEY, IMAGES_KEY } from '../../injection-keys'

const committee = inject(COMMITTEE_KEY)!
const images = inject(IMAGES_KEY)!
const peopleImgs = images.people
</script>

<style lang="less" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #04162c;
  text-align: center;
}
strong {
  border-bottom: solid 2px #004076;
}
.committee-sub {
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: #004076;
}
.committee-people {
  margin-top: 20px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 1268px) {
  .committee-people {
    width: 50%;
  }
}
@media screen and (max-width: 400px) {
  .committee-people {
    width: 80%;
  }
}
.img-box {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: solid 2px #004076;
  background: #d7d7d7;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.placeholder-avatar {
  width: 100%;
  height: 100%;
  background: #b0c4d8;
}
</style>
