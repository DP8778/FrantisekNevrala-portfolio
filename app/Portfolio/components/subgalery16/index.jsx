// components/TubeGallery.tsx
import Image from "next/image";
import styles from "./sub1.module.scss";

const images = [
  { src: "/folder16/1.jpg", alt: "" },
  { src: "/folder16/3.jpg", alt: "" },
  { src: "/folder16/4.png", alt: "" },
  { src: "/folder16/5.png", alt: "" },
  { src: "/folder16/6.jpg", alt: "" },

  
  



  
  
];

export default function TubeGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Digital Artworks</h1>
      <p className={styles.subtitle}>year:2023 - 2025</p>

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
