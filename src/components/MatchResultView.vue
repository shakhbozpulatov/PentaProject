<template>
  <div class="mb-3">
    <div class="match-result d-flex align-items-center gap-2">
      <div class="wrap-match d-flex align-items-center gap-2">
        <img src="../assets/images/barsa.svg" alt="" />
        <p class="m-0 ">Barcelona</p>
      </div>
      <div class="d-flex align-items-center gap-2">
        <p class="m-0 ">3</p>
        <p class="m-0">:</p>
        <p class="m-0 fw-bolder">4</p>
      </div>
      <div class="wrap-match d-flex align-items-center gap-2">
        <p class="m-0 fw-bolder">Liverpool</p>
        <img src="../assets/images/livurpool.svg" alt="" />
      </div>
    </div>
    <div class="time-wrap d-flex align-items-center gap-2">11.11.2021 <p class="m-0 fw-bolder">23:59</p></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.match-result {
  background: #f4f5f7;
  width: 100%;
  padding: 10px 20px !important;
  border-radius: 10px 10px 10px 0px;
}
.time-wrap {
  width: 116px;
  background: #ffffff;
  border: 1px solid #f4f5f7;
  padding: 4px 12px;
  border-radius: 0 0 10px 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}
</style>
