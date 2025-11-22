// components/TubeGallery.tsx
import Image from "next/image";
import styles from "./sub1.module.scss";

const images = [
  { src: "/folder7/1.png", alt: "" },
  { src: "/folder7/2.png", alt: "" },
  { src: "/folder7/3.JPEG", alt: "" },
  { src: "/folder7/4.JPEG", alt: "" },
  
  
];

export default function TubeGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Community Garden Hats</h1>
      <p className={styles.subtitle}>year: 2024</p>

      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.card}>
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
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
