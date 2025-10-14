<template>
  <div id="app">
    <!-- 🔹 導航列 -->
    <nav class="nav-blocks">
      <router-link to="/" class="nav-card">🏠 首頁</router-link>
      <router-link to="/shop" class="nav-card">🛍 商店</router-link>
      <router-link to="/cart" class="nav-card">🛒 購物車</router-link>
    </nav>

    <!-- 🔹 主畫面內容 -->
    <router-view />

    <!-- 🔹 全域購物車圖示 -->
    <CartIcon />
  </div>
</template>

<script setup>
import CartIcon from "./components/CartIcon.vue";
import { useCartStore } from "./stores/stores.js";

// ✅ 啟動時讀取購物車資料
const cart = useCartStore();
cart.initCart();
</script>

<style>
body {
  font-family: "Noto Sans TC", sans-serif;
  background: #f4f6f8;
  margin: 0;
}

.nav-blocks {
  display: flex;
  justify-content: center;
  gap: 20px;
  background: white;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-card {
  padding: 10px 20px;
  background: #ecf0f1;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: all 0.2s;
}

.nav-card:hover {
  background: #3498db;
  color: white;
}
</style>
