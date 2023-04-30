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
          <div v-for="elem in news" :key="elem" class="col-md-4">
            <router-link :to="`/news/${elem.id}`">
              <div class="advertise-wrap adv-little mt-3">
                <div class="img-wrap little-img">
                  <img
                    :src="`https://pentaproject-production.up.railway.app${elem.image}`"
                    alt=""
                  />
                </div>
                <div class="adv-content little-content">
                  <p class="adv-title little-title m-0">
                    {{ elem.title }}
                  </p>
                  <p class="m-0 adv-time little-time">2 soat oldin</p>
                </div>
              </div>
            </router-link>
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
        <div v-for="elem in news" :key="elem" class="col-md-3">
          <router-link :to="`/news/${elem.id}`">
            <div class="news-wrapper">
              <div class="img-wrapper">
                <img
                  :src="`https://pentaproject-production.up.railway.app${elem.image}`"
                  alt=""
                />
              </div>
              <p class="news-title">
                {{ elem.title }}
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

const news = ref([]);
onMounted(() => {
  axios
    .get(`https://pentaproject-production.up.railway.app/api/v1/get_news_all`)
    .then((res) => {
      console.log("news", res.data);
      news.value = res.data;
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
    height: 360px;
    padding: 10px;
    background: #f4f5f7;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: all 0.3s;
    overflow: hidden;
    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
    }
    .news-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
      color: #000000;
      margin: 10px 0;
    }
  }
  .news-wrapper:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
}
</style>
