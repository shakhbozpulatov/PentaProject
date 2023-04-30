<template>
  <div class="container">
    <TabResultsView />
    <div class="row">
      <div class="col-md-9">
        <div class="advertise-wrap">
          <div class="img-wrap">
            <img src="../assets/images/adv1.png" alt="" />
          </div>
          <div class="adv-content">
            <p class="adv-title m-0">
              Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga olib
              boradi: bo'g'inlar oldidagi barcha maketlar
            </p>
            <p class="m-0 adv-time">2 soat oldin</p>
          </div>
        </div>
        <div class="row">
          <div v-for="elem in 6" :key="elem" class="col-md-4">
            <div class="advertise-wrap adv-little mt-3">
              <div class="img-wrap little-img">
                <img src="../assets/images/adv2.png" alt="" />
              </div>
              <div class="adv-content little-content">
                <p class="adv-title little-title m-0">
                  Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                  topildi
                </p>
                <p class="m-0 adv-time little-time">2 soat oldin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <ScheduleView />
      </div>
    </div>
    <div class="section-last-news mt-5">
      <p class="m-0">So'ngi yangiliklar</p>
    </div>
    <div class="last-news mt-3">
      <div class="row">
        <div v-for="elem in 8" :key="elem" class="col-md-3">
          <router-link to="/news/2">
            <div class="news-wrapper">
              <div class="img-wrapper">
                <img src="../assets/images/adv2.png" alt="" />
              </div>
              <p class="news-title">
                Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                aytdi
              </p>
              <p class="news-content">
                Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini
                aytdi
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ScheduleView from "../components/ScheduleView.vue";
import TabResultsView from "../components/TabResultsView.vue";
import axios from "axios";

const image = ref("");
onMounted(() => {
  axios
    .get(`https://pentaproject-production.up.railway.app/api/v1/get_news_all`)
    .then((res) => {
      console.log("news", res.data);
      image.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.advertise-wrap {
  position: relative;
  .img-wrap {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 480px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .adv-content {
    position: absolute;
    bottom: 20px;
    left: 50px;
    .adv-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      color: #ffffff;
      width: 750px;
    }
    .adv-time {
      font-weight: 500;
      font-size: 14px;
      line-height: 30px;
      color: #ffffff;
    }
  }
}
.adv-little {
  .little-img {
    height: 240px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .adv-content {
    left: 20px;
    bottom: 20px;
    .little-title {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      width: 250px;
    }
    .little-time {
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      color: #ffffff;
    }
  }
}
.section-last-news {
  background: #469264;
  border-radius: 10px;
  padding: 20px 30px;
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
}
.last-news {
  .news-wrapper {
    padding: 10px;
    background: #f4f5f7;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: all 0.3s;
    img {
      width: 100%;
    }
    .news-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
      color: #000000;
      margin: 10px 0;
    }
    .news-content {
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      color: #4a4b4c;
    }
  }
  .news-wrapper:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
}
</style>
