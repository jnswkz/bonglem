// FORCE DEPLOY
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ProductCard } from './components/ProductCard';
import { CollectionCard } from './components/CollectionCard';
import { FeedbackCard, type FeedbackCardProps } from './components/FeedbackCard';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { SplashScreen } from './components/SplashScreen';
import HomePage from './pages/HomePage';

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ChevronLeft,
  Heart,
  Share2,
  Filter,
  MessageCircle,
} from 'lucide-react';

import { motion, AnimatePresence } from 'motion/react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<
    'home' | 'story' | 'products' | 'detail' | 'feedback' | 'contact' | 'cart' | 'checkout'
  >('home');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cart, setCart] = useState<
    { id: number; name: string; price: string; image: string; qty: number }[]
  >([]);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [currentPage, isLoading]);

  /* ---------------- MOCK DATA ---------------- */

  const products = [
    { id: 1, name: 'Set Nến Thơm "Mùa Thu"', price: '350.000', image: 'https://images.unsplash.com/photo-1723746111561-3c6c9d4b43dc?q=80&w=1080', category: 'set' },
    { id: 2, name: 'Búp Bê Crochet Thỏ Con', price: '180.000', image: 'https://images.unsplash.com/photo-1629019317873-3f603b269723?q=80&w=1080', category: 'crochet' },
    { id: 3, name: 'Xà Phòng Thảo Mộc Tự Nhiên', price: '85.000', image: 'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=1080', category: 'soap' },
    { id: 4, name: 'Set Trà & Hoa Khô', price: '220.000', image: 'https://images.unsplash.com/photo-1741308478105-be6d989f3b19?q=80&w=1080', category: 'set' },
    { id: 5, name: 'Túi Tote Thêu Tay Olive', price: '150.000', image: 'https://images.unsplash.com/photo-1673252413885-a3d44c339621?q=80&w=1080', category: 'handmade' },
    { id: 6, name: 'Hộp Quà Gỗ Handmade', price: '450.000', image: 'https://images.unsplash.com/photo-1701943896527-334158c81021?q=80&w=1080', category: 'box' },
  ];

  const feedbacks: FeedbackCardProps[] = [
    { type: 'text', content: 'Gói quà cực kỳ xinh và có tâm luôn.', author: 'Mai Anh' },
    { type: 'chat', content: 'Shop ơi mình nhận được nến rồi!' },
    { type: 'image', image: 'https://images.unsplash.com/photo-1701943896527-334158c81021?q=80&w=1080' },
  ];

  /* ---------------- CART LOGIC ---------------- */

  const addToCart = (product: { id: number; name: string; price: string; image: string }) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCurrentPage('cart');
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /* ---------------- OTHER PAGES (UNCHANGED) ---------------- */

  const renderStory = () => <div />;
  const renderProducts = () => <div />;
  const renderDetail = () => <div />;
  const renderFeedback = () => <div />;
  const renderContact = () => <div />;
  const renderCartPage = () => <div />;
  const renderCheckoutPage = () => <div />;

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <AnimatePresence>
        {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Header onNavigate={setCurrentPage} currentPage={currentPage} cartCount={cartCount} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'story' && renderStory()}
            {currentPage === 'products' && renderProducts()}
            {currentPage === 'detail' && renderDetail()}
            {currentPage === 'feedback' && renderFeedback()}
            {currentPage === 'contact' && renderContact()}
            {currentPage === 'cart' && renderCartPage()}
            {currentPage === 'checkout' && renderCheckoutPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
