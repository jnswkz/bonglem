import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ProductCard } from './components/ProductCard';
import { CollectionCard } from './components/CollectionCard';
import { FeedbackCard, type FeedbackCardProps } from './components/FeedbackCard';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { SplashScreen } from './components/SplashScreen';
import { MapPin, Phone, Mail, Instagram, Facebook, ChevronLeft, Heart, Share2, Filter, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'story' | 'products' | 'detail' | 'feedback' | 'contact' | 'cart' | 'checkout'>('home');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cart, setCart] = useState<{ id: number; name: string; price: string; image: string; qty: number }[]>([]);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [currentPage, isLoading]);

  // Mock Data
  const products = [
    { id: 1, name: 'Set Nến Thơm "Mùa Thu"', price: '350.000', image: 'https://images.unsplash.com/photo-1723746111561-3c6c9d4b43dc?q=80&w=1080', category: 'set' },
    { id: 2, name: 'Búp Bê Crochet Thỏ Con', price: '180.000', image: 'https://images.unsplash.com/photo-1629019317873-3f603b269723?q=80&w=1080', category: 'crochet' },
    { id: 3, name: 'Xà Phòng Thảo Mộc Tự Nhiên', price: '85.000', image: 'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=1080', category: 'soap' },
    { id: 4, name: 'Set Trà & Hoa Khô', price: '220.000', image: 'https://images.unsplash.com/photo-1741308478105-be6d989f3b19?q=80&w=1080', category: 'set' },
    { id: 5, name: 'Túi Tote Thêu Tay Olive', price: '150.000', image: 'https://images.unsplash.com/photo-1673252413885-a3d44c339621?q=80&w=1080', category: 'handmade' },
    { id: 6, name: 'Hộp Quà Gỗ Handmade', price: '450.000', image: 'https://images.unsplash.com/photo-1701943896527-334158c81021?q=80&w=1080', category: 'box' },
  ];

  const collections = [
    { id: 1, title: 'Set Yêu Thương', image: 'https://images.unsplash.com/photo-1723746111561-3c6c9d4b43dc?q=80&w=1080' },
    { id: 2, title: 'Set Cho Bé', image: 'https://images.unsplash.com/photo-1629019317873-3f603b269723?q=80&w=1080' },
    { id: 6, title: 'Set Đặc Biệt', image: 'https://images.unsplash.com/photo-1701943896527-334158c81021?q=80&w=1080' },
  ];

  const feedbacks: FeedbackCardProps[] = [
    { type: 'text', content: 'Gói quà cực kỳ xinh và có tâm luôn. Người nhận rất thích, cảm ơn Bông Lém nhiều!', author: 'Mai Anh' },
    { type: 'chat', content: 'Shop ơi mình nhận được nến rồi, mùi thơm cực kỳ dễ chịu luôn ạ!' },
    { type: 'image', image: 'https://images.unsplash.com/photo-1701943896527-334158c81021?q=80&w=1080' },
    { type: 'text', content: 'Sản phẩm handmade mà độ hoàn thiện cao quá. Rất đáng tiền.', author: 'Hoàng Long' },
    { type: 'chat', content: 'Set quà cho bé yêu lắm shop ạ, vải mềm mịn thích cực.' },
    { type: 'image', image: 'https://images.unsplash.com/photo-1723746111561-3c6c9d4b43dc?q=80&w=1080' },
    { type: 'text', content: 'Đúng gu nhẹ nhàng mình tìm bấy lâu. Sẽ ủng hộ shop dài dài.', author: 'Thanh Thảo' },
    { type: 'image', image: 'https://images.unsplash.com/photo-1629019317873-3f603b269723?q=80&w=1080' },
  ];

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
        .map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

const renderHome = () => <HomePage />;

  const renderStory = () => (
    <div className="pb-24">
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1673252413885-a3d44c339621?q=80&w=1080" 
          alt="Workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#5C4033]/30 flex items-center justify-center p-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg">Câu chuyện của Bông Lém</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 space-y-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-[#5C4033]">Bông Lém bắt đầu từ đâu?</h2>
            <p className="text-lg text-[#5C4033]/80 leading-relaxed">
              Bắt đầu từ một căn phòng nhỏ tràn ngập nắng và những cuộn len sắc màu, Bông Lém ra đời với khao khát mang những tâm tình gói ghém vào từng mũi kim, sợi chỉ. Chúng mình tin rằng mỗi sản phẩm handmade đều có linh hồn riêng, một linh hồn ấm áp mà máy móc chẳng thể nào thay thế được.
            </p>
          </div>
          <div className="flex-1 aspect-square rounded-[40px] overflow-hidden shadow-xl">
             <ImageWithFallback src="https://images.unsplash.com/photo-1629019317873-3f603b269723?q=80&w=1080" alt="Start" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-[#5C4033]">Vì sao Bông Lém ra đời?</h2>
            <p className="text-lg text-[#5C4033]/80 leading-relaxed">
              Trong guồng quay hối hả của cuộc sống hiện đại, đôi khi chúng ta quên mất cách dành cho nhau những điều nhỏ nhặt nhưng chân thành. Bông Lém ra đời để trở thành cầu nối, giúp bạn gửi gắm yêu thương qua những món quà thủ công tỉ mỉ, đầy sự trân trọng.
            </p>
          </div>
          <div className="flex-1 aspect-square rounded-[40px] overflow-hidden shadow-xl">
             <ImageWithFallback src="https://images.unsplash.com/photo-1723746111561-3c6c9d4b43dc?q=80&w=1080" alt="Why" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-center space-y-8 py-20 border-y border-[#5C4033]/10">
          <p className="text-2xl md:text-3xl font-serif text-[#5C4033] leading-relaxed max-w-2xl mx-auto">
            “Bông Lém tin rằng... Những món quà nhỏ có thể mang lại niềm vui rất to.”
          </p>
          <div className="flex justify-center">
            <Button onClick={() => setCurrentPage('products')}>Xem những món quà nhỏ</Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div>
          <h1 className="text-4xl font-serif font-bold text-[#5C4033] mb-2">Sản phẩm của Bông Lém</h1>
          <p className="text-[#5C4033]/60">Nơi tìm thấy những món quà đong đầy tâm tình</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {['Tất cả', 'Theo set', 'Theo dịp', 'Handmade', 'Mới về'].map((chip, i) => (
            <button 
              key={i} 
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-all ${
                i === 0 ? 'bg-[#808000] text-white border-[#808000]' : 'bg-white text-[#5C4033]/70 border-[#5C4033]/10 hover:border-[#808000]/30'
              }`}
            >
              {chip}
            </button>
          ))}
          <button className="p-2 rounded-full border border-[#5C4033]/10 text-[#5C4033]/70 hover:bg-[#F5F1E9]">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
        {products.map((p) => (
          <ProductCard 
            key={p.id} 
            {...p} 
            onViewDetail={() => {
              setSelectedProduct(p);
              setCurrentPage('detail');
            }}
          />
        ))}
        {/* Fill more cards to make it 12 as requested */}
        {[...Array(6)].map((_, i) => (
          <ProductCard 
            key={i + 10} 
            image={products[i % products.length].image} 
            name={`${products[i % products.length].name} v.${i+1}`} 
            price={products[i % products.length].price} 
            onViewDetail={() => {
              setSelectedProduct(products[i % products.length]);
              setCurrentPage('detail');
            }}
          />
        ))}
      </div>
    </div>
  );

  const renderDetail = () => {
    const product = selectedProduct || products[0];
    return (
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto space-y-24">
        <button 
          onClick={() => setCurrentPage('products')}
          className="flex items-center gap-2 text-[#5C4033]/60 hover:text-[#808000] transition-colors font-medium mb-8"
        >
          <ChevronLeft size={20} /> Quay lại danh sách
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-6">
            <div className="aspect-square rounded-[40px] overflow-hidden bg-[#F5F1E9] shadow-lg">
              <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${i === 1 ? 'border-[#808000]' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                  <ImageWithFallback src={product.image} alt="Thumb" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#808000] font-bold text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#808000]" />
                {product.category || 'Handmade'}
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5C4033]">{product.name}</h1>
              <p className="text-2xl font-serif text-[#808000] font-bold">{product.price}đ</p>
            </div>

            <div className="space-y-6 text-[#5C4033]/80 leading-relaxed">
              <p>Mỗi món quà tại Bông Lém đều được chăm chút tỉ mỉ từ khâu lựa chọn nguyên liệu đến đóng gói. Chúng mình hy vọng sự chân thành này sẽ chạm đến trái tim người nhận.</p>
              <div className="bg-[#F5F1E9] p-6 rounded-3xl space-y-3">
                <h3 className="font-bold text-[#5C4033] uppercase text-xs tracking-widest">Ý nghĩa sản phẩm</h3>
                <p className="text-sm italic">“Một chút hương thơm dịu nhẹ để sưởi ấm những ngày đông buốt giá, như cái ôm ấm áp của một người bạn thân.”</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="flex-1 text-lg"
                onClick={() => addToCart(product)}
              >
                Mua ngay
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <MessageCircle size={20} /> Inbox tư vấn
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6 text-[#5C4033]/40 border-t border-[#5C4033]/10">
              <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors text-sm font-medium">
                <Heart size={18} /> Lưu lại
              </button>
              <button className="flex items-center gap-1.5 hover:text-[#808000] transition-colors text-sm font-medium">
                <Share2 size={18} /> Chia sẻ
              </button>
            </div>
          </div>
        </div>

        {/* Suggested Section */}
        <section className="pt-24 border-t border-[#5C4033]/10">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#5C4033]">Có thể bạn cũng thích</h2>
            <button className="text-sm font-bold text-[#808000] hover:opacity-70 transition-opacity">Xem thêm</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} {...p} onViewDetail={() => { setSelectedProduct(p); window.scrollTo(0, 0); }} />
            ))}
          </div>
        </section>
      </div>
    );
  };

  const renderFeedback = () => (
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#5C4033]">Khách thương nói gì về Bông Lém?</h1>
        <p className="text-[#5C4033]/60 max-w-lg mx-auto">Mỗi lời khen, mỗi tấm hình của các bạn là động lực rất lớn để Bông Lém tiếp tục sáng tạo.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
        {feedbacks.map((fb, idx) => (
          <FeedbackCard 
            key={idx} 
            {...fb} 
            className={`${idx % 5 === 0 ? 'lg:col-span-2' : ''} ${idx % 7 === 0 ? 'lg:row-span-2' : ''}`}
          />
        ))}
      </div>
    </div>
  );

  const renderContact = () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitted(true);
      // Optional: Reset form after some time
      setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#5C4033]">Liên hệ với Bông Lém</h1>
              <p className="text-lg text-[#5C4033]/70 leading-relaxed max-w-md">
                Chúng mình luôn sẵn lòng lắng nghe những tâm tình hoặc giải đáp thắc mắc của bạn về những món quà nhỏ.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5F1E9] flex items-center justify-center text-[#808000] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#5C4033] mb-1">Địa chỉ nhà Bông</h3>
                  <p className="text-sm text-[#5C4033]/70">123 Đường Cánh Hoa, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5F1E9] flex items-center justify-center text-[#808000] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#5C4033] mb-1">Số điện thoại</h3>
                  <p className="text-sm text-[#5C4033]/70">0987 654 321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5F1E9] flex items-center justify-center text-[#808000] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#5C4033] mb-1">Email</h3>
                  <p className="text-sm text-[#5C4033]/70">chao@bonglem.vn</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#5C4033]/10">
              <h3 className="font-bold text-[#5C4033] mb-4 uppercase text-xs tracking-widest">Ghé thăm Bông Lém tại</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-[#5C4033]/10 flex items-center justify-center hover:bg-[#808000] hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-[#5C4033]/10 flex items-center justify-center hover:bg-[#808000] hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-[#5C4033]/5 min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-2xl font-serif font-bold text-[#5C4033]">Gửi lời thương cho Bông</h2>
                    <p className="text-sm text-[#5C4033]/50 italic">Chúng mình sẽ phản hồi bạn thật sớm nhé 🌼</p>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#5C4033]/60 ml-1">Tên của bạn</label>
                      <input required type="text" placeholder="Nhập tên..." className="w-full bg-[#FDFBF7] border border-[#5C4033]/10 px-6 py-3 rounded-2xl focus:outline-none focus:border-[#808000] transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#5C4033]/60 ml-1">Email hoặc SĐT</label>
                      <input required type="text" placeholder="Nhập thông tin liên hệ..." className="w-full bg-[#FDFBF7] border border-[#5C4033]/10 px-6 py-3 rounded-2xl focus:outline-none focus:border-[#808000] transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#5C4033]/60 ml-1">Lời nhắn</label>
                      <textarea required rows={4} placeholder="Bạn muốn nói gì với Bông..." className="w-full bg-[#FDFBF7] border border-[#5C4033]/10 px-6 py-4 rounded-3xl focus:outline-none focus:border-[#808000] transition-colors resize-none"></textarea>
                    </div>
                    <Button fullWidth className="py-4 text-lg">Gửi đi 🌼</Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-[#808000]/10 text-[#808000] rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="text-4xl"
                    >
                      🌼
                    </motion.span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif font-bold text-[#5C4033]">Cảm ơn bạn nhé!</h2>
                    <p className="text-[#5C4033]/70 leading-relaxed">
                      Lời thương của bạn đã được gửi tới Bông Lém rồi.<br/>
                      Chúng mình sẽ phản hồi bạn thật sớm qua thông tin bạn đã để lại.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-bold text-[#808000] border-b border-[#808000] pb-1 hover:opacity-70 transition-opacity"
                  >
                    Gửi thêm một lời nhắn khác
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  };

  const renderCartPage = () => {
    const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
    return (
      <div className="px-6 md:px-12 py-12 max-w-5xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-serif font-bold text-[#5C4033]">Giỏ hàng</h1>
          <button className="text-sm text-[#808000] underline" onClick={() => setCurrentPage('products')}>
            Tiếp tục xem sản phẩm
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white border border-[#5C4033]/10 rounded-3xl p-10 text-center space-y-4 shadow-sm">
            <p className="text-xl text-[#5C4033]/70">Giỏ hàng trống. Hãy chọn “Mua ngay”.</p>
            <Button onClick={() => setCurrentPage('products')}>Xem sản phẩm</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-2xl border border-[#5C4033]/10 bg-white shadow-sm">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden bg-[#F5F1E9]">
                    <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-[#5C4033]">{item.name}</p>
                        <p className="text-sm text-[#808000] font-semibold">{item.price}đ</p>
                      </div>
                      <button className="text-xs text-[#5C4033]/50 hover:text-red-500" onClick={() => removeItem(item.id)}>
                        Xóa
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="w-9 h-9 rounded-full border border-[#5C4033]/20" onClick={() => updateQty(item.id, -1)}>-</button>
                      <span className="w-10 text-center font-medium text-[#5C4033]">{item.qty}</span>
                      <button className="w-9 h-9 rounded-full border border-[#5C4033]/20" onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-[#5C4033]/10 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#5C4033]">Tóm tắt</h3>
              <div className="flex justify-between text-sm text-[#5C4033]/80">
                <span>Số lượng</span>
                <span className="font-semibold text-[#5C4033]">{totalItems}</span>
              </div>
              <Button fullWidth className="py-3" onClick={() => setCurrentPage('checkout')}>
                Tiến hành thanh toán
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCheckoutPage = () => {
    const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
    return (
      <div className="px-6 md:px-12 py-12 max-w-5xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-serif font-bold text-[#5C4033]">Thanh toán</h1>
          <button className="text-sm text-[#808000] underline" onClick={() => setCurrentPage('cart')}>
            Quay lại giỏ hàng
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-[#5C4033]/10 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-semibold text-[#5C4033]">Thông tin giao hàng</h3>
              <input placeholder="Họ tên" className="w-full px-4 py-3 rounded-2xl border border-[#5C4033]/15 bg-[#FDFBF7]" />
              <input placeholder="Số điện thoại" className="w-full px-4 py-3 rounded-2xl border border-[#5C4033]/15 bg-[#FDFBF7]" />
              <input placeholder="Email (tùy chọn)" className="w-full px-4 py-3 rounded-2xl border border-[#5C4033]/15 bg-[#FDFBF7]" />
              <textarea placeholder="Địa chỉ giao hàng" className="w-full px-4 py-3 rounded-2xl border border-[#5C4033]/15 bg-[#FDFBF7]" rows={3} />
            </div>
            <div className="bg-white border border-[#5C4033]/10 rounded-3xl p-6 shadow-sm space-y-3">
              <h3 className="text-lg font-semibold text-[#5C4033]">Phương thức thanh toán</h3>
              <label className="flex items-center gap-3 p-3 border border-[#5C4033]/15 rounded-2xl cursor-pointer">
                <input type="radio" name="pay" defaultChecked /> <span>COD - Thanh toán khi nhận hàng</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-[#5C4033]/15 rounded-2xl cursor-pointer">
                <input type="radio" name="pay" /> <span>Chuyển khoản ngân hàng</span>
              </label>
            </div>
          </div>

          <div className="bg-white border border-[#5C4033]/10 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-semibold text-[#5C4033]">Đơn hàng</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-[#5C4033]/80">
                <span>{item.name} x {item.qty}</span>
                <span className="font-semibold text-[#5C4033]">{item.price}đ</span>
              </div>
            ))}
            <div className="pt-3 border-t border-[#5C4033]/10 flex justify-between text-sm text-[#5C4033] font-semibold">
              <span>Tổng số lượng</span>
              <span>{totalItems}</span>
            </div>
            <Button fullWidth className="py-3">Đặt hàng</Button>
          </div>
        </div>
      </div>
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#808000]/20 selection:text-[#5C4033]">
      <AnimatePresence>
        {isLoading && (
          <SplashScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, filter: 'blur(12px)' }}
        animate={!isLoading ? { opacity: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
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
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentPage === 'home' && renderHome()}
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
      </motion.div>
    </div>
  );
};

export default App;
