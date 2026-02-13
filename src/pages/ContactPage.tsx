import styles from "./ContactPage.module.css";
import { useLanguage } from "../i18n/LanguageContext";

type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  hoursVi: string;
  hoursEn: string;
};

export default function ContactPage() {
  const { language } = useLanguage();
  const isVi = language === "vi";

  const info: ContactInfo = {
    address: "123 Đường Cánh Hoa, Quận 1, TP. Hồ Chí Minh",
    phone: "+84 987 654 321",
    email: "hello@bonglem.vn",
    hoursVi: "Thứ 2 - Thứ 7: 9:00 - 19:00",
    hoursEn: "Mon - Sat: 9:00 - 19:00",
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>{isVi ? "Liên hệ Bông Lém" : "Contact Bong Lem"}</h1>
          <p className={styles.subtitle}>
            {isVi
              ? "Cần tư vấn set quà, giao nhanh, hoặc gói quà? Nhắn cho tụi mình - phản hồi nhanh."
              : "Need help with gift sets, fast delivery, or wrapping? Message us and we reply quickly."}
          </p>
        </header>

        <div className={styles.grid}>
          <section className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>{isVi ? "Địa chỉ" : "Address"}</div>
              <div className={styles.cardText}>{info.address}</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>{isVi ? "Điện thoại" : "Phone"}</div>
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
              <div className={styles.cardTitle}>{isVi ? "Giờ hoạt động" : "Opening hours"}</div>
              <div className={styles.cardText}>{isVi ? info.hoursVi : info.hoursEn}</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>{isVi ? "Mạng xã hội" : "Social"}</div>
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

          <section className={styles.formCard}>
            <h2 className={styles.formTitle}>{isVi ? "Gửi tin nhắn" : "Send a message"}</h2>
            <p className={styles.formHint}>
              {isVi ? "Để lại nhu cầu, tụi mình sẽ liên hệ sớm." : "Leave your request and we will get back soon."}
            </p>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <label className={styles.label}>
                {isVi ? "Tên của bạn" : "Your name"}
                <input
                  className={styles.input}
                  type="text"
                  placeholder={isVi ? "Ví dụ: Linh" : "Example: Linh"}
                  required
                />
              </label>

              <label className={styles.label}>
                {isVi ? "Email / SĐT" : "Email / Phone"}
                <input
                  className={styles.input}
                  type="text"
                  placeholder={isVi ? "Ví dụ: linh@email.com" : "Example: linh@email.com"}
                  required
                />
              </label>

              <label className={styles.label}>
                {isVi ? "Bạn muốn hỏi gì?" : "How can we help?"}
                <textarea
                  className={styles.textarea}
                  rows={5}
                  placeholder={isVi ? "Mình muốn đặt set quà..." : "I want to order a gift set..."}
                  required
                />
              </label>

              <button className={styles.button} type="submit">
                {isVi ? "Gửi đi" : "Send"}
              </button>

              <p className={styles.small}>
                {isVi
                  ? "Tip: sau này có thể thêm nút WhatsApp / Zalo."
                  : "Tip: later you can add WhatsApp / Zalo quick buttons."}
              </p>
            </form>
          </section>
        </div>

        <section className={styles.map}>
          <div className={styles.mapInner}>
            <div className={styles.mapTitle}>
              {isVi ? "Ban do (Placeholder)" : "Map (Placeholder)"}
            </div>
            <div className={styles.mapText}>
              {isVi
                ? "Có thể thêm Google Maps embed hoặc ảnh chụp màn hình bản đồ."
                : "You can add a Google Maps embed or a static map screenshot later."}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
