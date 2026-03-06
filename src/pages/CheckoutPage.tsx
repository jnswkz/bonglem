import { useState } from "react";
import { useCart } from "../store/CartContext";
import { useLanguage } from "../i18n/LanguageContext";
import { orderApi } from "../api";
import { Loader2, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import styles from "./CheckoutPage.module.css";

interface CheckoutPageProps {
  onNavigate?: (page: string) => void;
}

type PaymentMethod = "cod" | "bank_transfer";

export default function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  const { language } = useLanguage();
  const { items, subtotal, total, clearCart } = useCart();
  const isVi = language === "vi";

  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    facebookLink: "",
    note: "",
    paymentMethod: "cod" as PaymentMethod,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<{ orderId: string } | null>(null);

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = formData.customerEmail.trim();

    if (!email) {
      setError(isVi ? "Vui lòng nhập email" : "Please enter email");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const orderData = {
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        customerEmail: email,
        facebookLink: formData.facebookLink || undefined,
        note: formData.note || undefined,
        paymentMethod: formData.paymentMethod,
        items: items.map((item) => ({
          productId: item.product._id,
          quantity: item.quantity,
        })),
      };

      const response = await orderApi.create(orderData);
      setOrderSuccess({ orderId: response.orderId });
      clearCart();
    } catch (err: unknown) {
      const errorMessage = err && typeof err === "object" && "message" in err 
        ? (err as { message: string }).message 
        : (isVi ? "Đã xảy ra lỗi khi đặt hàng" : "An error occurred while placing order");
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // No items in cart
  if (items.length === 0 && !orderSuccess) {
    return (
      <div className={styles.emptyState}>
        <AlertCircle size={48} />
        <h2>{isVi ? "Giỏ hàng trống" : "Cart is empty"}</h2>
        <p>{isVi ? "Vui lòng thêm sản phẩm trước khi thanh toán" : "Please add products before checkout"}</p>
        <button onClick={() => onNavigate?.("products")} className={styles.backBtn}>
          {isVi ? "Xem sản phẩm" : "Browse products"}
        </button>
      </div>
    );
  }

  // Order success
  if (orderSuccess) {
    return (
      <div className={styles.successState}>
        <CheckCircle size={64} className={styles.successIcon} />
        <h2>{isVi ? "Đặt hàng thành công!" : "Order placed successfully!"}</h2>
        <p className={styles.orderId}>
          {isVi ? "Mã đơn hàng" : "Order ID"}: <strong>{orderSuccess.orderId}</strong>
        </p>
        <p className={styles.successMessage}>
          {isVi
            ? "Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ xác nhận sớm nhất."
            : "Thank you for your order! We will contact you for confirmation shortly."}
        </p>
        <div className={styles.successActions}>
          <button onClick={() => onNavigate?.("home")} className={styles.homeBtn}>
            {isVi ? "Về trang chủ" : "Back to Home"}
          </button>
          <button onClick={() => onNavigate?.("products")} className={styles.shopBtn}>
            {isVi ? "Tiếp tục mua sắm" : "Continue shopping"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <button onClick={() => onNavigate?.("cart")} className={styles.backLink}>
        <ArrowLeft size={18} />
        {isVi ? "Quay lại giỏ hàng" : "Back to cart"}
      </button>

      <h1 className={styles.title}>{isVi ? "Thanh toán" : "Checkout"}</h1>

      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.sectionTitle}>
            {isVi ? "Thông tin khách hàng" : "Customer Information"}
          </h2>

          <div className={styles.formGroup}>
            <label htmlFor="customerName">
              {isVi ? "Họ và tên" : "Full name"} *
            </label>
            <input
              id="customerName"
              name="customerName"
              type="text"
              required
              value={formData.customerName}
              onChange={handleChange}
              placeholder={isVi ? "Nguyễn Văn A" : "John Doe"}
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="customerPhone">
                {isVi ? "Số điện thoại" : "Phone"} *
              </label>
              <input
                id="customerPhone"
                name="customerPhone"
                type="tel"
                required
                value={formData.customerPhone}
                onChange={handleChange}
                placeholder="0901234567"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="customerEmail">Email *</label>
              <input
                id="customerEmail"
                name="customerEmail"
                type="email"
                required
                value={formData.customerEmail}
                onChange={handleChange}
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="facebookLink">Facebook</label>
            <input
              id="facebookLink"
              name="facebookLink"
              type="url"
              value={formData.facebookLink}
              onChange={handleChange}
              placeholder="https://facebook.com/username"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="note">{isVi ? "Ghi chú" : "Note"}</label>
            <textarea
              id="note"
              name="note"
              rows={2}
              value={formData.note}
              onChange={handleChange}
              placeholder={
                isVi ? "Ghi chú về đơn hàng (tùy chọn)" : "Order notes (optional)"
              }
            />
          </div>

          <h2 className={styles.sectionTitle}>
            {isVi ? "Phương thức thanh toán" : "Payment Method"}
          </h2>

          <div className={styles.paymentOptions}>
            <label className={styles.paymentOption}>
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === "cod"}
                onChange={handleChange}
              />
              <span className={styles.paymentLabel}>
                <strong>{isVi ? "Thanh toán khi nhận hàng (COD)" : "Cash on Delivery (COD)"}</strong>
                <small>{isVi ? "Thanh toán bằng tiền mặt khi nhận hàng" : "Pay with cash upon delivery"}</small>
              </span>
            </label>

            <label className={styles.paymentOption}>
              <input
                type="radio"
                name="paymentMethod"
                value="bank_transfer"
                checked={formData.paymentMethod === "bank_transfer"}
                onChange={handleChange}
              />
              <span className={styles.paymentLabel}>
                <strong>{isVi ? "Chuyển khoản ngân hàng" : "Bank Transfer"}</strong>
                <small>
                  {isVi
                    ? "Chuyển khoản trước, giao hàng sau khi xác nhận"
                    : "Transfer first, ship after confirmation"}
                </small>
              </span>
            </label>
          </div>

          <h2 className={styles.sectionTitle}>
            {isVi ? "Địa chỉ giao hàng" : "Shipping Address"}
          </h2>

          <div className={styles.shippingAddress}>
            <p>
              {isVi
                ? "Cơ sở B, 279 Nguyễn Tri Phương, Phường Điện Hồng, Quận 10, TP. Hồ Chí Minh"
                : "Campus B, 279 Nguyen Tri Phuong, Dien Hong Ward, District 10, Ho Chi Minh City"}
            </p>
          </div>

          {error && (
            <div className={styles.errorMessage}>
              <AlertCircle size={18} />
              {error}
            </div>
          )}
        </form>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>
            {isVi ? "Đơn hàng của bạn" : "Your Order"}
          </h2>

          <div className={styles.orderItems}>
            {items.map((item) => (
              <div key={item.product._id} className={styles.orderItem}>
                <span className={styles.itemName}>
                  {item.product.name}
                  <span className={styles.itemQty}>× {item.quantity}</span>
                </span>
                <span>{formatPrice(item.product.price * item.quantity)}đ</span>
              </div>
            ))}
          </div>

          <div className={styles.summaryRow}>
            <span>{isVi ? "Tạm tính" : "Subtotal"}</span>
            <span>{formatPrice(subtotal)}đ</span>
          </div>

          <div className={styles.summaryTotal}>
            <span>{isVi ? "Tổng cộng" : "Total"}</span>
            <span>{formatPrice(total)}đ</span>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className={styles.placeOrderBtn}
          >
            {loading ? (
              <>
                <Loader2 size={18} className={styles.spinner} />
                {isVi ? "Đang xử lý..." : "Processing..."}
              </>
            ) : (
              isVi ? "Đặt hàng" : "Place Order"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
