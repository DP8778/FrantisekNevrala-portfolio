'use client';

import React, { useRef } from 'react';

import Galery from './components/galery';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



import styles from './Portfolio.module.scss';

export default function Page() {
  const projectNewRef = useRef(null);
  const galleryRef    = useRef(null);

  const scrollToProjectNew = () => {
    projectNewRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="Web-development" className={styles.container}>
      

      <div>
        <Navbar />
      </div>
      <div ref={galleryRef}>
        <Galery />
      </div>
      <div>
        <Footer />
      </div>

      
    </div>
  );
}
