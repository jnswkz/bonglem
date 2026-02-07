import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SplashScreen } from "./components/SplashScreen";
import { motion, AnimatePresence } from "motion/react";

import HomePage from "./pages/HomePage";
import FeedbackPage from "./pages/FeedbackPage";
import ContactPage from "./pages/ContactPage";

export type PageKey =
  | "home"
  | "story"
  | "products"
  | "detail"
  | "feedback"
  | "contact"
  | "cart"
  | "checkout";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageKey>("home");

  useEffect(() => {
    if (!isLoading) window.scrollTo(0, 0);
  }, [currentPage, isLoading]);

  const cartCount = 0;

  const Placeholder = ({ title }: { title: string }) => (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[#5C4033]">{title}</h1>
      <p className="mt-2 text-[#5C4033]/70">
        Seite ist verlinkt – Inhalt bauen wir als nächstes.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans">
      <AnimatePresence>
        {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={!isLoading ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Header
          onNavigate={setCurrentPage}
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
              {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
              {currentPage === "feedback" && <FeedbackPage />}
              {currentPage === "contact" && <ContactPage />}

              {currentPage === "story" && <Placeholder title="Story" />}
              {currentPage === "products" && <Placeholder title="Products" />}
              {currentPage === "detail" && <Placeholder title="Product Detail" />}
              {currentPage === "cart" && <Placeholder title="Cart" />}
              {currentPage === "checkout" && <Placeholder title="Checkout" />}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
