import React from "react";
import styles from "./CategoryGrid.module.css";

export default function CategoryGrid({ heading, viewAll, categories = [] }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.topRow}>
        <h2 className={styles.heading}>{heading}</h2>

        <a className={styles.viewAll} href={viewAll?.href || "/products"}>
          {viewAll?.label || "Xem tất cả"}
        </a>
      </div>

      <div className={styles.grid}>
        {categories.map((c) => (
          <a key={c.title} className={styles.card} href={c.href}>
            <img
              className={styles.img}
              src={c.image}
              alt={c.title}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            {/* Placeholder, falls Bild noch nicht vorhanden */}
            <div className={styles.fallback}>
              <div className={styles.fallbackSmall}>Category image</div>
              <div className={styles.fallbackTiny}>
                Lege später <b>{c.image}</b> in <b>public/</b> ab
              </div>
            </div>

            <div className={styles.overlay} />
            <div className={styles.title}>{c.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
