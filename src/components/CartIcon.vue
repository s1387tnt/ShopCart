<template>
  <router-link to="/cart" class="cart-icon">
    🛒
    <span v-if="cart.totalItems > 0" class="badge">{{ cart.totalItems }}</span>
  </router-link>
</template>

<script setup>
import { useCartStore } from "../stores/stores.js";
const cart = useCartStore();
</script>

<style scoped>
.cart-icon {
  position: fixed;
  bottom: 20px;
  right: 25px;
  background: #3498db;
  color: white;
  font-size: 26px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease;
  z-index: 100;
}
.cart-icon:hover {
  background: #2ecc71;
  transform: scale(1.1);
}
.badge {
  position: absolute;
  top: 10px;
  right: 12px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  font-size: 13px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
