import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  function addItem(product) {
    const existing = items.value.find((p) => p.id === product.id);
    if (existing) existing.quantity++;
    else items.value.push({ ...product, quantity: 1 });
    updateTotals();
  }

  function removeItem(index) {
    items.value.splice(index, 1);
    updateTotals();
  }

  function updateTotals() {
    totalItems.value = items.value.reduce((t, i) => t + i.quantity, 0);
    totalPrice.value = items.value.reduce((t, i) => t + i.price * i.quantity, 0);
  }

  const totalItems = ref(0);
  const totalPrice = ref(0);

  return { items, addItem, removeItem, updateTotals, totalItems, totalPrice };
});
