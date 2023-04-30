import { createApp } from "vue";
import router from "./router/index";

import "./style.css";
import App from "./App.vue";
import "./assets/bootstrap.min.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

app.use(ElementPlus).use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
