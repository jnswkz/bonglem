import styles from "./QuoteBand.module.css";

export type QuoteBandProps = {
  quote: string;
  subline: string;
  watermarkSrc?: string;
};

export default function QuoteBand({ quote, subline, watermarkSrc }: QuoteBandProps) {
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
