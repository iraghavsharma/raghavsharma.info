import React from "react"
import styles from "../../styles/layouts/styleguide.module.css"
import "../../styles/main.css"


export default ({ children }) => (
  <div id="styleguide">
    <header className={styles.header}>

        <h1 className={styles.h1}> Styleguide for <i>raghavsharma.info</i></h1>
        <h2> Documenting the work being around styling my website</h2>
        <div className={styles.menuSelector}>
            
        </div>
    </header>
    <div className={styles.main}>
        {children}
    </div>
    <footer className={styles.footer}>
    </footer>
  </div>
)