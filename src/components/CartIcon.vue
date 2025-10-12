<template>
  <router-link to="/cart" class="cart-icon">
    🛒
    <span v-if="cart.totalItems > 0" class="badge">
      {{ cart.totalItems }}
    </span>
  </router-link>
</template>

<script setup>
import { useCartStore } from "../stores/cart.js";
const cart = useCartStore();
</script>

<style scoped>
.cart-icon {
  position: fixed;
  top: 20px;
  right: 30px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #2ecc71;
  z-index: 1000;
  transition: all 0.2s ease;
}

.cart-icon:hover {
  transform: scale(1.1);
  background: #2ecc71;
  color: white;
}

.badge {
  position: absolute;
  top: 6px;
  right: 6px;
  background: #e74c3c;
  color: white;
  font-size: 13px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}
</style>
