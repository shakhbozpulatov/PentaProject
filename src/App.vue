<template>
  <div>
    <HeaderView />
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderView from "./components/HeaderView.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
</style>
