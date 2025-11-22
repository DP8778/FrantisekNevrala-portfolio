// components/TubeGallery.tsx
import Image from "next/image";
import styles from "./sub1.module.scss";

const images = [
  { src: "/folder15/1.png", alt: "" },
  { src: "/folder15/2.PNG", alt: "" },
  { src: "/folder15/3.PNG", alt: "" },
  { src: "/folder15/4.png", alt: "" },

  
  



  
  
];

export default function TubeGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Typeface</h1>
      <p className={styles.subtitle}>year: 2025</p>

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
