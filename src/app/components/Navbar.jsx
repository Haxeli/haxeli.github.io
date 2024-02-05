"use client"
import React, {useState} from 'react'
import Link from "next/link"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
        <div className={styles.navbarWrapper}>
            <Link href={"/"}>LOGO</Link>
            <div className={styles.menu} id="menuToggle">
            <input type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
                <span>Title</span>
                <span>Title</span>
                <span>Title</span>
                <ul id="menu" style={{display: isOpen ? 'block' : 'none'}}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    {/* Add more links as needed */}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar