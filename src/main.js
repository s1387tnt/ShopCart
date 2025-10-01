import { createPinia } from "pinia";
import { createApp } from "vue";
import Home from "./App.vue";
import router from "./router"; // 匯入 router

const app = createApp(Home);
app.use(router); // ✅ 這行很重要
app.use(createPinia());
app.mount("#app");
