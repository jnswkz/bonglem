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
  paymentMethod: "cod" | "bank_transfer";
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderResponse {
  message: string;
  orderId: string;
  order: Order;
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
  getById: async (id: string): Promise<Order> => {
    return api.get<Order>(`/orders/${id}`);
  },
};
