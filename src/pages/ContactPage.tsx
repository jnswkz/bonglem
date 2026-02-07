import styles from "./ContactPage.module.css";
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock, HelpCircle } from "lucide-react";

type FaqItem = { q: string; a: string };

export default function ContactPage() {
  const faqs: FaqItem[] = [
    {
      q: "Bao lâu thì nhận được hàng?",
      a: "Nội thành HCMC thường 1–2 ngày. Các tỉnh khác 2–4 ngày tùy khu vực. Bạn có thể nhắn shop để check nhanh.",
    },
    {
      q: "Shop có gói quà không?",
      a: "Có 🌼 Bông Lém hỗ trợ gói quà xinh + thiệp theo yêu cầu. Nhắn nội dung thiệp để shop chuẩn bị.",
    },
    {
      q: "Mình muốn đặt số lượng lớn / quà doanh nghiệp?",
      a: "Được luôn. Shop có thể tư vấn set theo ngân sách + thời gian giao. Email hoặc nhắn WhatsApp để nhận báo giá.",
    },
    {
      q: "Đổi/trả thế nào?",
      a: "Nếu sản phẩm lỗi do vận chuyển/sản xuất, shop hỗ trợ đổi mới. Vui lòng nhắn trong 24h kèm ảnh để xử lý nhanh.",
    },
  ];

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Liên hệ với Bông Lém</h1>
            <p className={styles.sub}>
              Nhanh nhất: nhắn WhatsApp/Instagram. Tụi mình thường phản hồi trong vài giờ (giờ làm việc).
            </p>

            <div className={styles.quickChips}>
              <span className={styles.chip}><Clock size={16} /> Hỗ trợ nhanh</span>
              <span className={styles.chip}><HelpCircle size={16} /> FAQ tự phục vụ</span>
              <span className={styles.chip}><MessageCircle size={16} /> Chat trực tiếp</span>
            </div>
          </div>

          {/* INFO CARD */}
          <div className={styles.infoCard}>
            <h2 className={styles.cardTitle}>Thông tin liên hệ</h2>

            <div className={styles.infoRow}>
              <div className={styles.iconBox}><MapPin size={18} /></div>
              <div>
                <div className={styles.label}>Address</div>
                <div className={styles.value}>123 Đường Cánh Hoa, Quận 1, TP. Hồ Chí Minh</div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.iconBox}><Phone size={18} /></div>
              <div>
                <div className={styles.label}>Phone</div>
                <a className={styles.link} href="tel:+84987654321">+84 987 654 321</a>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.iconBox}><Mail size={18} /></div>
              <div>
                <div className={styles.label}>Email</div>
                <a className={styles.link} href="mailto:hello@bonglem.vn">hello@bonglem.vn</a>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.hours}>
              <div className={styles.hoursTitle}><Clock size={16} /> Giờ hỗ trợ</div>
              <div className={styles.hoursText}>
                Mon–Sat: 09:00–18:00 <br />
                (Ngoài giờ: vẫn nhắn được — shop trả lời sớm nhất có thể)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTION CARDS */}
      <section className={styles.section}>
        <div className={styles.grid3}>
          <a className={styles.actionCard} href="https://wa.me/84987654321" target="_blank" rel="noreferrer">
            <div className={styles.actionTop}>
              <span className={styles.badge}>Fastest</span>
              <div className={styles.actionIcon}><MessageCircle size={22} /></div>
            </div>
            <div className={styles.actionTitle}>Chat WhatsApp</div>
            <div className={styles.actionText}>Tư vấn set quà, gói quà, thời gian giao… trả lời nhanh.</div>
            <div className={styles.actionCta}>Nhắn ngay →</div>
          </a>

          <a className={styles.actionCard} href="https://instagram.com/" target="_blank" rel="noreferrer">
            <div className={styles.actionTop}>
              <span className={styles.badge}>Social</span>
              <div className={styles.actionIcon}><Instagram size={22} /></div>
            </div>
            <div className={styles.actionTitle}>DM Instagram</div>
            <div className={styles.actionText}>Xem feedback, story, mẫu gói quà và nhắn đặt hàng.</div>
            <div className={styles.actionCta}>Mở Instagram →</div>
          </a>

          <a className={styles.actionCard} href="mailto:hello@bonglem.vn?subject=H%E1%BB%8Fi%20B%C3%B4ng%20L%C3%A9m&body=Ch%C3%A0o%20B%C3%B4ng%20L%C3%A9m%2C%0A%0AM%C3%ACnh%20mu%E1%BB%91n%20h%E1%BB%8Fi%3A%20">
            <div className={styles.actionTop}>
              <span className={styles.badge}>Formal</span>
              <div className={styles.actionIcon}><Mail size={22} /></div>
            </div>
            <div className={styles.actionTitle}>Email</div>
            <div className={styles.actionText}>Đặt số lượng lớn / hợp tác / yêu cầu chi tiết.</div>
            <div className={styles.actionCta}>Soạn email →</div>
          </a>
        </div>
      </section>

      {/* SIMPLE FORM (no backend) */}
      <section className={styles.section}>
        <div className={styles.formWrap}>
          <div className={styles.formHead}>
            <h2 className={styles.h2}>Gửi lời nhắn</h2>
            <p className={styles.formSub}>
              Form này mở mailto (không cần backend). Nếu bạn muốn form “gửi thật”, mình làm bước tiếp theo.
            </p>
          </div>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = String(fd.get("name") || "");
              const contact = String(fd.get("contact") || "");
              const message = String(fd.get("message") || "");
              const subject = encodeURIComponent(`Contact from ${name || "Customer"}`);
              const body = encodeURIComponent(
                `Tên: ${name}\nLiên hệ: ${contact}\n\nNội dung:\n${message}\n`
              );
              window.location.href = `mailto:hello@bonglem.vn?subject=${subject}&body=${body}`;
            }}
          >
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Tên</label>
                <input className={styles.input} name="name" placeholder="Nhập tên của bạn..." required />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email hoặc SĐT</label>
                <input className={styles.input} name="contact" placeholder="Email / số điện thoại..." required />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Lời nhắn</label>
              <textarea className={styles.textarea} name="message" rows={5} placeholder="Bạn muốn hỏi gì?" required />
            </div>

            <button className={styles.submit} type="submit">Gửi đi 🌼</button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.faq}>
          <h2 className={styles.h2}>FAQ nhanh</h2>
          <p className={styles.faqSub}>Các câu hỏi thường gặp để bạn tự xử lý nhanh (đỡ phải chờ support).</p>

          <div className={styles.faqList}>
            {faqs.map((item, idx) => (
              <details key={idx} className={styles.faqItem}>
                <summary className={styles.faqQ}>
                  <span className={styles.qIcon}><HelpCircle size={16} /></span>
                  {item.q}
                </summary>
                <div className={styles.faqA}>{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
