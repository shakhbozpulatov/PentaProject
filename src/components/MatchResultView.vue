<template>
  <div class="mb-3">
    <div class="match-result d-flex align-items-center gap-2">
      <div class="wrap-match d-flex align-items-center gap-2">
        <p class="m-0">{{ props.match.name1 }}</p>
      </div>
      <div class="d-flex align-items-center gap-2">
        <p class="m-0">{{ props.match.score1 }}</p>
        <p class="m-0">:</p>
        <p class="m-0">{{ props.match.score2 }}</p>
      </div>
      <div class="wrap-match d-flex align-items-center gap-2">
        <p class="m-0">{{ props.match.name2 }}</p>
      </div>
    </div>
    <div class="time-wrap d-flex align-items-center gap-2">
      {{ props.match.date }}
      <p class="m-0 fw-bolder">23:59</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  match: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.match-result {
  background: #f4f5f7;
  width: 100%;
  padding: 10px 20px !important;
  border-radius: 10px 10px 10px 0px;
  max-width: 360px;
}
.time-wrap {
  width: 150px;
  background: #ffffff;
  border: 1px solid #f4f5f7;
  padding: 4px 12px;
  border-radius: 0 0 10px 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}
</style>
