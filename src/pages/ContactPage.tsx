import styles from "./ContactPage.module.css";

type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  hours: string;
};

export default function ContactPage() {
  const info: ContactInfo = {
    address: "123 Đường Cánh Hoa, Quận 1, TP. Hồ Chí Minh",
    phone: "+84 987 654 321",
    email: "hello@bonglem.vn",
    hours: "Mon–Sat: 9:00–19:00",
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>Liên hệ Bông Lém</h1>
          <p className={styles.subtitle}>
            Cần tư vấn set quà / giao nhanh / gói quà? Nhắn cho tụi mình — trả lời nhanh.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Left: contact cards */}
          <section className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Địa chỉ</div>
              <div className={styles.cardText}>{info.address}</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Điện thoại</div>
              <a className={styles.link} href={`tel:${info.phone.replace(/\s/g, "")}`}>
                {info.phone}
              </a>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Email</div>
              <a className={styles.link} href={`mailto:${info.email}`}>
                {info.email}
              </a>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Giờ hoạt động</div>
              <div className={styles.cardText}>{info.hours}</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Mạng xã hội</div>
              <div className={styles.socials}>
                <a className={styles.pill} href="https://instagram.com/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a className={styles.pill} href="https://tiktok.com/" target="_blank" rel="noreferrer">
                  TikTok
                </a>
                <a className={styles.pill} href="https://facebook.com/" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </div>
            </div>
          </section>

          {/* Right: form */}
          <section className={styles.formCard}>
            <h2 className={styles.formTitle}>Gửi tin nhắn</h2>
            <p className={styles.formHint}>
              Business sinnvoll: Leads einsammeln + schnelle Beratung.
            </p>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <label className={styles.label}>
                Tên của bạn
                <input className={styles.input} type="text" placeholder="Ví dụ: Linh" required />
              </label>

              <label className={styles.label}>
                Email / SĐT
                <input className={styles.input} type="text" placeholder="Ví dụ: linh@email.com" required />
              </label>

              <label className={styles.label}>
                Bạn muốn hỏi gì?
                <textarea className={styles.textarea} rows={5} placeholder="Mình muốn đặt set quà..." required />
              </label>

              <button className={styles.button} type="submit">
                Gửi đi 🌼
              </button>

              <p className={styles.small}>
                Tip: Später kann man hier WhatsApp / Zalo Button ergänzen.
              </p>
            </form>
          </section>
        </div>

        {/* Optional: simple map placeholder */}
        <section className={styles.map}>
          <div className={styles.mapInner}>
            <div className={styles.mapTitle}>Bản đồ (Placeholder)</div>
            <div className={styles.mapText}>
              Später: Google Maps Embed oder ein Screenshot. Fürs Projekt reicht das erst mal.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
