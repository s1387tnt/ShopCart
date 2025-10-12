<template>
  <div id="app">
    <!-- 🔹 導航區 -->
    <nav class="nav-blocks">
      <router-link to="/" class="nav-card">🏠 首頁</router-link>
      <router-link to="/shop" class="nav-card">🛍 商店</router-link>
      <router-link to="/cart" class="nav-card">🛒 購物車</router-link>
    </nav>

    <!-- 🔹 主內容區：對應不同頁面 -->
    <router-view />

    <!-- 🔹 全站固定購物車圖示 -->
    <CartIcon />
  </div>
</template>

<script setup>
import CartIcon from "./components/CartIcon.vue";
</script>

<style>
/* 🔹 導航區樣式 */
.nav-blocks {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px;
}

.nav-card {
  padding: 10px 20px;
  background: #f5f5f5;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: background 0.2s ease;
}

.nav-card:hover {
  background: #ddd;
}

/* 🔹 全域背景 */
body {
  margin: 0;
  font-family: "Noto Sans TC", sans-serif;
  background: #f9fafb;
}
</style>
