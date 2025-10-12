import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.qty, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.qty, 0),
  },

  actions: {
    addItem(product) {
      const existing = this.items.find((i) => i.id === product.id);
      if (existing) existing.qty++;
      else this.items.push({ ...product, qty: 1 });
    },
    removeItem(id) {
      this.items = this.items.filter((i) => i.id !== id);
    },
    increase(item) {
      item.qty++;
    },
    decrease(item) {
      if (item.qty > 1) item.qty--;
    },
    clearCart() {
      this.items = [];
    },
  },
});
