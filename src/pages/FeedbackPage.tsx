import styles from "./FeedbackPage.module.css";

type Review = {
  name: string;
  text: string;
  product?: string;
  tag?: string; // z.B. "Gift-ready", "Fast delivery"
};

const REVIEWS: Review[] = [
  {
    name: "Linh",
    text: "Gói quà siêu xinh, nhận là muốn tặng liền. Shop rep nhanh nữa!",
    product: "Sweet Snack Set",
    tag: "Gift-ready",
  },
  {
    name: "Minh",
    text: "Set vừa đẹp vừa thơm, phù hợp tặng bạn gái. 10/10!",
    product: "Special Surprise",
    tag: "Perfect present",
  },
  {
    name: "An",
    text: "Mua lần 2 rồi. Đóng gói cẩn thận, vibe dễ thương cực.",
    product: "Mini Gift Box",
    tag: "Repeat customer",
  },
  {
    name: "Mai",
    text: "Giao nhanh nội thành, hộp quà thơm và nhìn premium hơn giá luôn.",
    product: "Mini Gift Box",
    tag: "Fast delivery",
  },
  {
    name: "Khoa",
    text: "Mình nhắn hỏi set theo budget, shop tư vấn nhanh và đúng ý.",
    product: "Custom set",
    tag: "Fast support",
  },
  {
    name: "Thảo",
    text: "Đúng vibe nhẹ nhàng mình thích. Tặng bạn xong bạn hỏi link shop luôn 😄",
    product: "Sweet Snack Set",
    tag: "Viral",
  },
];

export default function FeedbackPage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <h1 className={styles.h1}>Khách thương nói gì về Bông Lém?</h1>
            <p className={styles.lead}>
              Feedback thật giúp bạn yên tâm: đóng gói xinh, vibe dễ thương, hỗ trợ nhanh.
            </p>

            <div className={styles.kpis}>
              <div className={styles.kpiCard}>
                <div className={styles.kpiTop}>
                  <span className={styles.star}>★</span>
                  <span className={styles.kpiValue}>4.8/5</span>
                </div>
                <div className={styles.kpiLabel}>Customer happiness</div>
              </div>

              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>Gift-ready</div>
                <div className={styles.kpiLabel}>Packed to impress</div>
              </div>

              <div className={styles.kpiCard}>
                <div className={styles.kpiValue}>Fast reply</div>
                <div className={styles.kpiLabel}>Chat support</div>
              </div>
            </div>

            <div className={styles.ctas}>
              <a className={styles.primaryBtn} href="https://instagram.com/" target="_blank" rel="noreferrer">
                Xem feedback trên Instagram
              </a>
              <a className={styles.secondaryBtn} href="https://tiktok.com/" target="_blank" rel="noreferrer">
                TikTok video reviews
              </a>
            </div>

            <p className={styles.note}>
              Tip: Nutzer vertrauen externen Reviews oft stärker als „nur“ Website-Testimonials – deshalb verlinken wir IG/TikTok.{" "}
              <span className={styles.noteSmall}>(Für später: Google Reviews / Shopee)</span>
            </p>
          </div>

          <div className={styles.heroBox}>
            <div className={styles.heroBadge}>Social proof</div>
            <div className={styles.heroQuote}>
              “Cute packaging + fast delivery. Gift-ready in minutes.”
            </div>
            <div className={styles.heroMeta}>— Community vibe</div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>Testimonials</h2>
          <p className={styles.sub}>
            Kurze, klare Quotes — genau das, was in Shops am besten scanbar ist.
          </p>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((r, idx) => (
            <article key={idx} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatar}>{r.name.slice(0, 1).toUpperCase()}</div>
                <div>
                  <div className={styles.name}>{r.name}</div>
                  {r.product && <div className={styles.meta}>Bought: {r.product}</div>}
                </div>
                {r.tag && <span className={styles.tag}>{r.tag}</span>}
              </div>

              <p className={styles.text}>{r.text}</p>

              <div className={styles.cardBottom}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.muted}>Verified vibe</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LEAVE FEEDBACK (no backend yet) */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>Gửi feedback cho Bông Lém</h2>
          <p className={styles.sub}>
            (Noch ohne Backend — aber wirkt professionell und ist später schnell anschließbar.)
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Danke! (Demo) — später speichern wir das in einer DB oder via Google Form.");
          }}
        >
          <div className={styles.formRow}>
            <label className={styles.label}>
              Tên
              <input className={styles.input} placeholder="Nhập tên..." required />
            </label>

            <label className={styles.label}>
              Kênh
              <select className={styles.input} defaultValue="instagram">
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="email">Email</option>
              </select>
            </label>
          </div>

          <label className={styles.label}>
            Feedback
            <textarea className={styles.textarea} placeholder="Bạn thích điều gì nhất?" rows={4} required />
          </label>

          <div className={styles.formActions}>
            <button className={styles.primaryBtn} type="submit">Gửi feedback</button>
            <a className={styles.secondaryBtn} href="https://instagram.com/" target="_blank" rel="noreferrer">
              DM trên Instagram
            </a>
          </div>
        </form>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>Quick FAQ</h2>
          <p className={styles.sub}>Ein paar letzte Einwände killen → mehr Conversion.</p>
        </div>

        <div className={styles.faq}>
          <details className={styles.faqItem}>
            <summary>Giao hàng mất bao lâu?</summary>
            <p>Nội thành thường 1–2 ngày. Ngoại tỉnh 2–4 ngày (tuỳ khu vực).</p>
          </details>

          <details className={styles.faqItem}>
            <summary>Có thể làm set theo budget không?</summary>
            <p>Có. Bạn nhắn budget + dịp tặng, Bông Lém gợi ý set phù hợp.</p>
          </details>

          <details className={styles.faqItem}>
            <summary>Đóng gói có “gift-ready” không?</summary>
            <p>Yes — hộp + giấy gói + thiệp nhỏ tuỳ set.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
