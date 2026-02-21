import styles from "./BestSellers.module.css";

type Item = { title: string; price: string; image: string; productId?: string };
type Action = { label?: string };

export type BestSellersProps = {
  heading: string;
  subheading: string;
  items?: Item[];
  primaryAction?: Action;
  onNavigate?: (page: string) => void;
};

export default function BestSellers({
  heading,
  subheading,
  items = [],
  primaryAction,
  onNavigate,
}: BestSellersProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subheading}>{subheading}</p>
        </div>

        <button 
          className={styles.primaryAction} 
          onClick={() => onNavigate?.("products")}
        >
          {primaryAction?.label || "Shop now"}
        </button>
      </div>

      <div className={styles.grid}>
        {items.map((p) => (
          <div 
            key={p.title} 
            className={styles.card} 
            onClick={() => p.productId && onNavigate?.(`product/${p.productId}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.imageBox}>
              <img
                className={styles.img}
                src={p.image}
                alt={p.title}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />

              <div className={styles.imageFallback}>
                <div className={styles.fallbackTitle}>Product image</div>
                <div className={styles.fallbackText}>
                  Lege später <b>{p.image}</b> in <b>public/</b> ab
                </div>
              </div>
            </div>

            <div className={styles.meta}>
              <div className={styles.title}>{p.title}</div>
              <div className={styles.bottomRow}>
                <div className={styles.price}>{p.price}</div>
                <span className={styles.ctaMini}>Add</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
