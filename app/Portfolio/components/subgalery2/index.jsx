// components/TubeGallery.tsx
import Image from "next/image";
import styles from "./sub1.module.scss";

const images = [
  { src: "/folder2/1.PNG", alt: "" },
  { src: "/folder2/2.PNG", alt: "" },
  { src: "/folder2/3.PNG", alt: "" },

];

export default function TubeGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Figure & Tribe park</h1>
      <p className={styles.subtitle}>year: 2024</p>

      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.card}>
            <Image
              src={img.src}
              alt={img.alt}
              width={900}
              height={600}
              className={styles.image}
            />
            <p className={styles.caption}>{img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
