import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkIn, FaFacebookF } from "react-icons/fa6";
function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.contianer}>
        <div className= {styles.hero_con}>
            <div className={styles.hero_info}>
                <p className= {styles.text_1}></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
