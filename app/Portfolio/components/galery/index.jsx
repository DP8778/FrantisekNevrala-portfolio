"use client";
import React from "react";
import Link from "next/link";
import styles from "./galery.module.scss";

const imageData = [
  { src: "/folder1/1.png", caption: "Graphic tee designs", link: "/Portfolio/sub1" },
  { src: "/folder10/Untitled_Artwork.png", caption: "Popisek 2", link: "/Portfolio/sub2" },
  { src: "/folder3/1.png", caption: "Skullcandy", link: "/Portfolio/sub3" },
  { src: "/folder4/1.png", caption: "Popisek 4", link: "/Portfolio/sub4" },
  { src: "/folder5/1.PNG", caption: "Popisek 5", link: "/Portfolio/sub5" },
  { src: "/folder6/1.png", caption: "Popisek 6", link: "/Portfolio/sub6" },
  { src: "/folder7/1.png", caption: "Popisek 7", link: "/Portfolio/sub7" },
  { src: "/folder8/1.png", caption: "Popisek 8", link: "/Portfolio/sub8" },
  { src: "/folder9/1.png", caption: "Popisek 9", link: "/Portfolio/sub9" },
  { src: "/folder2/1.png", caption: "Popisek 10", link: "/Portfolio/sub10" },
  { src: "/folder11/1.png", caption: "Popisek 11", link: "/Portfolio/sub11" },
  { src: "/folder12/1.png", caption: "Popisek 12", link: "/Portfolio/sub12" },
  { src: "/folder13/1.JPEG", caption: "Popisek 13", link: "/Portfolio/sub13" },
  { src: "/folder14/1.png", caption: "Popisek 14", link: "/Portfolio/sub14" },
  { src: "/folder15/2.png", caption: "Popisek 14", link: "/Portfolio/sub15" },
  { src: "/folder16/1.jpg", caption: "Popisek 14", link: "/Portfolio/sub16" },
  { src: "/folder17/1.png", caption: "Popisek 14", link: "/Portfolio/sub17" },
  { src: "/folder18/5.png", caption: "Popisek 14", link: "/Portfolio/sub18" },
  { src: "/folder19/5.jpg", caption: "Popisek 14", link: "/Portfolio/sub19" },
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
