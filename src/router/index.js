import { createRouter, createWebHistory } from "vue-router";
import Cart from "../pages/cart/Cart.vue";
import Home from "../pages/home/Home.vue";
import Shop from "../pages/shop/Shop.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
