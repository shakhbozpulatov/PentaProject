<template>
  <div class="schedule">
    <h5 class="title m-0">Jadval</h5>
    <el-select
      v-model="value"
      class="select m-2"
      placeholder="Liga..."
      size="large"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <table class="table">
      <tr class="th-row">
        <th style="padding: 0 0 0 10px">N%</th>
        <th style="padding-left: 40px">Team</th>
        <th>G</th>
        <th>PTs</th>
      </tr>
      <tr class="td-row" v-for="(elem, index) in 10" :key="index">
        <td style="padding-left: 10px">{{ index + 1 }}</td>
        <td>
          <img src="../assets/images/barsa.svg" alt="" />
          Barcelona
        </td>
        <td>13:7</td>
        <td>22</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");

const options = [
  {
    value: "0",
    label: "Seria A",
  },
  {
    value: "1",
    label: "Premier Liga",
  },
  {
    value: "2",
    label: "LaLiga",
  },
];
</script>

<style lang="scss" scoped>
.el-select {
  margin: 1px 1px 10px 1px !important;
  width: 100%;
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
  }
}
</style>
