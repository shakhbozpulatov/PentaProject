<template>
  <div>
    <div class="tabs-wrap my-3">
      <ul
        class="nav nav-pills mb-3 d-flex align-items-center gap-3"
        id="pills-tab"
        role="tablist"
      >
        <li
          v-for="(elem, index) in leagues"
          :key="index"
          class="nav-item"
          role="presentation"
        >
          <button
            class="nav-link d-flex align-items-center gap-2"
            :id="`pills-${elem.id}-tab`"
            data-bs-toggle="pill"
            :data-bs-target="`#pills-${elem.id}`"
            type="button"
            role="tab"
            :aria-controls="`pills-${elem.id}`"
            aria-selected="true"
            @click="getAllMatches(elem.id)"
          >
            <img class="mr-2" src="../assets/images/aseria.svg" alt="" />
            {{ elem.name }}
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          :id="`pills-${leagueId}`"
          role="tabpanel"
          :aria-labelledby="`pills-${leagueId}-tab`"
        >
          <div class="row">
            <div v-for="elem in matches" :key="elem" class="col-md-3">
              <MatchResultView :match="elem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import MatchResultView from "./MatchResultView.vue";
import axios from "axios";

const matches = ref([]);
const leagues = ref([]);
const leagueId = ref(0);
const getAllMatches = function (index) {
  axios
    .get(`get_matches_by_league/${index}`)
    .then((res) => {
      console.log(res.data);
      matches.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
axios
  .get(`/get_all_league`)
  .then((res) => {
    console.log("leagues", res.data);
    leagues.value = res.data;
  })
  .catch((err) => {
    console.log(err);
  });
onMounted(() => {
  axios
    .get(`/get_matches_by_league/1`)
    .then((res) => {
      console.log("matches", res.data);
      matches.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style lang="scss" scoped>
.nav-pills {
  background: #dae9e0;
  border-radius: 10px;
  .nav-link {
    background: #dae9e0;
    color: #777;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    padding: 10px;
    outline: none;
  }
  .active {
    background: #469264 !important;
    color: #fff;
  }
}
</style>
