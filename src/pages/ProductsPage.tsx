import { useEffect, useState } from "react";
import { productApi, type Product } from "../api";
import { ProductCard } from "../components/ProductCard";
import { useLanguage } from "../i18n/LanguageContext";
import { useCart } from "../store/CartContext";
import { Loader2, Search } from "lucide-react";
import styles from "./ProductsPage.module.css";

interface ProductsPageProps {
  onNavigate?: (page: string) => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const isVi = language === "vi";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    setLoading(true);
    setError(null);
    try {
      const data = await productApi.getAll();
      setProducts(data);
    } catch (err) {
      setError(isVi ? "Không thể tải sản phẩm" : "Failed to load products");
      console.error("Failed to load products:", err);
    } finally {
      setLoading(false);
    }
  }

  const filteredProducts = searchQuery
    ? products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.nameEn?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : products;

  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN");
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {isVi ? "Sản phẩm" : "Products"}
        </h1>
      </div>

      {/* Search */}
      <div className={styles.filters}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder={isVi ? "Tìm kiếm..." : "Search..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className={styles.loadingState}>
          <Loader2 size={32} className={styles.spinner} />
          <p>{isVi ? "Đang tải..." : "Loading..."}</p>
        </div>
      ) : error ? (
        <div className={styles.errorState}>
          <p>{error}</p>
          <button onClick={loadProducts} className={styles.retryBtn}>
            {isVi ? "Thử lại" : "Retry"}
          </button>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className={styles.emptyState}>
          <p>
            {isVi
              ? "Không tìm thấy sản phẩm nào"
              : "No products found"}
          </p>
        </div>
      ) : (
        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              image={product.imageUrl || "/images/placeholder.jpg"}
              name={product.name}
              price={formatPrice(product.price)}
              onViewDetail={() => onNavigate?.(`product/${product._id}`)}
              onAddToCart={() => handleAddToCart(product)}
              stock={product.stock}
            />
          ))}
        </div>
      )}
    </div>
  );
}
