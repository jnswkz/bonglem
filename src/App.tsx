import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SplashScreen } from "./components/SplashScreen";
import { motion, AnimatePresence } from "motion/react";

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
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const { language } = useLanguage();
  const { totalItems } = useCart();

  const handleNavigate = (page: string) => {
    if (page.startsWith("product/")) {
      const productId = page.replace("product/", "");
      setSelectedProductId(productId);
      setCurrentPage("detail" as Page);
    } else {
      setCurrentPage(page as Page);
    }
  };

  useEffect(() => {
    if (!isLoading) window.scrollTo(0, 0);
  }, [currentPage, isLoading]);

  const cartCount = totalItems;

  return (
    <div className="min-h-screen font-sans selection:bg-[#808000]/20 selection:text-[#5C4033]">
      <AnimatePresence>
        {isLoading && (
          <SplashScreen onComplete={() => setIsLoading(false)} language={language} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={!isLoading ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Header onNavigate={handleNavigate} currentPage={currentPage} cartCount={cartCount} />

        {/* ✅ MAIN gets a visible pink/pastel tint overlay that affects even "solid" section backgrounds */}
        <main className="relative">
          {/* Overlay sits ABOVE the main content but doesn't block clicks */}
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              background: `
                radial-gradient(1200px 700px at 18% 10%, rgba(244,163,180,0.55) 0%, rgba(244,163,180,0.00) 60%),
                radial-gradient(1000px 700px at 85% 22%, rgba(255,190,210,0.45) 0%, rgba(255,190,210,0.00) 62%),
                radial-gradient(1200px 900px at 50% 95%, rgba(255,214,224,0.55) 0%, rgba(255,214,224,0.00) 70%),
                linear-gradient(180deg, rgba(244,163,180,0.18) 0%, rgba(255,228,236,0.16) 40%, rgba(255,246,250,0.12) 75%, rgba(244,163,180,0.14) 100%)
              `,
              opacity: 0.55,              // ✅ strong enough to be clearly visible
              mixBlendMode: "multiply",     // ✅ tints solid backgrounds without "washing out" text too hard
            }}
          />

          {/* Content stays clickable + readable */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
              >
                {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
                {currentPage === "feedback" && <FeedbackPage />}
                {currentPage === "contact" && <ContactPage />}

                {currentPage === "story" && <StoryPage />}
                {currentPage === "products" && <ProductsPage onNavigate={handleNavigate} />}
                {currentPage === "detail" && selectedProductId && (
                  <ProductDetailPage productId={selectedProductId} onNavigate={handleNavigate} />
                )}
                {currentPage === "cart" && <CartPage onNavigate={handleNavigate} />}
                {currentPage === "checkout" && <CheckoutPage onNavigate={handleNavigate} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
