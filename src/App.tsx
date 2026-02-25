import React, { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SplashScreen } from "./components/SplashScreen";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";

import HomePage from "./pages/HomePage";
import FeedbackPage from "./pages/FeedbackPage";
import ContactPage from "./pages/ContactPage";
import StoryPage from "./pages/StoryPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

import type { Page } from "./pageTypes";
import { useLanguage } from "./i18n/LanguageContext";
import { useCart } from "./store/CartContext";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const { language } = useLanguage();
  const { totalItems } = useCart();

  const handleNavigate = (page: string) => {
    if (isPageLoading) return;

    const isDetailTarget = page.startsWith("product/");
    const nextPage = isDetailTarget ? ("detail" as Page) : (page as Page);
    const nextProductId = isDetailTarget ? page.replace("product/", "") : null;

    const isSamePage =
      nextPage === currentPage &&
      (nextPage !== "detail" || nextProductId === selectedProductId);

    if (isSamePage) return;

    setIsPageLoading(true);

    window.setTimeout(() => {
      if (isDetailTarget) {
        setSelectedProductId(nextProductId);
        setCurrentPage("detail");
      } else {
        setCurrentPage(nextPage);
      }
    }, 220);
  };

  useEffect(() => {
    if (!isLoading) window.scrollTo(0, 0);
  }, [currentPage, isLoading]);

  useEffect(() => {
    if (!isPageLoading) return;
    const timer = window.setTimeout(() => setIsPageLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, [currentPage, isPageLoading]);

  useEffect(() => {
    if (isLoading) return;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (revealElements.length === 0) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      revealElements.forEach((el) => {
        el.classList.remove("reveal-pending");
        el.classList.add("is-revealed");
        el.style.setProperty("--reveal-delay", "0ms");
      });
      return;
    }

    const rafIds: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay || 0);
          const rafA = window.requestAnimationFrame(() => {
            const rafB = window.requestAnimationFrame(() => {
              el.style.setProperty("--reveal-delay", `${delay}ms`);
              el.classList.remove("reveal-pending");
              el.classList.add("is-revealed");
            });
            rafIds.push(rafB);
          });
          rafIds.push(rafA);
          observer.unobserve(el);
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -16% 0px",
      }
    );

    revealElements.forEach((el) => {
      el.classList.add("reveal-pending");
      el.classList.remove("is-revealed");
      el.style.setProperty("--reveal-delay", "0ms");
    });

    const rafObserve = window.requestAnimationFrame(() => {
      revealElements.forEach((el) => observer.observe(el));
    });
    rafIds.push(rafObserve);

    return () => {
      rafIds.forEach((id) => window.cancelAnimationFrame(id));
      observer.disconnect();
    };
  }, [currentPage, isLoading]);

  const cartCount = totalItems;

  return (
    <div className="min-h-screen bg-transparent font-sans selection:bg-[#808000]/20 selection:text-[#5C4033]">
      <AnimatePresence>
        {isLoading && (
          <SplashScreen onComplete={() => setIsLoading(false)} language={language} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={!isLoading ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-transparent"
      >
        <Header
          onNavigate={handleNavigate}
          currentPage={currentPage}
          cartCount={cartCount}
        />

        <AnimatePresence>
          {!isLoading && isPageLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 flex items-center justify-center bg-white/35 backdrop-blur-[2px]"
            >
              <div className="flex items-center gap-2 rounded-full border border-[#5C4033]/15 bg-white/85 px-5 py-3 text-[#5C4033] shadow-lg">
                <Loader2 size={18} className="animate-spin" />
                <span className="text-sm font-semibold">
                  {language === "vi" ? "Đang chuyển trang..." : "Loading page..."}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="bg-transparent">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-transparent"
            >
              {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
              {currentPage === "feedback" && <FeedbackPage />}
              {currentPage === "contact" && <ContactPage />}
              {currentPage === "story" && <StoryPage />}
              {currentPage === "products" && (
                <ProductsPage onNavigate={handleNavigate} />
              )}
              {currentPage === "detail" && selectedProductId && (
                <ProductDetailPage
                  productId={selectedProductId}
                  onNavigate={handleNavigate}
                />
              )}
              {currentPage === "cart" && <CartPage onNavigate={handleNavigate} />}
              {currentPage === "checkout" && (
                <CheckoutPage onNavigate={handleNavigate} />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </motion.div>
      <Analytics />
    </div>
  );
};

export default App;
