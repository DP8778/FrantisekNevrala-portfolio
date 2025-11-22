// components/TubeGallery.tsx
import Image from "next/image";
import styles from "./sub1.module.scss";

const images = [
  { src: "/folder18/1.png", alt: "" },
  { src: "/folder18/2.png", alt: "" },
  { src: "/folder18/3.png", alt: "" },
  { src: "/folder18/4.png", alt: "" },
  { src: "/folder18/5.png", alt: "" },
  { src: "/folder18/6.PNG", alt: "" },
  { src: "/folder18/7.PNG", alt: "" },
  { src: "/folder18/8.png", alt: "" },
  { src: "/folder18/9.PNG", alt: "" },
  { src: "/folder18/10.png", alt: "" },  
  
];

export default function TubeGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Presentation for an app for tasks -- Dear Diary</h1>
      <p className={styles.subtitle}>year: 2023</p>

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
