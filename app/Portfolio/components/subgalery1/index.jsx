// components/TubeGallery.tsx
import Image from "next/image";
import styles from "./sub1.module.scss";

const images = [
  { src: "/folder1/1.png", alt: "" },
  { src: "/folder1/2.png", alt: "" },
  { src: "/folder1/3.png", alt: "" },
  { src: "/folder1/4.png", alt: "" },
  { src: "/folder1/5.png", alt: "" },
  { src: "/folder1/6.png", alt: "" },
];

export default function TubeGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Graphic tee designs</h1>
      <p className={styles.subtitle}>year: 2024</p>
      <p className={styles.subtitle}>Disclaimer: These projects are personal, non-commercial concept / fan art. It is not affiliated with, sponsored by, or endorsed by these brands. The designs were created purely for creative practice and portfolio purposes.</p>

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
