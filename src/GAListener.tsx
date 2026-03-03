// src/GAListener.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "./ga";

export function GAListener() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    pageview(path);
  }, [location]);

  return null;
}