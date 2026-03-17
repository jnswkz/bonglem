import { api } from "./client";

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export interface CreateOrderRequest {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  facebookLink?: string;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
  note?: string;
  paymentMethod?: "cod" | "bank_transfer";
  _hp?: string; // Honeypot field for spam protection
}

export type PaymentMethod = "cod" | "bank_transfer";
export type PaymentStatus = "unpaid" | "pending" | "paid" | "cancelled" | "expired" | "failed";

export interface PayOSPaymentInfo {
  orderCode?: number | null;
  paymentLinkId?: string | null;
  checkoutUrl?: string | null;
  qrCode?: string | null;
  status?: string | null;
  expiredAt?: number | null;
  amountPaid?: number;
  paidAt?: string | null;
}

export interface Order {
  _id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  facebookLink?: string;
  items: OrderItem[];
  subtotal: number;
  total: number;
  status: "pending" | "confirmed" | "shipping" | "completed" | "cancelled";
  note?: string;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  customerConfirmationEmailSentAt?: string | null;
  payos?: PayOSPaymentInfo;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderResponse {
  message: string;
  sessionId: string | null;
  orderId: string | null;
  order: Order | null;
  payment: {
    status: PaymentStatus | null;
    checkoutUrl: string | null;
    qrCode: string | null;
    paymentLinkId: string | null;
    orderCode: number | null;
  } | null;
}

export interface PaymentSessionResponse {
  sessionId: string;
  paymentStatus: PaymentStatus;
  orderId: string | null;
  order: Order | null;
  payment: {
    status: PaymentStatus | null;
    checkoutUrl: string | null;
    qrCode: string | null;
    paymentLinkId: string | null;
    orderCode: number | null;
  } | null;
}

export const orderApi = {
  /**
   * Create a new order (checkout)
   */
  create: async (data: CreateOrderRequest): Promise<CreateOrderResponse> => {
    return api.post<CreateOrderResponse>("/orders", data);
  },

  /**
   * Get order by ID (for order confirmation page)
   */
  getById: async (id: string, options?: { syncPayment?: boolean }): Promise<Order> => {
    const params = new URLSearchParams();
    if (options?.syncPayment) {
      params.set("syncPayment", "true");
    }

    const query = params.toString();
    return api.get<Order>(`/orders/${id}${query ? `?${query}` : ""}`);
  },

  getPaymentSessionById: async (
    id: string,
    options?: { syncPayment?: boolean }
  ): Promise<PaymentSessionResponse> => {
    const params = new URLSearchParams();
    if (options?.syncPayment) {
      params.set("syncPayment", "true");
    }

    const query = params.toString();
    return api.get<PaymentSessionResponse>(
      `/orders/payment-session/${id}${query ? `?${query}` : ""}`
    );
  },
};
