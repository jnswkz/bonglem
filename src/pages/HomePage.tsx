import styles from "./HomePage.module.css";

import Hero from "../components/home/Hero";
import CategoryGrid from "../components/home/CategoryGrid";
import BestSellers from "../components/home/BestSellers";
import QuoteBand from "../components/home/QuoteBand";
import SocialProof from "../components/home/SocialProof";

type HomePageProps = {
  onNavigate: (
    page:
      | "home"
      | "story"
      | "products"
      | "detail"
      | "feedback"
      | "contact"
      | "cart"
      | "checkout"
  ) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.section}>
          <Hero
            brand="BÔNG LÉM"
            headline="Những món quà nhỏ xinh — làm bằng cả tình yêu 🌼"
            subline="Handmade gifts & sweet moments. Gói quà xinh, tặng người bạn thương."
            primaryCta={{
              label: "Xem sản phẩm",
              onClick: () => onNavigate("products"),
            }}
            secondaryCta={{
              label: "Câu chuyện",
              onClick: () => onNavigate("story"),
            }}
            trustChips={["Handmade", "Gift-ready", "Chat nhanh"]}
            heroImage={{ src: "/images/hero.jpg", alt: "Bông Lém hero image" }}
            mascotSticker={{ src: "/images/mascot-sticker.png", alt: "Mascot" }}
          />
        </section>

        {/* CATEGORIES */}
        <section className={styles.section}>
          <CategoryGrid
            heading="Sản phẩm của Bông Lém"
            viewAll={{
              label: "Xem tất cả",
              onClick: () => onNavigate("products"),
            }}
            categories={[
              {
                title: "Set Yêu Thương",
                image: "/images/cat-love.jpg",
                onClick: () => onNavigate("products"),
              },
              {
                title: "Set Cho Bé",
                image: "/images/cat-baby.jpg",
                onClick: () => onNavigate("products"),
              },
              {
                title: "Set Đặc Biệt",
                image: "/images/cat-special.jpg",
                onClick: () => onNavigate("products"),
              },
            ]}
          />
        </section>

        {/* BEST SELLERS */}
        <section className={styles.section}>
          <BestSellers
            heading="Best sellers"
            subheading="Những set được yêu thích nhất tuần này"
            items={[
              {
                title: "Mini Gift Box",
                price: "₫79.000",
                image: "/images/bestseller-1.jpg",
                onClick: () => onNavigate("detail"),
              },
              {
                title: "Sweet Snack Set",
                price: "₫129.000",
                image: "/images/bestseller-2.jpg",
                onClick: () => onNavigate("detail"),
              },
              {
                title: "Baby Cozy Set",
                price: "₫149.000",
                image: "/images/bestseller-3.jpg",
                onClick: () => onNavigate("detail"),
              },
              {
                title: "Special Surprise",
                price: "₫199.000",
                image: "/images/bestseller-4.jpg",
                onClick: () => onNavigate("detail"),
              },
            ]}
            primaryAction={{
              label: "Shop now",
              onClick: () => onNavigate("products"),
            }}
          />
        </section>

        {/* STORY / QUOTE */}
        <section className={styles.section}>
          <QuoteBand
            quote='“Bông Lém là những món quà nhỏ xinh, được làm ra để dành tặng cho những người bạn thương.”'
            subline="Handmade with Love"
            watermarkSrc="/images/flower-watermark.png"
          />
        </section>

        {/* SOCIAL PROOF */}
        <section className={styles.section}>
          <SocialProof
            heading="Khách nói gì?"
            subheading="Feedback thật — vibe dễ thương, đóng gói xinh, giao nhanh."
            reviews={[
              { name: "Linh", text: "Gói quà siêu xinh, nhận là muốn tặng liền. Shop rep nhanh nữa!" },
              { name: "Minh", text: "Set vừa đẹp vừa thơm, phù hợp tặng bạn gái. 10/10!" },
              { name: "An", text: "Mua lần 2 rồi. Đóng gói cẩn thận, vibe dễ thương cực." },
            ]}
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
