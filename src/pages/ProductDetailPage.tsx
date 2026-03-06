import { useEffect, useState } from "react";
import { productApi, clickApi, type Product } from "../api";
import { useLanguage } from "../i18n/LanguageContext";
import { useCart } from "../store/CartContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Loader2, ArrowLeft, ShoppingCart, Plus, Minus, Check, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
    setSelectedImageIndex(0);
    try {
      const data = await productApi.getById(productId);
      setProduct(data);
      
      // Track product view (fire and forget - don't block on this)
      clickApi.trackView(productId)
        .then((res) => console.log("[Click Tracking] Success:", res))
        .catch((err) => console.error("[Click Tracking] Failed:", err));
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

  // Get all product images - use images array if available, fallback to single imageUrl
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl || "/images/placeholder.jpg"];
  
  const currentImage = productImages[selectedImageIndex] || productImages[0];
  const hasMultipleImages = productImages.length > 1;

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

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
              src={currentImage}
              alt={product.name}
              className={styles.productImage}
            />
            {isOutOfStock && (
              <div className={styles.outOfStockOverlay}>
                <span>{isVi ? "Hết hàng" : "Out of stock"}</span>
              </div>
            )}
            {hasMultipleImages && (
              <>
                <button 
                  onClick={handlePrevImage} 
                  className={`${styles.imageNavBtn} ${styles.imageNavPrev}`}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNextImage} 
                  className={`${styles.imageNavBtn} ${styles.imageNavNext}`}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
          {/* Thumbnail Gallery */}
          {hasMultipleImages && (
            <div className={styles.thumbnailGallery}>
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`${styles.thumbnail} ${index === selectedImageIndex ? styles.thumbnailActive : ""}`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${product.name} - ${index + 1}`}
                    className={styles.thumbnailImage}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className={styles.infoSection}>
          <h1 className={styles.productName}>
            {product.name}
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
            <h3>{isVi ? "Mô tả sản phẩm" : "Product description"}</h3>
            <p className={styles.detailValue}>
              {isVi ? product.description : (product.descriptionEn || product.description)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
