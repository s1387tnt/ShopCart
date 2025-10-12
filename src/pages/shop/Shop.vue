<template>
  <div class="shop">
    <!-- 🔹 Hero 區 -->
    <header class="hero">
      <h1>🛍 Smart Shop</h1>
      <p>探索我們的精選商品（共 {{ filteredProducts.length }} 件）</p>
    </header>

    <!-- 🔹 搜尋 + 分類欄 -->
    <section class="filter-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="🔍 搜尋商品名稱..."
        class="search-input"
      />
      <select v-model="selectedCategory" class="category-select">
        <option value="全部">📦 全部分類</option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </section>

    <!-- 🔹 商品展示區 -->
    <section class="product-section">
      <div v-for="p in filteredProducts" :key="p.id" class="product-card">
        <img :src="p.img" :alt="p.name" class="product-img" />
        <h2>{{ p.name }}</h2>
        <p class="desc">{{ p.desc }}</p>
        <p class="price">💰 NT$ {{ p.price }}</p>
        <button @click="cart.addItem(p)" class="add-btn">加入購物車</button>
      </div>
    </section>

    <!-- 🔹 購物車導引 -->
    <div class="to-cart">
      <router-link to="/cart" class="cart-btn">
        🛒 查看購物車 ({{ cart.totalItems }})
      </router-link>
    </div>
  </div>
</template>

<script src="./shop.js"></script>
<style src="./shop.css"></style>
