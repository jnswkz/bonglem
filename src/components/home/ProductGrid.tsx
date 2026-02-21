import { useEffect, useState } from "react";
import styles from "./ProductGrid.module.css";
import { productApi, Product } from "../../api";

export type ProductGridProps = {
  heading: string;
  emojiSrc?: string;
  viewAllLabel?: string;
  viewAllHref?: string;
};

export default function ProductGrid({ heading, emojiSrc, viewAllLabel, viewAllHref }: ProductGridProps) {
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
          <a className={styles.viewAll} href={viewAllHref}>
            {viewAllLabel || "Xem tất cả"}
          </a>
        )}
      </div>

      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : products.length === 0 ? (
        <div className={styles.empty}>No products available</div>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <a key={product._id} className={styles.card} href={`/products/${product.id}`}>
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
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
