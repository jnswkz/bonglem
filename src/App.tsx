import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SplashScreen } from "./components/SplashScreen";
import { motion, AnimatePresence } from "motion/react";

import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Wir lassen deine Navigation-Props am Header dran,
  // aber halten das App minimal stabil für den Deploy.
  const [currentPage, setCurrentPage] = useState<
    "home" | "story" | "products" | "detail" | "feedback" | "contact" | "cart" | "checkout"
  >("home");

  // Platzhalter (Header erwartet cartCount)
  const cartCount = 0;

  useEffect(() => {
    if (!isLoading) window.scrollTo(0, 0);
  }, [currentPage, isLoading]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#808000]/20 selection:text-[#5C4033]">
      <AnimatePresence>
        {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={!isLoading ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Header onNavigate={setCurrentPage} currentPage={currentPage} cartCount={cartCount} />

        <main>
          {/* HomePage ist jetzt live – du siehst sofort die neue Homepage */}
          <HomePage />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
