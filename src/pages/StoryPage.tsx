import styles from "./StoryPage.module.css";
import { useLanguage } from "../i18n/LanguageContext";

export default function StoryPage() {
  const { language } = useLanguage();
  const isVi = language === "vi";

  const content = isVi
    ? {
        // Section 1: Bông Lém bắt đầu từ đâu?
        section1Title: "Bông Lém bắt đầu từ đâu?",
        section1Text: `Niềm vui tuổi thơ ngày ấy thật giản đơn, là cảm giác hạnh phúc khi học tốt trên lớp, sự háo hức khi nhận được một "Bông hoa điểm 10", hay niềm vui nhỏ bé khi cùng bạn bè chia nhau những món ăn vặt sau giờ học.

Chính những khoảnh khắc tưởng chừng rất nhỏ ấy đã tạo nên những ký ức theo ta suốt những năm tháng trưởng thành.

Bông Lém được sinh ra từ những ký ức đó.`,

        // Section 2: Vì sao Bông Lém ra đời?
        section2Title: "Vì sao Bông Lém ra đời?",
        section2Text: `"Bông" tượng trưng cho sự dịu dàng, ấm áp và lời động viên, lấy cảm hứng từ những bông hoa thầy cô trao tặng để ghi nhận sự cố gắng và ngoan ngoãn của học trò.

"Lém", xuất phát từ lém lỉnh, mang tinh thần tinh nghịch, hóm hỉnh và tò mò, giống hệt tuổi thơ hồn nhiên.

Khi kết hợp lại, Bông Lém trở thành một bông hoa nhỏ tinh nghịch, đại diện cho sự trong trẻo, niềm vui và những phút giây vô lo.`,

        // About us section
        aboutTitle: "Về chúng mình",
        aboutText: `Bạn thích phong cách quần áo nào? Y2K? Streetwear? Coquette?
Dù là gì thì bạn cũng đang mặc cái gì đó ra đường.

Vậy mà bạn chưa từng hỏi cục sạc của bạn có muốn hay không!

Cũng như sinh viên muốn có bảng điểm full 4.0, cục sạc cũng muốn có full coverage. Cục sạc được ăn no mặc ấm sẽ mang lại sức mạnh biến mọi nguyện vọng của bạn thành sự thật.

Bông chăm khô: Khoác lông bào cho cục sạc - Đời bạc sẽ lên hương.`,
        // aboutCta: "Tổng đài nhà Bông luôn sẵn sàng",

        // Vision & Mission
        visionLabel: "TẦM NHÌN",
        visionTitle: "Trở thành nơi khơi gợi ký ức tuổi thơ qua những món ăn vặt vui nhộn và những khoảnh khắc đầy niềm vui.",
        missionLabel: "SỨ MỆNH", 
        missionTitle: "Bông Lém tái hiện hương vị tuổi thơ Việt Nam bằng các món ăn vặt hoài niệm, kết hợp trải nghiệm tinh nghịch để mỗi miếng ăn đều đáng nhớ.",

        // Quote
        quote: "Bông Lém không nói về việc lớn lên. Mà là về việc nhớ lại.",
      }
    : {
        section1Title: "Where did Bông Lém start?",
        section1Text: `Childhood happiness was once simple - the joy of doing well in class, the excitement of receiving a "Bông hoa điểm 10" (a flower sticker for getting 10 points), and the pleasure of sharing snacks after school with friends.

Those small moments created memories that stayed with us long after we grew up.

Bông Lém was born from those memories.`,

        section2Title: "Why was Bông Lém born?",
        section2Text: `"Bông" represents softness, warmth, and encouragement, inspired by the flowers teachers gave to reward effort and good behavior.

"Lém," derived from lém lỉnh, reflects a playful, cheeky, and curious personality, just like childhood itself.

Together, Bông Lém becomes a mischievous little flower that embodies innocence, joy, and carefree fun.`,

        aboutTitle: "About Us",
        aboutText: `What is your fashion style? Y2K? Streetwear? Coquette?
Whatever it is, you are wearing something out there.

But have you ever asked your charger if it wants to dress up too?

Just like students want a full 4.0 GPA, chargers want full coverage too. A well-dressed charger will give you the power to make all your wishes come true.

Bông Lém: Dress up your charger - Life will smell sweeter.`,
        // aboutCta: "Bông hotline is always ready",

        visionLabel: "VISION",
        visionTitle: "To be a place where childhood memories bloom again through playful snacks and joyful moments.",
        missionLabel: "MISSION",
        missionTitle: "Bông Lém brings back the taste of Vietnamese nostalgia by offering classic snacks with a cheeky, fun experience that makes every bite feel special.",

        quote: "Bông Lém is not about growing up. It is about remembering.",
      };

  return (
    <div className={styles.page}>
      {/* Section 1: Bông Lém bắt đầu từ đâu? - Blue background */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextSide}>
            <h1 className={styles.heroTitle}>{content.section1Title}</h1>
            <p className={styles.heroText}>{content.section1Text}</p>
          </div>
          <div className={styles.heroImageSide}>
            <img src="/emoji/hello 2.png" alt="Mascot" className={styles.heroMascot} />
          </div>
        </div>
      </section>

      {/* Section 2: Vì sao Bông Lém ra đời? - Blue background */}
      <section className={styles.fishSection}>
        <div className={styles.fishContent}>
          <div className={styles.fishImageSide}>
            <img src="/emoji/actually 2.png" alt="Mascot" className={styles.fishMascot} />
          </div>
          <div className={styles.fishTextSide}>
            <h2 className={styles.fishTitle}>{content.section2Title}</h2>
            <p className={styles.fishText}>{content.section2Text}</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutTextSide}>
            <h2 className={styles.aboutTitle}>{content.aboutTitle}</h2>
            <p className={styles.aboutText}>{content.aboutText}</p>
            {/* <button className={styles.aboutCta}>{content.aboutCta}</button> */}
          </div>
          <div className={styles.aboutImageSide}>
            <img src="/images/team.jpg" alt="Team" className={styles.teamImage} />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <p className={styles.quoteText}>"{content.quote}"</p>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.vmSection}>
        <h2 className={styles.vmSectionTitle}>{isVi ? "TẦM NHÌN & SỨ MỆNH" : "VISION & MISSION"}</h2>
        <div className={styles.vmGrid}>
          <div className={`${styles.vmCard} ${styles.visionCard}`}>
            <p className={styles.vmLabel}>{content.visionLabel}</p>
            <p className={styles.vmText}>{content.visionTitle}</p>
            <img src="/emoji/love 2.png" alt="" className={styles.vmEmoji} />
          </div>
          <div className={`${styles.vmCard} ${styles.missionCard}`}>
            <p className={styles.vmLabel}>{content.missionLabel}</p>
            <p className={styles.vmText}>{content.missionTitle}</p>
            <img src="/emoji/hug 2.png" alt="" className={styles.vmEmoji} />
          </div>
        </div>
      </section>
    </div>
  );
}