import React from 'react'
import styles from "./Kontakt.module.scss"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <p>František Nevřala</p>
        <p>email: nevrala.ilu@gmail.com</p>
        <p>Telefon: +420 722 223 560</p>
        <p>Lokace: Pardubice</p>
      
      </div>
      <Footer />
    </div>
  )
}

export default Page