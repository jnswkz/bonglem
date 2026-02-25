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
    textVi:
      "Mình đặt làm quà sinh nhật và hơi lo vì sợ nhìn ngoài không giống hình. Nhưng nhận được thì bất ngờ thật: gói rất xinh, sạch sẽ, nhìn \"gift-ready\" luôn. Bạn mình mở ra còn khen mùi thơm dễ chịu. Shop trả lời tin nhắn cũng nhanh, hỏi gì là rep liền.",
    textEn:
      "Ordered this as a birthday gift and I was a bit worried it would not look like the photos. But when it arrived, I was genuinely surprised - the wrapping was super cute, clean, and basically gift-ready. My friend opened it and even mentioned it smelled really nice. Also, support was quick whenever I had a question.",
    product: "Khoai lang",
    date: "Jan 2026",
  },
  {
    name: "Minh",
    tagVi: "Fan đồ ăn vặt",
    tagEn: "Snack Lover",
    rating: 5,
    textVi:
      "Mình thử set này vì thấy bạn giới thiệu. Đồ ăn vặt ổn, không bị ngọt gắt. Đóng gói chắc tay nên tới nơi không bị móp hay vỡ gì. Nói chung ok, sẽ mua lại nếu có set khác lạ hơn.",
    textEn:
      "Tried this set because a friend recommended it. The snacks were solid - not too sweet, and everything tasted fresh. Packaging was sturdy, so nothing arrived crushed. Overall really happy with it, I would order again (especially if there are new sets).",
    product: "Nui sấy",
    date: "Jan 2026",
  },
  {
    name: "An",
    tagVi: "Khách quay lại",
    tagEn: "Repeat Customer",
    rating: 5,
    textVi:
      "Đây là lần thứ hai mình mua. Lần này giao nhanh hơn mình nghĩ, mở ra vẫn thấy gói rất kỹ như trước. Mình thích kiểu vibe dễ thương nhưng không bị \"lố\". Cầm lên thấy có cảm giác chăm chút, chứ không phải đóng gói qua loa.",
    textEn:
      "This was my second order. Delivery was faster than I expected and everything was packed just as carefully as the first time. I like the cute vibe - it does not feel overdone, just thoughtfully put together. You can tell someone actually cared when packing it.",
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
      <section className={styles.hero} data-reveal="up">
        <div className={styles.heroInner}>
          <div className={styles.heroEmoji} data-reveal="left" data-reveal-delay="40">
            <img src="/emoji/sad 2.png" alt="" className={styles.emojiLarge} />
          </div>
          <div className={styles.heroTitle} data-reveal="right" data-reveal-delay="90">
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

      <section id="reviews" className={styles.section} data-reveal="up">
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>
            {isVi ? "Đánh giá khách hàng" : "Customer reviews"}
          </h2>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((r, idx) => (
            <article
              key={idx}
              className={styles.card}
              data-reveal="up"
              data-reveal-delay={String(Math.min(280, 40 + idx * 60))}
            >
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
    </div>
  );
}
