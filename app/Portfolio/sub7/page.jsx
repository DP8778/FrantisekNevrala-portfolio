"use client";
import React from 'react'
import styles from "./sub1.module.scss"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Subgalery1 from "../components/subgalery7"

const Page = () => {
  return (
    <div className={styles.container}>
        <Navbar />
        <Subgalery1 />
        <Footer />
    </div>
  )
}

export default Page
