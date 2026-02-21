import { api } from "./client";

export interface Product {
  _id: string;
  id: string;
  name: string;
  nameEn?: string;
  sku?: string;
  price: number;
  formattedPrice: string;
  stock: number;
  status: "active" | "draft" | "archived";
  imageUrl: string;
  images?: string[];
  description: string;
  descriptionEn?: string;
  category: "love" | "baby" | "special" | "other";
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  category?: string;
  status?: string;
  search?: string;
}

export const productApi = {
  /**
   * Get all products with optional filters
   */
  getAll: async (filters?: ProductFilters): Promise<Product[]> => {
    const params = new URLSearchParams();
    if (filters?.category) params.set("category", filters.category);
    if (filters?.status) params.set("status", filters.status);
    if (filters?.search) params.set("search", filters.search);
    
    const query = params.toString();
    const path = query ? `/products?${query}` : "/products";
    return api.get<Product[]>(path);
  },

  /**
   * Get a single product by ID
   */
  getById: async (id: string): Promise<Product> => {
    return api.get<Product>(`/products/${id}`);
  },

  /**
   * Get products by category
   */
  getByCategory: async (category: string): Promise<Product[]> => {
    return api.get<Product[]>(`/products?category=${category}`);
  },
};
