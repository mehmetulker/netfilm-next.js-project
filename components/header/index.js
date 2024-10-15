import Link from 'next/link';
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import styles from "./styles.module.css"

function Header() {
  return (
    <header className={`${styles.header} continer fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
         <FaPlayCircle />NETFILM
       </Link>
      <nav className={styles.navigationMenu}>
        <Link href="/">Movies</Link>
        <Link href="/">Series</Link>
        <Link href="/">Kids</Link>
      </nav>
      </div>
    </header>
  )
}

export default Header