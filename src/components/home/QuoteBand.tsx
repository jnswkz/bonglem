import styles from "./QuoteBand.module.css";

export type QuoteBandProps = {
  quote: string;
  subline: string;
  watermarkSrc?: string;
  emojiSrc?: string; // this is your flower/emoji image
};

export default function QuoteBand({
  quote,
  subline,
  watermarkSrc,
  emojiSrc,
}: QuoteBandProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        {watermarkSrc ? (
          <img
            className={styles.watermark}
            src={watermarkSrc}
            alt=""
            aria-hidden="true"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : null}

        <div className={styles.row}>
          {/* Left flower */}
          {emojiSrc ? (
            <img
              src={emojiSrc}
              alt=""
              aria-hidden="true"
              className={`${styles.flower} ${styles.flowerLeft}`}
            />
          ) : null}

          {/* Center text */}
          <div className={styles.center}>
            <p className={styles.quote}>{quote}</p>

            <div className={styles.subRow}>
              <span className={styles.line} />
              <span className={styles.sub}>{subline}</span>
              <span className={styles.line} />
            </div>
          </div>

          {/* Right flower */}
          {emojiSrc ? (
            <img
              src={emojiSrc}
              alt=""
              aria-hidden="true"
              className={`${styles.flower} ${styles.flowerRight}`}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
