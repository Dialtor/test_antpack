import React from 'react'
import style from './navbar.module.css';

export default function Navbar() {
  return (
    <header className={style.header_container}>
        <h1>Test Antpack</h1>
        {/* <nav className={style.nav_container}>
            <ul className={style.ul_container}>
                <li><a href="">Desing 1</a></li>
                <li><a href="">Desing 2</a></li>
            </ul>
        </nav> */}
    </header>
  )
}
