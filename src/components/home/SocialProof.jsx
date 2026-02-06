import React from "react";
import styles from "./SocialProof.module.css";

export default function SocialProof({ heading, subheading, reviews = [], socials = [] }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subheading}>{subheading}</p>
        </div>

        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              className={styles.socialBtn}
              href={s.href}
              target="_blank"
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {reviews.map((r, idx) => (
          <div key={`${r.name}-${idx}`} className={styles.card}>
            <div className={styles.name}>{r.name}</div>
            <div className={styles.text}>{r.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
