import { ref, computed, onMounted } from "vue";
import { useCartStore } from "../../stores/stores.js";
import { products } from "../../data/products.js";

export default {
  setup() {
    const cart = useCartStore();

    // ✅ 初始化購物車
    onMounted(() => {
      cart.initCart();
    });

    const searchQuery = ref("");
    const selectedCategory = ref("全部");

    const categories = [
      "電子產品",
      "居家生活",
      "食品飲品",
      "文具書籍",
      "美妝保養",
      "寵物用品",
      "玩具運動",
      "旅遊戶外",
      "趣味小物",
    ];

    // ✅ 搜尋與分類篩選
    const filteredProducts = computed(() =>
      products.filter((p) => {
        const matchName =
          p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          p.desc.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchCategory =
          selectedCategory.value === "全部" ||
          p.category === selectedCategory.value;
        return matchName && matchCategory;
      })
    );

    return {
      cart,
      searchQuery,
      selectedCategory,
      categories,
      filteredProducts,
    };
  },
};
