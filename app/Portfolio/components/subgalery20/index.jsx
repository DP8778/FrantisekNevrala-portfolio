// components/TubeGallery.tsx
import Image from "next/image";
import styles from "./sub1.module.scss";

const images = [
  { src: "/folder20/1.png", alt: "" },
  { src: "/folder20/2.png", alt: "" },
  { src: "/folder20/3.png", alt: "" },
  { src: "/folder20/4.png", alt: "" },
  


  
  



  
  
];

export default function TubeGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carhartt Series</h1>
      <p className={styles.subtitle}>year: 2025</p>
      <p className={styles.subtitle}>Disclaimer: These projects are personal, non-commercial concept / fan art. It is not affiliated with, sponsored by, or endorsed by these brands. The designs were created purely for creative practice and portfolio purposes.</p>

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
