// src/GAListener.tsx
import { useEffect } from "react";
import type { Page } from "./pageTypes";
import { pageview } from "./ga";

type GAListenerProps = {
  page: Page;
  productId?: string | null;
};

export function GAListener({ page, productId }: GAListenerProps) {
  useEffect(() => {
    const path =
      page === "home"
        ? "/"
        : page === "detail" && productId
          ? `/product/${productId}`
          : `/${page}`;

    pageview(path);
  }, [page, productId]);

  return null;
}
