import { useEffect, useState } from "react";
import { Loader2, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { orderApi } from "../api";
import { useLanguage } from "../i18n/LanguageContext";
import { useCart } from "../store/CartContext";
import styles from "./CheckoutPage.module.css";

interface CheckoutPageProps {
  onNavigate?: (page: string) => void;
}

type PaymentMethod = "cod" | "bank_transfer";
type PaymentResultStatus = "pending" | "paid" | "cancelled" | "expired" | "failed";

interface OrderSuccessState {
  orderId: string;
  paymentMethod: PaymentMethod;
}

interface PaymentReturnState {
  sessionId: string;
  status: PaymentResultStatus;
  orderId: string | null;
}

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
    _hp: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<OrderSuccessState | null>(null);
  const [paymentReturn, setPaymentReturn] = useState<PaymentReturnState | null>(null);
  const [checkingPayment, setCheckingPayment] = useState(false);

  const formatPrice = (price: number) => price.toLocaleString("vi-VN");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("sessionId");
    const payosState = params.get("payos");

    if (!sessionId || !payosState) {
      return;
    }

    let active = true;
    setCheckingPayment(true);
    setError(null);

    orderApi
      .getPaymentSessionById(sessionId, { syncPayment: true })
      .then((payload) => {
        if (!active) return;

        if (payload.paymentStatus === "paid" && payload.orderId && payload.order) {
          setPaymentReturn(null);
          setOrderSuccess({
            orderId: payload.orderId,
            paymentMethod: payload.order.paymentMethod,
          });
          clearCart();
          return;
        }

        const status: PaymentResultStatus =
          payload.paymentStatus === "cancelled" ||
          payload.paymentStatus === "expired" ||
          payload.paymentStatus === "failed"
            ? payload.paymentStatus
            : "pending";

        setPaymentReturn({
          sessionId,
          status,
          orderId: payload.orderId,
        });
      })
      .catch(() => {
        if (!active) return;
        setPaymentReturn({
          sessionId,
          status: payosState === "cancelled" ? "cancelled" : "failed",
          orderId: null,
        });
      })
      .finally(() => {
        if (!active) return;

        setCheckingPayment(false);

        const url = new URL(window.location.href);
        url.searchParams.delete("page");
        url.searchParams.delete("sessionId");
        url.searchParams.delete("payos");
        window.history.replaceState({}, "", url.toString());
      });

    return () => {
      active = false;
    };
  }, [clearCart]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const customerName = formData.customerName.trim();
    const customerPhone = formData.customerPhone.trim();
    const email = formData.customerEmail.trim();
    const facebookLink = formData.facebookLink.trim();
    const note = formData.note.trim();
    const validPaymentMethods: PaymentMethod[] = ["cod", "bank_transfer"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\s().-]{8,20}$/;

    if (!customerName) {
      setError(isVi ? "Vui lòng nhập họ và tên" : "Please enter your full name");
      return;
    }

    if (!customerPhone) {
      setError(isVi ? "Vui lòng nhập số điện thoại" : "Please enter your phone number");
      return;
    }

    if (!phoneRegex.test(customerPhone)) {
      setError(isVi ? "Số điện thoại không hợp lệ" : "Phone number format is invalid");
      return;
    }

    if (!email) {
      setError(isVi ? "Vui lòng nhập email" : "Please enter email");
      return;
    }

    if (!emailRegex.test(email)) {
      setError(isVi ? "Email không hợp lệ" : "Email format is invalid");
      return;
    }

    if (!validPaymentMethods.includes(formData.paymentMethod)) {
      setError(isVi ? "Phương thức thanh toán không hợp lệ" : "Invalid payment method");
      return;
    }

    if (facebookLink) {
      try {
        const parsedFacebookLink = new URL(facebookLink);
        if (
          parsedFacebookLink.protocol !== "http:" &&
          parsedFacebookLink.protocol !== "https:"
        ) {
          setError(isVi ? "Link Facebook không hợp lệ" : "Facebook link is invalid");
          return;
        }
      } catch {
        setError(isVi ? "Link Facebook không hợp lệ" : "Facebook link is invalid");
        return;
      }
    }

    setLoading(true);
    setError(null);

    try {
      const response = await orderApi.create({
        customerName,
        customerPhone,
        customerEmail: email,
        facebookLink: facebookLink || undefined,
        note: note || undefined,
        paymentMethod: formData.paymentMethod,
        items: items.map((item) => ({
          productId: item.product._id,
          quantity: item.quantity,
        })),
        _hp: formData._hp || undefined,
      });

      if (response.payment?.checkoutUrl) {
        window.location.assign(response.payment.checkoutUrl);
        return;
      }

      if (response.orderId && response.order) {
        setOrderSuccess({
          orderId: response.orderId,
          paymentMethod: response.order.paymentMethod,
        });
        clearCart();
      }
    } catch (err: unknown) {
      const errorMessage =
        err && typeof err === "object" && "message" in err
          ? (err as { message: string }).message
          : isVi
            ? "Đã xảy ra lỗi khi đặt hàng"
            : "An error occurred while placing order";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (checkingPayment) {
    return (
      <div className={styles.successState}>
        <Loader2 size={48} className={styles.spinner} />
        <h2>{isVi ? "Đang kiểm tra thanh toán..." : "Checking payment..."}</h2>
        <p className={styles.successMessage}>
          {isVi
            ? "Hệ thống đang đối chiếu trạng thái thanh toán với payOS."
            : "We are verifying your payment status with payOS."}
        </p>
      </div>
    );
  }

  if (paymentReturn && !orderSuccess) {
    const paymentMessages: Record<
      PaymentResultStatus,
      { title: string; body: string }
    > = {
      paid: {
        title: isVi ? "Thanh toán thành công!" : "Payment successful!",
        body: isVi
          ? "Thanh toán đã thành công, hệ thống đang hoàn tất tạo đơn hàng."
          : "Payment succeeded and the system is finalizing your order.",
      },
      pending: {
        title: isVi ? "Đang chờ xác nhận thanh toán" : "Waiting for payment confirmation",
        body: isVi
          ? "Đơn hàng chưa được tạo vì hệ thống chưa nhận xác nhận thanh toán thành công từ payOS."
          : "The order has not been created yet because the system has not received a successful payment confirmation from payOS.",
      },
      cancelled: {
        title: isVi ? "Bạn đã hủy thanh toán" : "Payment was cancelled",
        body: isVi
          ? "Đơn hàng chưa được tạo. Giỏ hàng của bạn vẫn được giữ nguyên để bạn thử lại."
          : "The order was not created. Your cart is still preserved so you can try again.",
      },
      expired: {
        title: isVi ? "Liên kết thanh toán đã hết hạn" : "Payment link expired",
        body: isVi
          ? "Đơn hàng chưa được tạo vì liên kết payOS đã hết hạn."
          : "The order was not created because the payOS payment link expired.",
      },
      failed: {
        title: isVi ? "Không xác minh được thanh toán" : "Could not verify payment",
        body: isVi
          ? "Đơn hàng chưa được tạo do chưa thể đối chiếu thanh toán. Vui lòng thử lại hoặc liên hệ shop."
          : "The order was not created because the payment could not be verified. Please try again or contact the shop.",
      },
    };

    const content = paymentMessages[paymentReturn.status];

    return (
      <div className={styles.successState}>
        <AlertCircle size={64} className={styles.successIcon} />
        <h2>{content.title}</h2>
        <p className={styles.orderId}>
          {isVi ? "Mã phiên thanh toán" : "Payment Session"}:{" "}
          <strong>{paymentReturn.sessionId}</strong>
        </p>
        <p className={styles.successMessage}>{content.body}</p>
        <div className={styles.successActions}>
          <button onClick={() => onNavigate?.("cart")} className={styles.homeBtn}>
            {isVi ? "Quay lại giỏ hàng" : "Back to cart"}
          </button>
          <button onClick={() => onNavigate?.("products")} className={styles.shopBtn}>
            {isVi ? "Xem sản phẩm" : "Browse products"}
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0 && !orderSuccess) {
    return (
      <div className={styles.emptyState}>
        <AlertCircle size={48} />
        <h2>{isVi ? "Giỏ hàng trống" : "Cart is empty"}</h2>
        <p>
          {isVi
            ? "Vui lòng thêm sản phẩm trước khi thanh toán"
            : "Please add products before checkout"}
        </p>
        <button onClick={() => onNavigate?.("products")} className={styles.backBtn}>
          {isVi ? "Xem sản phẩm" : "Browse products"}
        </button>
      </div>
    );
  }

  if (orderSuccess) {
    return (
      <div className={styles.successState}>
        <CheckCircle size={64} className={styles.successIcon} />
        <h2>
          {orderSuccess.paymentMethod === "bank_transfer"
            ? isVi
              ? "Thanh toán thành công!"
              : "Payment successful!"
            : isVi
              ? "Đặt hàng thành công!"
              : "Order placed successfully!"}
        </h2>
        <p className={styles.orderId}>
          {isVi ? "Mã đơn hàng" : "Order ID"}: <strong>{orderSuccess.orderId}</strong>
        </p>
        <p className={styles.successMessage}>
          {orderSuccess.paymentMethod === "bank_transfer"
            ? isVi
              ? "Đơn hàng chỉ vừa được tạo sau khi thanh toán payOS thành công, và email xác nhận đã được gửi theo luồng này."
              : "The order was only created after the payOS payment succeeded, and the confirmation email was sent in that flow."
            : isVi
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
            <label htmlFor="customerName">{isVi ? "Họ và tên" : "Full name"} *</label>
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
              <label htmlFor="customerPhone">{isVi ? "Số điện thoại" : "Phone"} *</label>
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
                <strong>
                  {isVi ? "Thanh toán khi nhận hàng (COD)" : "Cash on Delivery (COD)"}
                </strong>
                <small>
                  {isVi
                    ? "Thanh toán bằng tiền mặt khi nhận hàng"
                    : "Pay with cash upon delivery"}
                </small>
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
                  {isVi ? "Thanh toán qua cổng payOS" : "Pay through payOS"}
                </small>
              </span>
            </label>

            {formData.paymentMethod === "bank_transfer" && (
              <div className={styles.bankInfo}>
                <p>
                  {isVi
                    ? "Sau khi bấm đặt hàng, bạn sẽ được chuyển sang payOS. Đơn hàng chỉ được tạo sau khi thanh toán thành công."
                    : "After placing the request, you will be redirected to payOS. The order will only be created after the payment succeeds."}
                </p>
              </div>
            )}
          </div>

          <h2 className={styles.sectionTitle}>
            {isVi ? "Địa chỉ giao hàng" : "Shipping Address"}
          </h2>

          <div className={styles.shippingAddress}>
            <p>
              {isVi
                ? "Cơ sở B, 279 Nguyễn Tri Phương, Phường Diên Hồng, TP. Hồ Chí Minh"
                : "Campus B, 279 Nguyen Tri Phuong, Dien Hong Ward, Ho Chi Minh City"}
            </p>
          </div>

          {error && (
            <div className={styles.errorMessage}>
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <div
            style={{
              position: "absolute",
              left: "-9999px",
              opacity: 0,
              height: 0,
              overflow: "hidden",
            }}
            aria-hidden="true"
          >
            <label htmlFor="_hp">Leave this empty</label>
            <input
              type="text"
              id="_hp"
              name="_hp"
              value={formData._hp}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
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
            ) : isVi ? (
              "Đặt hàng"
            ) : (
              "Place Order"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
