
import { useCart } from "../store/CartContext";
import { useLanguage } from "../i18n/LanguageContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import styles from "./CartPage.module.css";

interface CartPageProps {
  onNavigate?: (page: string) => void;
}

export default function CartPage({ onNavigate }: CartPageProps) {
  const { language } = useLanguage();
  const { items, removeItem, updateQuantity, totalItems, subtotal, total } = useCart();
  const isVi = language === "vi";

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN");
  };

  if (items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <ShoppingBag size={64} className={styles.emptyIcon} />
        <h2>{isVi ? "Giỏ hàng trống" : "Your cart is empty"}</h2>
        <p>
          {isVi
            ? "Hãy khám phá các sản phẩm của chúng tôi"
            : "Explore our products and add some items"}
        </p>
        <button onClick={() => onNavigate?.("products")} className={styles.shopBtn}>
          {isVi ? "Xem sản phẩm" : "Browse products"}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        {isVi ? "Giỏ hàng" : "Shopping Cart"} ({totalItems})
      </h1>

      <div className={styles.content}>
        <div className={styles.cartItems}>
          {items.map((item) => (
            <div key={item.product._id} className={styles.cartItem}>
              <div className={styles.itemImage}>
                <ImageWithFallback
                  src={(item.product.images && item.product.images[0]) || item.product.imageUrl || "/images/placeholder.jpg"}
                  alt={item.product.name}
                  className={styles.productImage}
                />
              </div>

              <div className={styles.itemDetails}>
                <h3 className={styles.itemName}>
                  {item.product.name}
                </h3>
                <p className={styles.itemPrice}>{formatPrice(item.product.price)}đ</p>
              </div>

              <div className={styles.quantityControl}>
                <button
                  onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                  className={styles.qtyBtn}
                  disabled={item.quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className={styles.qtyValue}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                  className={styles.qtyBtn}
                  disabled={item.quantity >= item.product.stock}
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className={styles.itemTotal}>
                {formatPrice(item.product.price * item.quantity)}đ
              </div>

              <button
                onClick={() => removeItem(item.product._id)}
                className={styles.removeBtn}
                aria-label={isVi ? "Xóa" : "Remove"}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>
            {isVi ? "Tóm tắt đơn hàng" : "Order Summary"}
          </h2>

          <div className={styles.summaryRow}>
            <span>{isVi ? "Tạm tính" : "Subtotal"}</span>
            <span>{formatPrice(subtotal)}đ</span>
          </div>

          <div className={styles.summaryTotal}>
            <span>{isVi ? "Tổng cộng" : "Total"}</span>
            <span>{formatPrice(total)}đ</span>
          </div>

          <button onClick={() => onNavigate?.("checkout")} className={styles.checkoutBtn}>
            {isVi ? "Tiến hành thanh toán" : "Proceed to Checkout"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
