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

  // ✅ Your target "main pink"
  const MAIN_PINK = "#F4A3B4";

  return (
    <div
      className="min-h-screen font-sans selection:bg-[#808000]/20 selection:text-[#5C4033] relative overflow-hidden"
      style={{
        // ✅ MUCH more visible pink/pastel background (based on your target color)
        background: `
          radial-gradient(1200px 800px at 12% 10%, rgba(244,163,180,0.95) 0%, rgba(244,163,180,0.25) 55%, rgba(244,163,180,0.00) 78%),
          radial-gradient(1100px 820px at 88% 18%, rgba(255,184,204,0.85) 0%, rgba(255,184,204,0.22) 56%, rgba(255,184,204,0.00) 80%),
          radial-gradient(1300px 900px at 50% 95%, rgba(255,214,224,0.95) 0%, rgba(255,214,224,0.25) 58%, rgba(255,214,224,0.00) 82%),
          linear-gradient(180deg, ${MAIN_PINK}33 0%, #FFE4EC 35%, #FFF6FA 70%, ${MAIN_PINK}22 100%)
        `,
      }}
    >
      {/* ✅ GLOBAL FIX: stop inner "gray/cream" sections from painting over the background */}
      <style>{`
        /* Make sure the page background applies to the whole app */
        html, body, #root { background: transparent !important; }

        /* A lot of your "boring gray" is just these backgrounds on wrappers/sections.
           We make them transparent inside MAIN so the gradient shows through. */
        main .bg-white,
        main .bg-neutral-50,
        main .bg-gray-50,
        main .bg-slate-50,
        main .bg-stone-50,
        main .bg-\$begin:math:display$\\\\\#FDFBF7\\$end:math:display$,
        main .bg-\$begin:math:display$\\\\\#FDFBF7\\$end:math:display$\\/\\*,
        main [style*="background-color: rgb(253, 251, 247)"],
        main [style*="background-color:#FDFBF7"],
        main [style*="background: #FDFBF7"],
        main [style*="background:#FDFBF7"] {
          background-color: transparent !important;
          background: transparent !important;
        }

        /* Keep your cards clean: if something becomes too transparent, it still stays readable */
        main .shadow,
        main .shadow-sm,
        main .shadow-md,
        main .shadow-lg {
          /* no change, just keeping cards visually separated */
        }
      `}</style>

      {/* Optional: soft glossy overlay so it looks “clean” not “flat” */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(900px 520px at 30% 40%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 62%),
            radial-gradient(860px 500px at 70% 55%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.00) 65%)
          `,
          mixBlendMode: "soft-light",
          opacity: 1,
        }}
      />

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
