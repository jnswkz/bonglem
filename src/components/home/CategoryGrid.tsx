import styles from "./CategoryGrid.module.css";

type ViewAll = { label?: string; href?: string };
type Category = { title: string; image: string; href: string };

export type CategoryGridProps = {
  heading: string;
  viewAll?: ViewAll;
  categories?: Category[];
};

export default function CategoryGrid({ heading, viewAll, categories = [] }: CategoryGridProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.topRow}>
        <h2 className={styles.heading}>{heading}</h2>
        <a className={styles.viewAll} href={viewAll?.href || "/products"}>
          {viewAll?.label || "Xem tất cả"}
        </a>
      </div>

      <div className={styles.grid}>
        {categories.map((c) => (
          <a key={c.title} className={styles.card} href={c.href}>
            <img
              className={styles.img}
              src={c.image}
              alt={c.title}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />

            <div className={styles.fallback}>
              <div className={styles.fallbackSmall}>Category image</div>
              <div className={styles.fallbackTiny}>
                Lege später <b>{c.image}</b> in <b>public/</b> ab
              </div>
            </div>

            <div className={styles.overlay} />
            <div className={styles.title}>{c.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
