<template>
  <div class="schedule">
    <h5 class="title m-0">Jadval</h5>
    <el-select
      v-model="team"
      class="select m-2"
      placeholder="Liga..."
      size="large"
    >
      <el-option
        v-for="item in leagues"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      />
    </el-select>
    <table class="table">
      <tr class="th-row">
        <th style="padding: 0 0 0 10px; width: 20px">N%</th>
        <th style="padding-left: 40px">Team</th>
        <th class="td-center">G</th>
        <th class="td-center">PTs</th>
      </tr>
      <tr class="td-row" v-for="(elem, index) in teams" :key="index">
        <td style="padding-left: 10px">{{ index + 1 }}</td>
        <td class="d-flex align-items-center">
          <div class="img-wrap">
            <img
              :src="`https://pentaproject-production.up.railway.app${elem.logo}`"
              alt=""
            />
          </div>
          <p class="team-name m-0">{{ elem.name }}</p>
        </td>
        <td class="td-center">{{ elem.goals_scored }}:{{ elem.goals_lost }}</td>
        <td class="td-center">{{ elem.score }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const team = ref("");
const teams = ref([]);
const leagues = ref([]);
onMounted(() => {
  axios
    .get(`/get_all_league`)
    .then((res) => {
      console.log("leagues2", res.data);
      leagues.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  axios
    .get(`/sort_teams/1`)
    .then((res) => {
      console.log("asd", res.data);
      teams.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style lang="scss" scoped>
.el-select {
  margin: 1px 1px 10px 1px !important;
  width: 100%;
}
.td-center {
  text-align: center;
}
.img-wrap {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 0px;
    border-radius: 50%;
  }
}
.schedule {
  background: #f4f5f7;
  border-radius: 10px;
  width: 100%;
  padding: 10px 4px;
  .title {
    padding: 10px 12px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
  }
  .table {
    width: 100%;
    border-collapse: collapse;

    .td-row:nth-child(odd) {
      background: #ffffff;
      border-radius: 6px;
      margin: 0 2px;
    }
    .td-row {
      .team-name {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}
</style>
