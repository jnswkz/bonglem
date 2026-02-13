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
    product: "Mini Gift Box",
    date: "Jan 2026",
  },
  {
    name: "Minh",
    tagVi: "Fan đồ ăn vặt",
    tagEn: "Snack Lover",
    rating: 5,
    textVi: "Set vừa đẹp vừa ngon. Mua tặng bạn gái và feedback rất tốt.",
    textEn: "Beautiful and tasty set. Bought it as a gift and got great feedback.",
    product: "Sweet Snack Set",
    date: "Jan 2026",
  },
  {
    name: "An",
    tagVi: "Khách quay lại",
    tagEn: "Repeat Customer",
    rating: 5,
    textVi: "Mua lần 2 rồi. Đóng gói cẩn thận, giao nhanh, vibe rất dễ thương.",
    textEn: "Second order already. Careful packaging, fast delivery, very cute vibe.",
    product: "Special Surprise",
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
  const avg = Math.round(
    (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length) * 10
  ) / 10;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <h1 className={styles.h1}>{isVi ? "Danh gia" : "Feedback"}</h1>
            <p className={styles.sub}>
              {isVi
                ? "Bằng chứng cho vibe dễ thương: đóng gói xinh, giao nhanh, trải nghiệm tốt."
                : "Proof that the vibe is real: cute packaging, fast delivery, and sweet moments."}
            </p>

            <div className={styles.kpis}>
              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>{avg} / 5</div>
                <div className={styles.kpiLabel}>{isVi ? "Điểm trung bình" : "Average rating"}</div>
              </div>
              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>{REVIEWS.length}+</div>
                <div className={styles.kpiLabel}>{isVi ? "Đánh giá khách hàng" : "Customer reviews"}</div>
              </div>
              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>24h</div>
                <div className={styles.kpiLabel}>{isVi ? "Thời gian phản hồi" : "Typical reply time"}</div>
              </div>
            </div>

            <div className={styles.ctas}>
              <a className={styles.primaryBtn} href="https://instagram.com/" target="_blank" rel="noreferrer">
                {isVi ? "Đăng unboxing của bạn" : "Post your unboxing"}
              </a>
              <a className={styles.secondaryBtn} href="#reviews">
                {isVi ? "Xem đánh giá" : "Read reviews"}
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.featureCard}>
              <div className={styles.featureTitle}>
                {isVi ? "Vì sao khách mua ở Bông Lém" : "Why people buy from Bong Lem"}
              </div>
              <ul className={styles.featureList}>
                {isVi ? (
                  <>
                    <li>Gói quà sẵn, không cần chuẩn bị thêm</li>
                    <li>Hỗ trợ chat nhanh</li>
                    <li>Set chọn lọc theo đợt nhỏ</li>
                    <li>Vừa đẹp vừa dễ thương</li>
                  </>
                ) : (
                  <>
                    <li>Gift-ready packaging (no extra work)</li>
                    <li>Fast support via chat</li>
                    <li>Small-batch curated sets</li>
                    <li>Feels premium and still cute</li>
                  </>
                )}
              </ul>
            </div>

            <div className={styles.noteCard}>
              <div className={styles.noteTitle}>
                {isVi ? "Góc kinh doanh" : "Business note"}
              </div>
              <p className={styles.noteText}>
                {isVi
                  ? "Feedback giúp tăng độ tin cậy, giảm rủi ro mua hàng, và tăng tỉ lệ chốt đơn."
                  : "Feedback builds trust, reduces purchase risk, and improves conversion."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>{isVi ? "Đánh giá khách hàng" : "Customer reviews"}</h2>
          <p className={styles.sectionSub}>
            {isVi
              ? "Tổng hợp feedback thật thành các card gọn gàng, dễ đọc."
              : "Real messages summarized into clean cards."}
          </p>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((r, idx) => (
            <article key={idx} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>{r.name}</span>
                    <span className={styles.tag}>{isVi ? r.tagVi : r.tagEn}</span>
                  </div>
                  <div className={styles.meta}>
                    <span>{r.date}</span>
                    {r.product ? <span className={styles.dot}>•</span> : null}
                    {r.product ? <span className={styles.product}>{r.product}</span> : null}
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
          <p className={styles.sectionSub}>
            {isVi
              ? "Khuyến khích UGC: screenshot, unboxing story, video ngắn."
              : "Encourage UGC: screenshots, unboxing stories, and short videos."}
          </p>
        </div>

        <div className={styles.ugcRow}>
          <div className={styles.ugcCard}>
            <div className={styles.ugcTitle}>Instagram</div>
            <p className={styles.ugcText}>
              {isVi
                ? "Tag tụi mình, shop sẽ repost những unboxing đẹp nhất."
                : "Tag us and we will repost the cutest unboxings."}
            </p>
            <a className={styles.ugcLink} href="https://instagram.com/" target="_blank" rel="noreferrer">
              {isVi ? "Mở Instagram ->" : "Open Instagram ->"}
            </a>
          </div>

          <div className={styles.ugcCard}>
            <div className={styles.ugcTitle}>TikTok</div>
            <p className={styles.ugcText}>
              {isVi ? "Video review ngắn giúp tăng trust nhanh." : "Short review videos boost trust fast."}
            </p>
            <a className={styles.ugcLink} href="https://tiktok.com/" target="_blank" rel="noreferrer">
              {isVi ? "Mở TikTok ->" : "Open TikTok ->"}
            </a>
          </div>

          <div className={styles.ugcCard}>
            <div className={styles.ugcTitle}>Chat</div>
            <p className={styles.ugcText}>
              {isVi ? "Gửi feedback qua chat, tụi mình phản hồi nhanh." : "Send feedback via chat and we reply quickly."}
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
