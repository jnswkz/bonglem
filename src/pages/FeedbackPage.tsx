import styles from "./FeedbackPage.module.css";
import { useLanguage } from "../i18n/LanguageContext";

type Review = {
  name: string;
  tagVi: string;
  tagEn: string;
  rating: number;
  textVi: string;
  textEn: string;
  product?: string;
  date: string;
};

const REVIEWS: Review[] = [
  {
    name: "Linh",
    tagVi: "Người mua quà",
    tagEn: "Gift Buyer",
    rating: 5,
    textVi: "Gói quà siêu xinh, mở ra là muốn tặng liền. Shop rep nhanh, tư vấn dễ thương!",
    textEn: "Super cute wrapping, ready to gift right away. Fast and friendly support!",
    product: "Khoai lang",
    date: "Jan 2026",
  },
  {
    name: "Minh",
    tagVi: "Fan đồ ăn vặt",
    tagEn: "Snack Lover",
    rating: 5,
    textVi: "Set vừa đẹp vừa ngon. Mua tặng bạn gái và feedback rất tốt.",
    textEn: "Beautiful and tasty set. Bought it as a gift and got great feedback.",
    product: "Nui sấy",
    date: "Jan 2026",
  },
  {
    name: "An",
    tagVi: "Khách quay lại",
    tagEn: "Repeat Customer",
    rating: 5,
    textVi: "Mua lần 2 rồi. Đóng gói cẩn thận, giao nhanh, vibe rất dễ thương.",
    textEn: "Second order already. Careful packaging, fast delivery, very cute vibe.",
    product: "Kẹo Milo",
    date: "Feb 2026",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, rating));
  return (
    <div className={styles.stars} aria-label={`${full} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? styles.starFull : styles.starEmpty}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function FeedbackPage() {
  const { language } = useLanguage();
  const isVi = language === "vi";
  const avg =
    Math.round(
      (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length) * 10
    ) / 10;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroEmoji}>
            <img src="/emoji/sad 2.png" alt="" className={styles.emojiLarge} />
          </div>
          <div className={styles.heroTitle}>
            <h1 className={styles.h1}>
              {isVi
                ? "Khách iu nói gì về bé Bông?"
                : "What do customers say about Bông?"}
              <img src="/emoji/love 2.png" alt="" className={styles.emoji} />
            </h1>

            <div className={styles.kpis}>
              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>{avg} / 5</div>
                <div className={styles.kpiLabel}>
                  {isVi ? "Điểm trung bình" : "Average rating"}
                </div>
              </div>
              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>{REVIEWS.length}+</div>
                <div className={styles.kpiLabel}>
                  {isVi ? "Đánh giá khách hàng" : "Customer reviews"}
                </div>
              </div>
              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>24h</div>
                <div className={styles.kpiLabel}>
                  {isVi ? "Thời gian phản hồi" : "Typical reply time"}
                </div>
              </div>
            </div>

            <div className={styles.ctas}>
              {/* ✅ UPDATED: Instagram CTA -> Facebook */}
              <a
                className={styles.primaryBtn}
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                {isVi ? "Đăng ảnh feedback của bạn" : "Share your feedback photo"}
              </a>
              <a className={styles.secondaryBtn} href="#reviews">
                {isVi ? "Xem đánh giá" : "Read reviews"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>
            {isVi ? "Đánh giá khách hàng" : "Customer reviews"}
          </h2>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((r, idx) => (
            <article key={idx} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>{r.name}</span>
                    <span className={styles.tag}>
                      {isVi ? r.tagVi : r.tagEn}
                    </span>
                  </div>
                  <div className={styles.meta}>
                    <span>{r.date}</span>
                    {r.product ? <span className={styles.dot}>•</span> : null}
                    {r.product ? (
                      <span className={styles.product}>{r.product}</span>
                    ) : null}
                  </div>
                </div>
                <Stars rating={r.rating} />
              </div>

              <p className={styles.text}>{isVi ? r.textVi : r.textEn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>{isVi ? "Social proof" : "Social proof"}</h2>
        </div>

        <div className={styles.ugcRow}>
          {/* ✅ NEW: Facebook card (replaces Instagram + TikTok) */}
          <div className={styles.ugcCard}>
            <div className={styles.ugcTitle}>Facebook</div>
            <p className={styles.ugcText}>
              {isVi
                ? "Nhắn tụi mình trên Facebook hoặc đăng ảnh feedback — tụi mình rep nhanh và có thể repost story."
                : "DM us on Facebook or post a feedback photo — we reply fast and may repost your story."}
            </p>
            <a
              className={styles.ugcLink}
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              {isVi ? "Mở Facebook ->" : "Open Facebook ->"}
            </a>
          </div>

          {/* ✅ NEW: Photo proof card (creative + still social-proof) */}
          <div className={styles.ugcCard}>
            <div className={styles.ugcTitle}>
              {isVi ? "Ảnh thật" : "Photo proof"}
            </div>
            <p className={styles.ugcText}>
              {isVi
                ? "Gửi ảnh unboxing/feedback cho tụi mình — tụi mình dùng làm social proof (ẩn thông tin nếu cần)."
                : "Send us an unboxing/feedback photo — we can use it as social proof (we can hide details if needed)."}
            </p>
            <a className={styles.ugcLink} href="#contact">
              {isVi ? "Gửi qua Contact ->" : "Send via Contact ->"}
            </a>
          </div>

          {/* Chat stays */}
          <div className={styles.ugcCard}>
            <div className={styles.ugcTitle}>Chat</div>
            <p className={styles.ugcText}>
              {isVi
                ? "Gửi feedback qua chat, tụi mình phản hồi nhanh."
                : "Send feedback via chat and we reply quickly."}
            </p>
            <a className={styles.ugcLink} href="#reviews">
              {isVi ? "Quay lại đánh giá ->" : "Back to reviews ->"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
