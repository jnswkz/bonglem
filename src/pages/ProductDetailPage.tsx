import { useEffect, useState } from "react";
import { productApi, type Product } from "../api";
import { useLanguage } from "../i18n/LanguageContext";
import { useCart } from "../store/CartContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Loader2, ArrowLeft, ShoppingCart, Plus, Minus, Check } from "lucide-react";
import styles from "./ProductDetailPage.module.css";

interface ProductDetailPageProps {
  productId: string;
  onNavigate?: (page: string) => void;
}

export default function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const isVi = language === "vi";

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    loadProduct();
  }, [productId]);

  async function loadProduct() {
    if (!productId) {
      setError(isVi ? "Không tìm thấy sản phẩm" : "Product not found");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await productApi.getById(productId);
      setProduct(data);
    } catch (err) {
      setError(isVi ? "Không thể tải sản phẩm" : "Failed to load product");
      console.error("Failed to load product:", err);
    } finally {
      setLoading(false);
    }
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN");
  };

  const handleQuantityChange = (delta: number) => {
    const newQty = quantity + delta;
    if (newQty >= 1 && product && newQty <= product.stock) {
      setQuantity(newQty);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingState}>
        <Loader2 size={32} className={styles.spinner} />
        <p>{isVi ? "Đang tải..." : "Loading..."}</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.errorState}>
        <p>{error || (isVi ? "Không tìm thấy sản phẩm" : "Product not found")}</p>
        <button onClick={() => onNavigate?.("products")} className={styles.backBtn}>
          {isVi ? "Quay lại sản phẩm" : "Back to products"}
        </button>
      </div>
    );
  }

  const isOutOfStock = product.stock <= 0;

  return (
    <div className={styles.page}>
      <button onClick={() => onNavigate?.("products")} className={styles.backLink}>
        <ArrowLeft size={18} />
        {isVi ? "Quay lại" : "Back"}
      </button>

      <div className={styles.content}>
        {/* Product Image */}
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
            <ImageWithFallback
              src={product.imageUrl || "/images/placeholder.jpg"}
              alt={product.name}
              className={styles.productImage}
            />
            {isOutOfStock && (
              <div className={styles.outOfStockOverlay}>
                <span>{isVi ? "Hết hàng" : "Out of stock"}</span>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.infoSection}>
          <h1 className={styles.productName}>
            {isVi ? product.name : (product.nameEn || product.name)}
          </h1>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(product.price)}đ</span>
            {product.stock > 0 && product.stock <= 10 && (
              <span className={styles.lowStock}>
                {isVi ? `Chỉ còn ${product.stock} sản phẩm` : `Only ${product.stock} left`}
              </span>
            )}
          </div>

          <p className={styles.description}>
            {isVi ? product.description : (product.descriptionEn || product.description)}
          </p>

          {/* Quantity Selector */}
          {!isOutOfStock && (
            <div className={styles.quantitySection}>
              <span className={styles.quantityLabel}>
                {isVi ? "Số lượng:" : "Quantity:"}
              </span>
              <div className={styles.quantityControl}>
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className={styles.qtyBtn}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className={styles.qtyValue}>{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className={styles.qtyBtn}
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <div className={styles.actions}>
            <button
              onClick={handleAddToCart}
              disabled={isOutOfStock || addedToCart}
              className={`${styles.addToCartBtn} ${addedToCart ? styles.added : ""}`}
            >
              {addedToCart ? (
                <>
                  <Check size={20} />
                  {isVi ? "Đã thêm vào giỏ" : "Added to cart"}
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  {isVi ? "Thêm vào giỏ hàng" : "Add to cart"}
                </>
              )}
            </button>

            <button
              onClick={() => onNavigate?.("cart")}
              className={styles.viewCartBtn}
            >
              {isVi ? "Xem giỏ hàng" : "View cart"}
            </button>
          </div>

          {/* Product Details */}
          <div className={styles.details}>
            <h3>{isVi ? "Thông tin sản phẩm" : "Product details"}</h3>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>SKU</span>
              <span className={styles.detailValue}>{product.sku || "N/A"}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>{isVi ? "Tình trạng" : "Availability"}</span>
              <span className={`${styles.detailValue} ${isOutOfStock ? styles.outOfStock : styles.inStock}`}>
                {isOutOfStock
                  ? (isVi ? "Hết hàng" : "Out of stock")
                  : (isVi ? "Còn hàng" : "In stock")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
