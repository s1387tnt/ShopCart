<template>
  <div>
    <nav>
      <router-link to="/">首頁</router-link> |
      <router-link to="/cart">購物車</router-link>
    </nav>
    <router-view />
    <!-- ✅ 關鍵：顯示 router 對應的頁面 -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
