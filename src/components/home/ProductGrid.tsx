import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ProductGrid.module.css";
import { productApi, Product } from "../../api";
import { useLanguage } from "../../i18n/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ProductGridProps = {
  heading: string;
  emojiSrc?: string;
  viewAllLabel?: string;
  viewAllHref?: string;
  onNavigate?: (page: string) => void;
};

export default function ProductGrid({
  heading,
  emojiSrc,
  viewAllLabel,
  viewAllHref,
  onNavigate,
}: ProductGridProps) {
  const { language } = useLanguage();
  const isVi = language === "vi";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    productApi
      .getAll({ status: "active" })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 4);
    setCanScrollNext(track.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [products, updateScrollState]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => updateScrollState();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateScrollState]);

  const scrollByDirection = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const amount = Math.max(track.clientWidth * 0.82, 220);
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.topRow} data-reveal="up">
        <h2 className={styles.heading}>
          {heading}
          {emojiSrc && <img src={emojiSrc} alt="" className={styles.emoji} />}
        </h2>
        {viewAllHref && (
          <button className={styles.viewAll} onClick={() => onNavigate?.("products")}>
            {viewAllLabel || (isVi ? "Xem tất cả" : "View all")}
          </button>
        )}
      </div>

      {loading ? (
        <div className={styles.loading}>{isVi ? "Đang tải..." : "Loading..."}</div>
      ) : products.length === 0 ? (
        <div className={styles.empty}>{isVi ? "Hiện chưa có sản phẩm" : "No products available"}</div>
      ) : (
        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={() => scrollByDirection("prev")}
            disabled={!canScrollPrev}
            aria-label={isVi ? "Sản phẩm trước" : "Previous products"}
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className={`${styles.edgeFade} ${styles.edgeFadeLeft} ${
              canScrollPrev ? styles.edgeFadeVisible : ""
            }`}
          />
          <div
            className={`${styles.edgeFade} ${styles.edgeFadeRight} ${
              canScrollNext ? styles.edgeFadeVisible : ""
            }`}
          />

          <div className={styles.grid} ref={trackRef}>
            {products.map((product, idx) => {
              const displayName = product.name;
              return (
                <div
                  key={product._id}
                  className={styles.card}
                  onClick={() => onNavigate?.(`product/${product._id}`)}
                  data-reveal="right"
                  data-reveal-delay={String(Math.min(420, 40 + idx * 45))}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.imgWrap}>
                    <img className={styles.img} src={product.imageUrl} alt={displayName} />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>{displayName}</div>
                    <div className={styles.price}>{product.formattedPrice}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={() => scrollByDirection("next")}
            disabled={!canScrollNext}
            aria-label={isVi ? "Sản phẩm tiếp theo" : "Next products"}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
