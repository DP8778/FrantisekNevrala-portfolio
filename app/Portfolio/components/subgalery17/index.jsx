// components/TubeGallery.tsx
import Image from "next/image";
import styles from "./sub1.module.scss";

const images = [
  { src: "/folder17/1.png", alt: "" },
  { src: "/folder17/2.png", alt: "" },
  { src: "/folder17/3.png", alt: "" },
  { src: "/folder17/4.png", alt: "" },
  { src: "/folder17/5.png", alt: "" },
  { src: "/folder17/6.png", alt: "" },


  
  



  
  
];

export default function TubeGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Character designs</h1>
      <p className={styles.subtitle}>year: 2020</p>

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
