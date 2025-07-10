import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils.js";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
                src={
                    menuOpen 
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
                }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)} /* Toggle menuOpen */
            />
            
            <ul /* Apply menuOpen style conditionally based on menuOpen bool*/
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)} /* Toggle menuOpen when an item is clicked */
            >
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>;
}