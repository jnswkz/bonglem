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
    <div className="min-h-screen font-sans selection:bg-[#808000]/20 selection:text-[#5C4033] relative">
      {/* ✅ Base background (behind everything) */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #F8D7E2 0%, #F4C8D7 35%, #F8E3EC 68%, #FFF6FA 100%)",
        }}
      />

      {/* ✅ STRONG GLOBAL TINT (above all white sections, but does not block clicks) */}
      <div
        className="fixed inset-0 z-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(1200px 850px at 10% 15%, rgba(244,163,180,0.95) 0%, rgba(244,163,180,0.45) 45%, rgba(244,163,180,0.00) 78%),
            radial-gradient(1200px 900px at 92% 18%, rgba(255,184,204,0.90) 0%, rgba(255,184,204,0.40) 48%, rgba(255,184,204,0.00) 82%),
            radial-gradient(1400px 950px at 50% 92%, rgba(255,214,224,0.95) 0%, rgba(255,214,224,0.40) 55%, rgba(255,214,224,0.00) 86%),
            linear-gradient(180deg, rgba(244,163,180,0.35) 0%, rgba(255,228,236,0.20) 45%, rgba(255,246,250,0.15) 75%, rgba(244,163,180,0.28) 100%)
          `,
          opacity: 0.95,          // ✅ VERY visible
          mixBlendMode: "multiply" // ✅ tints even solid white backgrounds
        }}
      />

      <AnimatePresence>
        {isLoading && (
          <SplashScreen onComplete={() => setIsLoading(false)} language={language} />
        )}
      </AnimatePresence>

      {/* ✅ App content above background, below tint */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={!isLoading ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Header onNavigate={handleNavigate} currentPage={currentPage} cartCount={cartCount} />

        <main>
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
        </main>

        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
