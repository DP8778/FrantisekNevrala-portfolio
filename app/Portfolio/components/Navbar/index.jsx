import React, { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo vlevo */}
        <div className={styles.logo}>
          <a href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={40}
              priority
            />
          </a>
        </div>

        {/* 🔥 Pravý blok (social + odkazy pod sebou) */}
        <div className={styles.rightBlock}>

          {/* ⬆ Social ikony */}
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank">
              <Image
                src="/instagram-logo.svg"
                alt="Instagram"
                width={22}
                height={22}
              />
            </a>

            <a href="https://behance.net" target="_blank">
              <Image
                src="/behance-circle.svg"
                alt="Behance"
                width={24}
                height={24}
              />
            </a>
          </div>

          {/* ⬇ Odkazy */}
          <ul className={`${styles.links} ${open ? styles.open : ""}`}>
            <li><a href="#home">Domů</a></li>
            <li><a href="#about">O nás</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>

        </div>

        {/* Burger pro mobil */}
        <div
          className={`${styles.toggle} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
}
