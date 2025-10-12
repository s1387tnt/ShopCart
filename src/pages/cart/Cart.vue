<template>
  <div class="cart-page">
    <!-- 🔹 Hero 區 -->
    <header class="hero">
      <h1>🛒 我的購物車</h1>
      <p>檢視與管理你的商品</p>
    </header>

    <!-- 🔹 若購物車為空 -->
    <section v-if="cart.items.length === 0" class="empty-cart">
      <p>你的購物車目前是空的</p>
      <router-link to="/shop" class="continue-btn">繼續購物</router-link>
    </section>

    <!-- 🔹 有商品 -->
    <section v-else class="cart-list">
      <div v-for="(item, index) in cart.items" :key="item.id" class="cart-item">
        <img :src="item.img" :alt="item.name" class="item-img" />
        <div class="item-info">
          <h2>{{ item.name }}</h2>
          <p class="price">單價：NT$ {{ item.price }}</p>

          <div class="quantity">
            <button @click="decrease(index)">－</button>
            <span>{{ item.quantity }}</span>
            <button @click="increase(index)">＋</button>
          </div>

          <p class="subtotal">小計：NT$ {{ item.price * item.quantity }}</p>
        </div>

        <button @click="cart.removeItem(index)" class="remove-btn">移除</button>
      </div>

      <!-- 🔹 總金額區 -->
      <div class="cart-summary">
        <p>🧾 總金額：<strong>NT$ {{ cart.totalPrice }}</strong></p>
        <div class="cart-actions">
          <router-link to="/shop" class="continue-btn">繼續購物</router-link>
          <button class="checkout-btn" @click="checkout" :disabled="isProcessing">
            {{ isProcessing ? "處理中..." : "前往結帳" }}
          </button>
        </div>
      </div>
    </section>

    <!-- 🔹 結帳彈窗 -->
    <transition name="fade">
      <div v-if="showModal" class="checkout-modal">
        <div class="modal-content">
          <template v-if="isProcessing">
            <div class="spinner"></div>
            <p class="processing-text">💳 付款中... 請稍候</p>
          </template>

          <template v-else>
            <h2>🎉 付款成功！</h2>
            <p>感謝你的購買，我們將儘快出貨 🚚</p>
            <p class="countdown">即將自動返回商城 ({{ countdown }})</p>
            <button class="close-btn" @click="goShop">立即返回</button>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../../stores/stores.js";

const cart = useCartStore();
const showModal = ref(false);
const isProcessing = ref(false);
const countdown = ref(3);
const router = useRouter();

// ✅ 數量調整功能
function increase(index) {
  cart.items[index].quantity++;
  cart.updateTotals();
}

function decrease(index) {
  if (cart.items[index].quantity > 1) {
    cart.items[index].quantity--;
    cart.updateTotals();
  }
}

// ✅ 模擬付款流程 + 倒數跳轉
function checkout() {
  if (cart.items.length === 0) return;

  // 開啟模態框 & 付款處理中
  showModal.value = true;
  isProcessing.value = true;

  // 模擬付款中動畫 (2 秒)
  setTimeout(() => {
    isProcessing.value = false; // 顯示付款成功
    cart.items = []; // 清空購物車
    cart.updateTotals();

    countdown.value = 3;
    const timer = setInterval(() => {
      countdown.value--;
      if (countdown.value === 0) {
        clearInterval(timer);
        goShop();
      }
    }, 1000);
  }, 2000);
}

// ✅ 回商城
function goShop() {
  showModal.value = false;
  router.push("/shop");
}
</script>

<style scoped>
.cart-page {
  background: #f7f9fa;
  min-height: 100vh;
  padding-bottom: 60px;
}

/* === Hero 區 === */
.hero {
  background: linear-gradient(135deg, #3498db, #2ecc71);
  color: white;
  padding: 50px 20px 40px;
  text-align: center;
}

/* === 空購物車樣式 === */
.empty-cart {
  text-align: center;
  padding: 80px 20px;
  font-size: 18px;
}

.continue-btn {
  display: inline-block;
  margin-top: 20px;
  background: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;
}

.continue-btn:hover {
  background: #2980b9;
}

/* === 商品清單 === */
.cart-list {
  max-width: 900px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  gap: 15px;
  flex-wrap: wrap;
}

.item-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.item-info {
  flex: 1;
  min-width: 200px;
}

.price {
  color: #27ae60;
  font-weight: 600;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.quantity button {
  background: #eee;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: 0.2s;
}

.quantity button:hover {
  background: #d5d5d5;
}

.subtotal {
  font-weight: bold;
  color: #333;
}

.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: 0.3s;
}

.remove-btn:hover {
  background: #c0392b;
}

/* === 總金額區 === */
.cart-summary {
  margin-top: 30px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.cart-summary strong {
  color: #27ae60;
  font-size: 20px;
}

.cart-actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.checkout-btn {
  background: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.checkout-btn:hover {
  background: #27ae60;
}

/* === 結帳彈窗 === */
.checkout-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

.modal-content {
  background: #fff;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  animation: pop 0.3s ease;
  width: 280px;
}

/* === Loading 動畫 === */
.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto 15px;
  animation: spin 1s linear infinite;
}

.processing-text {
  font-size: 16px;
  color: #555;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* === 成功畫面 === */
.modal-content h2 {
  margin-bottom: 10px;
  color: #27ae60;
}

.modal-content p {
  margin-bottom: 20px;
}

.countdown {
  color: #666;
  font-size: 14px;
}

.close-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.close-btn:hover {
  background: #2980b9;
}

/* 動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes pop {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
