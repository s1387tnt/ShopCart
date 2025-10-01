<template>
  <div class="home">
    <!-- 導航方塊區 -->
    <section class="nav-blocks">
      <router-link to="/" class="nav-card">🏠 首頁</router-link>
      <router-link to="/shop" class="nav-card">🛍 商店</router-link>
      <router-link to="/cart" class="nav-card">🛒 購物車</router-link>
    </section>
    <!-- 頁首區 -->
    <header class="hero">
      <h1>🛒 Smart Shop</h1>
      <p>最方便的線上購物體驗</p>
      <router-link to="/shop" class="btn">開始購物</router-link>
    </header>

    <!-- 功能展示區 -->
    <section class="features">
      <div class="feature-card">
        <h2>📦 快速配送</h2>
        <p>全館商品皆享快速出貨，隔天到貨。</p>
      </div>
      <div class="feature-card">
        <h2>💳 安全支付</h2>
        <p>支援信用卡、行動支付，交易安全無虞。</p>
      </div>
      <div class="feature-card">
        <h2>⭐ 精選商品</h2>
        <p>嚴選高品質商品，滿足你的生活需求。</p>
      </div>
    </section>
  </div>
</template>

<script src="./home.js"></script>
<style src="./home.css"></style>
