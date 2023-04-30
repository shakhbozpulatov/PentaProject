<template>
  <div class="container">
    <div class="news-wrap">
      <p class="news-time m-0">{{ newsItem.date }}</p>
      <h5 class="news-title">{{ newsItem.title }}</h5>
      <div class="row">
        <div class="col-md-8">
          <div class="img-wrap">
            <img
              :src="`https://pentaproject-production.up.railway.app${newsItem.image}`"
              alt=""
            />
          </div>
          <p class="news-content">{{ newsItem.text }}</p>
        </div>
        <div class="col-md-4">
          <div class="other-news">
            <p class="main-text">Asosiy</p>
            <div v-for="(elem, index) in news" :key="index">
              <p class="title-news">{{ elem.title }}</p>
              <p class="time-news">{{ elem.date }}</p>
              <hr />
            </div>
          </div>
        </div>
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
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const newsItem = ref({});
const news = ref([]);
onMounted(() => {
  axios
    .get(`/get_news_by_id/${route.params.id}`)
    .then((res) => {
      console.log(res.data);
      newsItem.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
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
.news-wrap {
  padding: 20px 0;
  .news-time {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #333333;
  }
  .news-title {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #000000;
    margin: 10px 0 30px;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 450px;
    border-radius: 10px;
  }
  .news-content {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin: 20px 0;
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
.other-news {
  padding: 20px;
  background: #f4f5f7;
  .title-news {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  .time-news {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #898989;
  }
  .main-text {
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */
    color: #000000;
  }
}
</style>
