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
      className="min-h-screen font-sans selection:bg-[#808000]/20 selection:text-[#5C4033] relative overflow-hidden"
      style={{
        // Strong, clearly visible pastel background
        background: `
          radial-gradient(1200px 760px at 10% 12%, rgba(244,163,180,0.65) 0%, rgba(244,163,180,0.18) 52%, rgba(244,163,180,0.00) 74%),
          radial-gradient(980px 720px at 90% 14%, rgba(255,166,196,0.52) 0%, rgba(255,166,196,0.14) 55%, rgba(255,166,196,0.00) 76%),
          radial-gradient(1200px 900px at 52% 95%, rgba(255,214,224,0.68) 0%, rgba(255,214,224,0.18) 58%, rgba(255,214,224,0.00) 80%),
          linear-gradient(180deg, #FFD7E3 0%, #FFF0F6 32%, #FFF8FB 68%, #FFE8F1 100%)
        `,
      }}
    >
      {/* ✅ HARD OVERRIDE: removes boring flat cream sections inside main */}
      <style>{`
        /* Many of your "boring gray" areas come from bg-[#FDFBF7] containers. 
           This makes them transparent so the pink gradient shows through. */
        main .bg-\$begin:math:display$\\\\\#FDFBF7\\$end:math:display$ {
          background-color: transparent !important;
        }
      `}</style>

      {/* Extra dreamy overlay texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(900px 520px at 30% 40%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.00) 62%),
            radial-gradient(860px 500px at 70% 55%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.00) 65%),
            linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.00) 35%, rgba(255,255,255,0.08) 70%, rgba(255,255,255,0.00) 100%)
          `,
          mixBlendMode: "soft-light",
          opacity: 0.95,
        }}
      />

      {/* Keep content above overlays */}
      <div className="relative z-10">
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
    </div>
  );
};

export default App;
