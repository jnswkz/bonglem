import React from "react";
import styles from "./Hero.module.css";

function smoothScrollTo(hash) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero({
  brand,
  headline,
  subline,
  primaryCta,
  secondaryCta,
  trustChips = [],
  heroImage,
  mascotSticker,
}) {
  const onAnchor = (e, href) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  };

  return (
    <div className={styles.heroShell}>
      <div className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.brand}>{brand}</div>

          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.subline}>{subline}</p>

          <div className={styles.ctaRow}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href={primaryCta.href}
              onClick={(e) => onAnchor(e, primaryCta.href)}
            >
              {primaryCta.label}
            </a>

            <a
              className={`${styles.btn} ${styles.btnGhost}`}
              href={secondaryCta.href}
              onClick={(e) => onAnchor(e, secondaryCta.href)}
            >
              {secondaryCta.label}
            </a>
          </div>

          {trustChips?.length ? (
            <div className={styles.chips}>
              {trustChips.map((t) => (
                <span key={t} className={styles.chip}>
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className={styles.right}>
          <div className={styles.imageCard}>
            <div className={styles.imageFrame}>
              <img
                className={styles.image}
                src={heroImage?.src}
                alt={heroImage?.alt || "Hero"}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className={styles.imageFallback}>
                <div className={styles.fallbackTitle}>Hero image</div>
                <div className={styles.fallbackText}>
                  Lege später ein Bild in <b>public/images/hero.jpg</b>
                </div>
              </div>

              {mascotSticker?.src ? (
                <img
                  className={styles.sticker}
                  src={mascotSticker.src}
                  alt={mascotSticker.alt || ""}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
