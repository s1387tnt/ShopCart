<script setup>
import { useCartStore } from "./cart";

const cart = useCartStore();

function remove(index) {
  cart.removeItem(index);
}
</script>

<template>
  <div>
    <h1>購物車</h1>
    <ul>
      <li v-for="(item, index) in cart.items" :key="index">
        {{ item.name }} - ${{ item.price }}
        <button @click="remove(index)">移除</button>
      </li>
    </ul>

    <p v-if="cart.items.length === 0">購物車是空的</p>
    <router-link to="/">⬅ 回到首頁</router-link>
  </div>
</template>
