"use client";
import React from "react";
import Link from "next/link";
import styles from "./galery.module.scss";

const imageData = [
  { src: "/folder1/1.png", caption: "Graphic tee designs", link: "/Portfolio/sub1" },
  { src: "/folder10/Untitled_Artwork.png", caption: "Design it yourself // DC Competition", link: "/Portfolio/sub2" },
  { src: "/folder3/1.png", caption: "Skullcandy Series", link: "/Portfolio/sub3" },
  { src: "/folder4/1.png", caption: "Fluential tee design", link: "/Portfolio/sub4" },
  { src: "/folder5/1.PNG", caption: "LRG design contest // Dead Serious Hoodie", link: "/Portfolio/sub5" },
  { src: "/folder7/1.png", caption: "Community Garden Hats", link: "/Portfolio/sub7" },
  { src: "/folder6/1.png", caption: "Oasis poster // Definitely Maybe", link: "/Portfolio/sub6" },
  { src: "/folder8/1.png", caption: "Brand posters", link: "/Portfolio/sub8" },
  { src: "/folder9/1.png", caption: "Jaguar CX-75 Illustration", link: "/Portfolio/sub9" },
  { src: "/folder11/1.png", caption: "Community Gardens x Brooks", link: "/Portfolio/sub11" },
  { src: "/folder12/1.png", caption: "Book covers and Illustrations", link: "/Portfolio/sub12" },
  { src: "/folder2/1.PNG", caption: "Figure & Tribe park", link: "/Portfolio/sub10" },
  { src: "/folder13/1.JPEG", caption: "Nike SB series", link: "/Portfolio/sub13" },
  { src: "/folder14/1.png", caption: "Brio x Fluential // Three Color Options", link: "/Portfolio/sub14" },
  { src: "/folder15/2.PNG", caption: "Typeface // Graphic Design Studio", link: "/Portfolio/sub15" },
  { src: "/folder16/1.jpg", caption: "Digital Artworks", link: "/Portfolio/sub16" },
  { src: "/folder17/1.png", caption: "Character design", link: "/Portfolio/sub17" },
  { src: "/folder18/5.png", caption: "Presentation for an app for tasks -- Dear Diary", link: "/Portfolio/sub18" },
  { src: "/folder19/5.jpg", caption: "Vennie surfboards Artworks", link: "/Portfolio/sub19" },
];

export default function Gallery() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {imageData.map((img, idx) => (
          <Link href={img.link} key={idx} className={styles.item}>
            <img src={img.src} alt={img.caption} />
            <div className={styles.caption}>{img.caption}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
