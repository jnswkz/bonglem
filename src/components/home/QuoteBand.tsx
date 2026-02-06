import React from "react";
import styles from "./QuoteBand.module.css";

export default function QuoteBand({ quote, subline, watermarkSrc }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        {watermarkSrc ? (
          <img
            className={styles.watermark}
            src={watermarkSrc}
            alt=""
            aria-hidden="true"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : null}

        <p className={styles.quote}>{quote}</p>

        <div className={styles.subRow}>
          <span className={styles.line} />
          <span className={styles.sub}>{subline}</span>
          <span className={styles.line} />
        </div>
      </div>
    </div>
  );
}
