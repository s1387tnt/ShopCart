<template>
  <div class="cart">
    <!-- 🔹 頁首區 -->
    <header class="hero">
      <h1>🛒 我的購物車</h1>
      <p>檢視並管理你的商品</p>
    </header>

    <!-- 🔹 有商品時 -->
    <section v-if="cart.items.length > 0" class="cart-list">
      <div v-for="item in cart.items" :key="item.id" class="cart-card">
        <div class="item-info">
          <h2>{{ item.name }}</h2>
          <p>NT$ {{ item.price }}</p>
        </div>

        <div class="item-actions">
          <button @click="cart.decrease(item)" class="qty-btn">−</button>
          <span>{{ item.qty }}</span>
          <button @click="cart.increase(item)" class="qty-btn">＋</button>
          <button @click="cart.removeItem(item.id)" class="remove-btn">移除</button>
        </div>
      </div>

      <!-- 🔹 總金額 -->
      <div class="cart-summary">
        <p>🧾 總金額：NT$ {{ cart.totalPrice }}</p>
        <button @click="cart.clearCart()" class="clear-btn">清空購物車</button>
        <router-link to="/shop" class="continue-btn">繼續購物</router-link>
      </div>
    </section>

    <!-- 🔹 無商品時 -->
    <section v-else class="empty-cart">
      <p>🛍 你的購物車目前是空的</p>
      <router-link to="/shop" class="btn">去逛逛商品</router-link>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from "../../stores/cart.js";
const cart = useCartStore();
</script>

<style src="./cart.css"></style>
