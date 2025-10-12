import { useCartStore } from "../../stores/stores.js";

export default {
  setup() {
    const cart = useCartStore();
    return { cart };
  },
};
