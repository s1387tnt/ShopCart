<template>
  <div id="app">
    <!-- 導航區 -->
    <nav class="nav-blocks">
      <router-link to="/" class="nav-card">🏠 首頁</router-link>
      <router-link to="/shop" class="nav-card">🛍 商店</router-link>
      <router-link to="/cart" class="nav-card">🛒 購物車</router-link>
    </nav>

    <!-- 這裡會顯示對應的頁面 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* 導航樣式 */
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
}
.nav-card:hover {
  background: #ddd;
}
</style>
