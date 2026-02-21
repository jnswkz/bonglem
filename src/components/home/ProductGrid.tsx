import { useEffect, useState } from "react";
import styles from "./ProductGrid.module.css";
import { productApi, Product } from "../../api";

export type ProductGridProps = {
  heading: string;
  emojiSrc?: string;
  viewAllLabel?: string;
  viewAllHref?: string;
  onNavigate?: (page: string) => void;
};

export default function ProductGrid({ heading, emojiSrc, viewAllLabel, viewAllHref, onNavigate }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productApi.getAll({ status: "active" })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.topRow}>
        <h2 className={styles.heading}>
          {heading}
          {emojiSrc && <img src={emojiSrc} alt="" className={styles.emoji} />}
        </h2>
        {viewAllHref && (
          <button 
            className={styles.viewAll} 
            onClick={() => onNavigate?.("products")}
          >
            {viewAllLabel || "Xem tất cả"}
          </button>
        )}
      </div>

      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : products.length === 0 ? (
        <div className={styles.empty}>No products available</div>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <div 
              key={product._id} 
              className={styles.card} 
              onClick={() => onNavigate?.(`product/${product._id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.imgWrap}>
                <img
                  className={styles.img}
                  src={product.imageUrl}
                  alt={product.name}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.price}>{product.formattedPrice}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
