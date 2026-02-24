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
    <div
      className="min-h-screen font-sans selection:bg-[#808000]/20 selection:text-[#5C4033]"
      style={{
        background: `
          radial-gradient(900px 520px at 12% 10%, rgba(244,163,180,0.28) 0%, rgba(244,163,180,0.00) 60%),
          radial-gradient(820px 520px at 88% 14%, rgba(244,163,180,0.20) 0%, rgba(244,163,180,0.00) 55%),
          radial-gradient(980px 720px at 45% 92%, rgba(255,214,224,0.32) 0%, rgba(255,214,224,0.00) 62%),
          linear-gradient(180deg, #FFF7FA 0%, #FDFBF7 55%, #FFF7FA 100%)
        `,
      }}
    >
      <AnimatePresence>
        {isLoading && (
          <SplashScreen
            onComplete={() => setIsLoading(false)}
            language={language}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={!isLoading ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Header
          onNavigate={handleNavigate}
          currentPage={currentPage}
          cartCount={cartCount}
        />

        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
            >
              {currentPage === "home" && (
                <HomePage onNavigate={handleNavigate} />
              )}
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
              {currentPage === "cart" && (
                <CartPage onNavigate={handleNavigate} />
              )}
              {currentPage === "checkout" && (
                <CheckoutPage onNavigate={handleNavigate} />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
