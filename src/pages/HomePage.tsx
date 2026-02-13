import styles from "./HomePage.module.css";

import Hero from "../components/home/Hero";
import CategoryGrid from "../components/home/CategoryGrid";
import BestSellers from "../components/home/BestSellers";
import QuoteBand from "../components/home/QuoteBand";
import SocialProof from "../components/home/SocialProof";
import { useLanguage } from "../i18n/LanguageContext";

export type PageKey =
  | "home"
  | "story"
  | "products"
  | "detail"
  | "feedback"
  | "contact"
  | "cart"
  | "checkout";

export type HomePageProps = {
  onNavigate?: (page: PageKey) => void;
};

export default function HomePage(_props: HomePageProps) {
  const { language } = useLanguage();
  const isVi = language === "vi";

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="home" className={styles.section}>
          <Hero
            brand="BÔNG LÉM"
            headline={
              isVi
                ? "Những món quà nhỏ xinh - làm bằng cả tình yêu"
                : "Tiny gifts made with all our love"
            }
            subline={
              isVi
                ? "Quà handmade cho những khoảnh khắc ngọt ngào. Gói xinh, tặng là yêu."
                : "Handmade gifts for sweet moments. Gift-ready and heartfelt."
            }
            primaryCta={{
              label: isVi ? "Xem sản phẩm" : "Browse products",
              href: "#products",
            }}
            secondaryCta={{
              label: isVi ? "Câu chuyện" : "Our story",
              href: "#story",
            }}
            trustChips={
              isVi
                ? ["Handmade", "Gói quà đẹp", "Chat nhanh"]
                : ["Handmade", "Gift-ready", "Fast chat"]
            }
            heroImage={{ src: "/images/hero.jpg", alt: "Bông Lém hero image" }}
            mascotSticker={{ src: "/images/mascot-sticker.png", alt: "Mascot" }}
          />
        </section>

        <section id="products" className={styles.section}>
          <CategoryGrid
            heading={isVi ? "Sản phẩm của Bông Lém" : "Bong Lem collections"}
            viewAll={{ label: isVi ? "Xem tất cả" : "View all", href: "/products" }}
            categories={
              isVi
                ? [
                    {
                      title: "Set Yêu Thương",
                      image: "/images/cat-love.jpg",
                      href: "/products?cat=love",
                    },
                    {
                      title: "Set Cho Bé",
                      image: "/images/cat-baby.jpg",
                      href: "/products?cat=baby",
                    },
                    {
                      title: "Set Đặc Biệt",
                      image: "/images/cat-special.jpg",
                      href: "/products?cat=special",
                    },
                  ]
                : [
                    {
                      title: "Love Set",
                      image: "/images/cat-love.jpg",
                      href: "/products?cat=love",
                    },
                    {
                      title: "Baby Set",
                      image: "/images/cat-baby.jpg",
                      href: "/products?cat=baby",
                    },
                    {
                      title: "Special Set",
                      image: "/images/cat-special.jpg",
                      href: "/products?cat=special",
                    },
                  ]
            }
          />
        </section>

        <section className={styles.section}>
          <BestSellers
            heading={isVi ? "Bán chạy nhất" : "Best sellers"}
            subheading={
              isVi ? "Những set được yêu thích nhất tuần này" : "Most loved sets this week"
            }
            items={[
              {
                title: "Mini Gift Box",
                price: "79.000 VND",
                image: "/images/bestseller-1.jpg",
                href: "/products/mini-gift-box",
              },
              {
                title: "Sweet Snack Set",
                price: "129.000 VND",
                image: "/images/bestseller-2.jpg",
                href: "/products/sweet-snack-set",
              },
              {
                title: "Baby Cozy Set",
                price: "149.000 VND",
                image: "/images/bestseller-3.jpg",
                href: "/products/baby-cozy-set",
              },
              {
                title: "Special Surprise",
                price: "199.000 VND",
                image: "/images/bestseller-4.jpg",
                href: "/products/special-surprise",
              },
            ]}
            primaryAction={{ label: isVi ? "Mua ngay" : "Shop now", href: "/products" }}
          />
        </section>

        <section id="story" className={styles.section}>
          <QuoteBand
            quote={
              isVi
                ? '"Bông Lém là những món quà nhỏ xinh, được làm ra để tặng người bạn thương."'
                : '"Bong Lem creates small gifts made to delight the people you love."'
            }
            subline={isVi ? "Làm bằng yêu thương" : "Handmade with Love"}
            watermarkSrc="/images/flower-watermark.png"
          />
        </section>

        <section className={styles.section}>
          <SocialProof
            heading={isVi ? "Khách nói gì?" : "What customers say"}
            subheading={
              isVi
                ? "Feedback thật - vibe dễ thương, đóng gói xinh, giao nhanh."
                : "Real feedback: cute vibe, beautiful wrapping, and fast delivery."
            }
            reviews={
              isVi
                ? [
                    {
                      name: "Linh",
                      text: "Gói quà siêu xinh, nhận là muốn tặng liền. Shop rep nhanh nữa!",
                    },
                    {
                      name: "Minh",
                      text: "Set vừa đẹp vừa thơm, phù hợp tặng bạn gái. 10/10!",
                    },
                    {
                      name: "An",
                      text: "Mua lần 2 rồi. Đóng gói cẩn thận, vibe dễ thương cực.",
                    },
                  ]
                : [
                    {
                      name: "Linh",
                      text: "Super cute packaging, ready to gift right away. Fast support too!",
                    },
                    {
                      name: "Minh",
                      text: "Beautiful and fragrant set, perfect for gifting. 10/10!",
                    },
                    {
                      name: "An",
                      text: "Second purchase already. Careful packing and a very cute vibe.",
                    },
                  ]
            }
            socials={[
              { label: "Instagram", href: "https://instagram.com/" },
              { label: "TikTok", href: "https://tiktok.com/" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
