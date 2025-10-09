import { createPinia } from "pinia"; // 匯入 Pinia（全域狀態管理工具，像全域資料倉庫）
import { createApp } from "vue"; // 匯入 Vue 的 createApp，用來建立應用程式
import Home from "./App.vue"; // 匯入 App.vue（根元件），你取名叫 Home
import router from "./router"; // 匯入 router（路由設定，負責網址對應頁面）

const app = createApp(Home); // 建立一個 Vue 應用，並以 App.vue 當作起始元件
app.use(router); // 安裝 router，讓 <router-view /> 可以切換頁面
app.use(createPinia()); // 安裝 Pinia，讓整個應用能共享資料（例：購物車）
app.mount("#app"); // 把這個 Vue 應用掛載到 index.html 的 <div id="app"> 中
