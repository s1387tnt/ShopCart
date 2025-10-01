// src/store/cart.js
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(product) {
      this.items.push(product);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    clearCart() {
      this.items = [];
    },
  },
  getters: {
    totalItems: (state) => state.items.length,
  },
});
