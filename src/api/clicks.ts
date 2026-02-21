import { api } from "./client";

export interface ClickResponse {
  success: boolean;
  productId: string;
  clickCount: number;
  lastClickedAt: string;
}

export const clickApi = {
  /**
   * Track a product view/click
   */
  trackView: async (productId: string): Promise<ClickResponse> => {
    return api.post<ClickResponse>(`/clicks/${productId}`, {});
  },

  /**
   * Get click count for a product
   */
  getCount: async (productId: string): Promise<{ productId: string; clickCount: number }> => {
    return api.get(`/clicks/${productId}`);
  },
};
