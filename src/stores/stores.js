import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("cart") || "[]"),
    totalItems: 0,
    totalPrice: 0,
  }),

  actions: {
    // ✅ 初始化購物車（載入 localStorage）
    initCart() {
      this.items = JSON.parse(localStorage.getItem("cart") || "[]");
      this.updateTotals();
    },

    // ✅ 儲存購物車資料到 localStorage
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.items));
      this.updateTotals();
    },

    // ✅ 新增商品
    addItem(product) {
      const existing = this.items.find((i) => i.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.saveCart();
    },

    // ✅ 移除商品
    removeItem(index) {
      this.items.splice(index, 1);
      this.saveCart();
    },

    // ✅ 更新數量（增加 / 減少）
    updateQty(index, qty) {
      if (qty < 1) return;
      this.items[index].quantity = qty;
      this.saveCart();
    },

    // ✅ 清空購物車
    clearCart() {
      this.items = [];
      this.saveCart();
    },

    // ✅ 更新總金額與數量
    updateTotals() {
      this.totalItems = this.items.reduce((sum, i) => sum + i.quantity, 0);
      this.totalPrice = this.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },
  },
});
