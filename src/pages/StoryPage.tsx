import styles from "./StoryPage.module.css";
import { useLanguage } from "../i18n/LanguageContext";

export default function StoryPage() {
  const { language } = useLanguage();
  const isVi = language === "vi";

  const content = isVi
    ? {
        eyebrow: "Giới thiệu brand",
        title: "Câu chuyện thương hiệu",
        lead:
          "Bông Lém là nơi gom góp những điều dễ thương nhất của ngày xưa: gắn bó, hoài niệm và những niềm vui bé xíu.",
        body: `Niềm vui tuổi thơ ngày ấy thật giản đơn, là cảm giác hạnh phúc khi học tốt trên lớp, sự háo hức khi nhận được một “Bông hoa điểm 10”, hay niềm vui nhỏ bé khi cùng bạn bè chia nhau những món ăn vặt sau giờ học. Chính những khoảnh khắc tưởng chừng rất nhỏ ấy đã tạo nên những ký ức theo ta suốt những năm tháng trưởng thành.

Bông Lém được sinh ra từ những ký ức đó.

“Bông” tượng trưng cho sự dịu dàng, ấm áp và lời động viên, lấy cảm hứng từ những bông hoa thầy cô trao tặng để ghi nhận sự cố gắng và ngoan ngoãn của học trò. “Lém”, xuất phát từ lém lỉnh, mang tinh thần tinh nghịch, hóm hỉnh và tò mò, giống hệt tuổi thơ hồn nhiên. Khi kết hợp lại, Bông Lém trở thành một bông hoa nhỏ tinh nghịch, đại diện cho sự trong trẻo, niềm vui và những phút giây vô lo.

Tại Bông Lém, chúng tôi tin rằng đồ ăn vặt không chỉ đơn thuần là thức ăn. Chúng là những cỗ máy thời gian. Mỗi hương vị quen thuộc, mỗi bao bì rực rỡ và từng chi tiết lém lỉnh đều được làm ra để đưa bạn về ký ức của những buổi chiều tan học, tiếng cười khúc khích vang khắp sân trường và những khoảnh khắc hạnh phúc nhỏ xíu mà nhớ hoài.`,
        quote:
          "Bông Lém không nói về việc lớn lên. Mà là về việc nhớ lại.",
        visionLabel: "Tầm nhìn",
        visionTitle:
          "Trở thành nơi khơi gợi ký ức tuổi thơ qua những món ăn vặt vui nhộn và những khoảnh khắc đầy niềm vui.",
        missionLabel: "Sứ mệnh",
        missionTitle:
          "Bông Lém tái hiện hương vị tuổi thơ Việt Nam bằng các món ăn vặt hoài niệm, kết hợp trải nghiệm tinh nghịch để mỗi miếng ăn đều đáng nhớ.",
      }
    : {
        eyebrow: "Brand Intro",
        title: "Brand Story",
        lead:
          "Bong Lem is where the sweetest pieces of childhood are gathered again: nostalgia, connection, and tiny joys.",
        body: `Childhood happiness was once simple, the joy of doing well in class, the excitement of receiving a “Bông hoa điểm 10”, and the pleasure of sharing snacks after school with friends. Those small moments created memories that stayed with us long after we grew up.

Bông Lém was born from those memories.

“Bông” represents softness, warmth, and encouragement, inspired by the flowers teachers gave to reward effort and good behavior. “Lém,” derived from lém lỉnh, reflects a playful, cheeky, and curious personality, just like childhood itself. Together, Bông Lém becomes a mischievous little flower that embodies innocence, joy, and carefree fun.

At Bông Lém, we believe snacks are more than just food. They are time machines. Each familiar flavor, colorful wrapper, and playful detail is designed to take people back, to after-school afternoons, schoolyard laughter, and moments when happiness came easily.`,
        quote: "Bông Lém isn’t about growing up. It’s about remembering.",
        visionLabel: "Vision",
        visionTitle:
          "To be a place where childhood memories bloom again through playful snacks and joyful moments.",
        missionLabel: "Mission",
        missionTitle:
          "Bông Lém brings back the taste of Vietnamese nostalgia by offering classic snacks with a cheeky, fun experience that makes every bite feel special.",
      };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>{content.eyebrow}</span>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.lead}>{content.lead}</p>
      </section>

      <section className={styles.section}>
        <p className={styles.body}>{content.body}</p>
        <p className={styles.quote}>{content.quote}</p>

        <div className={styles.visionGrid}>
          <article className={styles.card}>
            <p className={styles.cardLabel}>{content.visionLabel}</p>
            <h2 className={styles.cardTitle}>{content.visionLabel}</h2>
            <p className={styles.cardText}>{content.visionTitle}</p>
          </article>

          <article className={styles.card}>
            <p className={styles.cardLabel}>{content.missionLabel}</p>
            <h2 className={styles.cardTitle}>{content.missionLabel}</h2>
            <p className={styles.cardText}>{content.missionTitle}</p>
          </article>
        </div>
      </section>
    </div>
  );
}
