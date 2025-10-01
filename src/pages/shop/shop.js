import { useCartStore } from "../cart/cart"; // ✅ 路徑要依實際位置修改

export default {
  name: "ShopPage",
  setup() {
    const cart = useCartStore();

    const products = [
      { id: 1, name: "商品 A", price: 100 },
      { id: 2, name: "商品 B", price: 200 },
      { id: 3, name: "商品 C", price: 300 },
    ];

    function add(product) {
      cart.addItem(product);
    }

    return { cart, products, add };
  },
};
