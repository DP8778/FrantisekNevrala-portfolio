import React from 'react'
import styles from "./Kontakt.module.scss"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <p>About me</p>
        <p className={styles.text}> My passion for drawing and painting goes back to childhood, when I was constantly searching for sources of inspiration that could help shape my artistic style and direction. One of the earliest and most influential sparks came from the iconic symbol of the legendary hip-hop group A Tribe Called Quest, which deepened my curiosity about the hidden meanings and symbolism unfolding on a canvas.

Over time, surrealism and abstraction became my main muses, and I experimented with blending them—tastefully and intentionally—with elements of graffiti. At fifteen, I got the opportunity to transfer my sketchbook drawings onto much larger surfaces. Working at Vennie Surfboards, I painted on surfboards and paddleboards of both classic and unique shapes, exploring a wide range of styles: Polynesian, abstract, cartoon, pop art, and graffiti.

After three years of working primarily with acrylics—and occasionally with a wood-burning pen—I began focusing more on developing my digital skills, setting aside my traditional brushes and markers for a while. Digital illustration allowed me to apply my creativity to a broader range of practical uses in advertising: business cards, posters, banners, apparel, social media content, and even web design. Besides Photoshop, Illustrator, and InDesign, I also rely heavily on Procreate, as I always strive to enrich my designs with unique illustrations or distinctive stylistic elements.</p>
        <p>email: nevrala.ilu@gmail.com</p>
        <p>Phone: +420 722 223 560</p>
        <p>Location: Czech Republic, Pardubice</p>
      
      </div>
      <Footer />
    </div>
  )
}

export default Page