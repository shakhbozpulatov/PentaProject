<template>
  <div>
    <div class="tabs-wrap my-3">
      <ul
        class="nav nav-pills mb-3 d-flex align-items-center gap-3"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active d-flex align-items-center gap-2"
            id="pills-aseria-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-aseria"
            type="button"
            role="tab"
            aria-controls="pills-aseria"
            aria-selected="true"
          >
            <img class="mr-2" src="../assets/images/aseria.svg" alt="" />
            Italiya. Seriya A
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link d-flex align-items-center gap-2"
            id="pills-premier-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-premier"
            type="button"
            role="tab"
            aria-controls="pills-premier"
            aria-selected="false"
          >
            <img class="mr-2" src="../assets/images/premier.svg" alt="" />
            Premier Liga
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link d-flex align-items-center gap-2"
            id="pills-laliga-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-laliga"
            type="button"
            role="tab"
            aria-controls="pills-laliga"
            aria-selected="false"
          >
            <img src="../assets/images/laliga.svg" alt="" />
            LaLiga
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link d-flex align-items-center gap-2"
            id="pills-bundesliga-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-bundesliga"
            type="button"
            role="tab"
            aria-controls="pills-bundesliga"
            aria-selected="true"
          >
            <img class="mr-2" src="../assets/images/bundesliga.svg" alt="" />
            Bundesliga
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link d-flex align-items-center gap-2"
            id="pills-liga1-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-liga1"
            type="button"
            role="tab"
            aria-controls="pills-liga1"
            aria-selected="true"
          >
            <img class="mr-2" src="../assets/images/aseria.svg" alt="" />
            Ligue 1
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-aseria"
          role="tabpanel"
          aria-labelledby="pills-aseria-tab"
        >
          <div class="row">
            <div v-for="elem in 4" :key="elem" class="col-md-3">
              <MatchResultView />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-premier"
          role="tabpanel"
          aria-labelledby="pills-premier-tab"
        >
          <div class="row">
            <div v-for="elem in 8" :key="elem" class="col-md-3">
              <MatchResultView />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-laliga"
          role="tabpanel"
          aria-labelledby="pills-laliga-tab"
        >
          <div class="row">
            <div v-for="elem in 4" :key="elem" class="col-md-3">
              <MatchResultView />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade show"
          id="pills-bundesliga"
          role="tabpanel"
          aria-labelledby="pills-bundesliga-tab"
        >
          <div class="row">
            <div v-for="elem in 8" :key="elem" class="col-md-3">
              <MatchResultView />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade show"
          id="pills-liga1"
          role="tabpanel"
          aria-labelledby="pills-liga1-tab"
        >
          <div class="row">
            <div v-for="elem in 4" :key="elem" class="col-md-3">
              <MatchResultView />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MatchResultView from "./MatchResultView.vue";
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
