import styles from "./FeedbackPage.module.css";

type Review = {
  name: string;
  tag: string;
  rating: number; // 1-5
  text: string;
  product?: string;
  date: string;
};

const REVIEWS: Review[] = [
  {
    name: "Linh",
    tag: "Gift Buyer",
    rating: 5,
    text: "Gói quà siêu xinh, mở ra là muốn tặng liền. Shop rep nhanh, tư vấn dễ thương!",
    product: "Mini Gift Box",
    date: "Jan 2026",
  },
  {
    name: "Minh",
    tag: "Snack Lover",
    rating: 5,
    text: "Set vừa đẹp vừa ngon. Mua tặng bạn gái, feedback cực tốt. 10/10!",
    product: "Sweet Snack Set",
    date: "Jan 2026",
  },
  {
    name: "An",
    tag: "Repeat Customer",
    rating: 5,
    text: "Mua lần 2 rồi. Đóng gói cẩn thận, giao nhanh, vibe dễ thương cực kỳ.",
    product: "Special Surprise",
    date: "Feb 2026",
  },
  {
    name: "Thảo",
    tag: "Student",
    rating: 4,
    text: "Giá ổn, đóng gói đẹp. Nếu có thêm lựa chọn mix vị thì tuyệt!",
    product: "Sweet Snack Set",
    date: "Feb 2026",
  },
  {
    name: "Hoàng",
    tag: "Busy Office",
    rating: 5,
    text: "Mua cho team office, ai cũng thích. Nhìn premium mà vẫn cute.",
    product: "Mini Gift Box",
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
  const avg = Math.round(
    (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length) * 10
  ) / 10;

  return (
    <div className={styles.page}>
      {/* Header Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <h1 className={styles.h1}>Feedback</h1>
            <p className={styles.sub}>
              Proof that the vibe is real: cute packaging, fast delivery, sweet moments. 🌼
            </p>

            <div className={styles.kpis}>
              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>{avg} / 5</div>
                <div className={styles.kpiLabel}>Average rating</div>
              </div>
              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>{REVIEWS.length}+</div>
                <div className={styles.kpiLabel}>Customer reviews</div>
              </div>
              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>24h</div>
                <div className={styles.kpiLabel}>Typical reply time</div>
              </div>
            </div>

            <div className={styles.ctas}>
              <a className={styles.primaryBtn} href="https://instagram.com/" target="_blank" rel="noreferrer">
                Post your unboxing ✨
              </a>
              <a className={styles.secondaryBtn} href="#reviews">
                Read reviews
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.featureCard}>
              <div className={styles.featureTitle}>Why people buy from Bông Lém</div>
              <ul className={styles.featureList}>
                <li>Gift-ready packaging (no extra work)</li>
                <li>Fast support via chat</li>
                <li>Small-batch, curated sets</li>
                <li>Feels premium, still cute</li>
              </ul>
            </div>

            <div className={styles.noteCard}>
              <div className={styles.noteTitle}>Business note</div>
              <p className={styles.noteText}>
                Feedback builds trust, reduces purchase risk, and increases conversion—especially for gift & snack products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>Customer reviews</h2>
          <p className={styles.sectionSub}>
            Real messages, summarized into clean cards (like on modern snack shops).
          </p>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((r, idx) => (
            <article key={idx} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>{r.name}</span>
                    <span className={styles.tag}>{r.tag}</span>
                  </div>
                  <div className={styles.meta}>
                    <span>{r.date}</span>
                    {r.product ? <span className={styles.dot}>•</span> : null}
                    {r.product ? <span className={styles.product}>{r.product}</span> : null}
                  </div>
                </div>
                <Stars rating={r.rating} />
              </div>

              <p className={styles.text}>{r.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* UGC / Social proof */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>Social proof</h2>
          <p className={styles.sectionSub}>
            Encourage UGC: screenshots, unboxing stories, short TikToks.
          </p>
        </div>

        <div className={styles.ugcRow}>
          <div className={styles.ugcCard}>
            <div className={styles.ugcTitle}>Instagram</div>
            <p className={styles.ugcText}>Tag us and we repost the cutest unboxings.</p>
            <a className={styles.ugcLink} href="https://instagram.com/" target="_blank" rel="noreferrer">
              Open Instagram →
            </a>
          </div>

          <div className={styles.ugcCard}>
            <div className={styles.ugcTitle}>TikTok</div>
            <p className={styles.ugcText}>Short video reviews boost trust fast.</p>
            <a className={styles.ugcLink} href="https://tiktok.com/" target="_blank" rel="noreferrer">
              Open TikTok →
            </a>
          </div>

          <div className={styles.ugcCard}>
            <div className={styles.ugcTitle}>WhatsApp / Chat</div>
            <p className={styles.ugcText}>Send feedback via chat – we reply quickly.</p>
            <a className={styles.ugcLink} href="#reviews">
              Back to reviews →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
