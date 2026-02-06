import React from "react";
import styles from "./BestSellers.module.css";

export default function BestSellers({ heading, subheading, items = [], primaryAction }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subheading}>{subheading}</p>
        </div>

        <a className={styles.primaryAction} href={primaryAction?.href || "/products"}>
          {primaryAction?.label || "Shop now"}
        </a>
      </div>

      <div className={styles.grid}>
        {items.map((p) => (
          <a key={p.title} className={styles.card} href={p.href}>
            <div className={styles.imageBox}>
              <img
                className={styles.img}
                src={p.image}
                alt={p.title}
                onError={(e) => (e.currentTarget.style.display = "none")}
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
          </a>
        ))}
      </div>
    </div>
  );
}
