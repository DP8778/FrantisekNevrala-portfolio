// components/TubeGallery.tsx
import Image from "next/image";
import styles from "./sub1.module.scss";

const images = [
  { src: "/folder19/1.jpg", alt: "" },
  { src: "/folder19/2.jpg", alt: "" },
  { src: "/folder19/3.jpg", alt: "" },
  { src: "/folder19/4.jpg", alt: "" },
  { src: "/folder19/5.jpg", alt: "" },
  { src: "/folder19/6.jpg", alt: "" },
  { src: "/folder19/7.jpg", alt: "" },
  { src: "/folder19/8.jpg", alt: "" },
  { src: "/folder19/9.jpg", alt: "" },

  
  



  
  
];

export default function TubeGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Vennie surfboards</h1>
      <p className={styles.subtitle}>year: 2018</p>

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
