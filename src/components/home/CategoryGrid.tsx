import styles from "./CategoryGrid.module.css";

type ViewAll = { label?: string };
type Category = { title: string; image: string; categoryId?: string };

export type CategoryGridProps = {
  heading: string;
  emojiSrc?: string;
  viewAll?: ViewAll;
  categories?: Category[];
  onNavigate?: (page: string) => void;
};

export default function CategoryGrid({ heading, emojiSrc, viewAll, categories = [], onNavigate }: CategoryGridProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.topRow}>
        <h2 className={styles.heading}>
          {heading}
          {emojiSrc && <img src={emojiSrc} alt="" className={styles.emoji} />}
        </h2>
        <button 
          className={styles.viewAll} 
          onClick={() => onNavigate?.("products")}
        >
          {viewAll?.label || "Xem tất cả"}
        </button>
      </div>

      <div className={styles.grid}>
        {categories.map((c) => (
          <div 
            key={c.title} 
            className={styles.card} 
            onClick={() => c.categoryId && onNavigate?.(`products?category=${c.categoryId}`)}
            style={{ cursor: 'pointer' }}
          >
            <img
              className={styles.img}
              src={c.image}
              alt={c.title}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />

            <div className={styles.fallback}>
              <div className={styles.fallbackSmall}>Category image</div>
              <div className={styles.fallbackTiny}>
                Lege später <b>{c.image}</b> in <b>public/</b> ab
              </div>
            </div>

            <div className={styles.overlay} />
            <div className={styles.title}>{c.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
