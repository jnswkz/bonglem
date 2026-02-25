import styles from "./Hero.module.css";

type Cta = { label: string; href: string };
type Img = { src: string; alt?: string };

export type HeroProps = {
  brand: string;
  headline: string;
  subline: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  trustChips?: string[];
  heroImage?: Img;
  mascotSticker?: Img;
};

export default function Hero({ heroImage }: HeroProps) {
  return (
    <div className={styles.heroShell}>
      <div className={styles.hero}>
        <div className={styles.right}>
          <div className={styles.imageCard}>
            <div className={styles.imageFrame}>
              <img
                className={styles.image}
                src={heroImage?.src}
                alt={heroImage?.alt || "Poster"}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />

              <div className={styles.imageFallback}>
                <div className={styles.fallbackTitle}>Poster</div>
                <div className={styles.fallbackText}>
                  Thêm ảnh vào <b>public/images/hero.jpg</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
