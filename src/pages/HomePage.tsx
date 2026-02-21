import styles from "./HomePage.module.css";

import Hero from "../components/home/Hero";
import ProductGrid from "../components/home/ProductGrid";
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
  onNavigate?: (page: string) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
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
          <ProductGrid
            heading={isVi ? "Bông Lém có gì?" : "What does Bong Lem have?"}
            emojiSrc="/emoji/hello 2.png"
            viewAllLabel={isVi ? "Xem tất cả" : "View all"}
            viewAllHref="/products"
            onNavigate={onNavigate}
          />
        </section>

        <section id="story" className={styles.section}>
          <QuoteBand
            quote={
              isVi
                ? '"Bông Lém tin rằng... Những món quà nhỏ có thể mang lại niềm vui rất to."'
                : '"Bong Lem believes... Small gifts can bring great joy."'
            }
            subline={isVi ? "Làm bằng yêu thương" : "Handmade with Love"}
            watermarkSrc="/images/flower-watermark.png"
            emojiSrc="/emoji/love 2.png"
          />
        </section>

        <section className={styles.section}>
          <SocialProof
            heading={isVi ? "Khách iu nói gì về bé Bông?" : "What do customers say about Bong?"}
            emojiSrc="/emoji/sad 2.png"
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
