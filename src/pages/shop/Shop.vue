<template>
  <div class="shop">
    <h1>商品清單</h1>
    <ul>
      <li v-for="(p, index) in products" :key="index">
        {{ p.name }} - ${{ p.price }}
        <button @click="add(p)">加入購物車</button>
      </li>
    </ul>

    <router-link to="/cart" class="btn">
      🛒 購物車 ({{ cart.totalItems }})
    </router-link>
  </div>
</template>

<script src="./shop.js"></script>
<style src="./shop.css"></style>
