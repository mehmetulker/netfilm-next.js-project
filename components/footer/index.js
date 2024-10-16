import Link from 'next/link'
import React from 'react'
import style from "@/components/footer/styles.module.css"

function index() {
  return (
    <footer className={style.footer}>
      Made with ❤️ by&nbsp;
      
    <Link href="https://github.com/mehmetulker/netfilm-next.js-project">
    Mehmet Ülker</Link></footer>
  )
}

export default index