import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImage} alt="About Image"/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursor.png")} alt="Cursor Image"/>
                    <div className={styles.aboutItemText}>
                        <h3 className={styles.skillTitle}>Frontend Developer</h3>
                        <p className={styles.skillDescription}>
                            I’m a front-end developer with experience
                            in building responsive and optimized sites
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/server.png")} alt="Cursor Image"/>
                    <div className={styles.aboutItemText}>
                        <h3 className={styles.skillTitle}>Backend Developer</h3>
                        <p className={styles.skillDescription}>
                        I have experience developing fast and
                        optimised back-end systems and APIs
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/ui-scroll-area.png")} alt="Cursor Image"/>
                    <div className={styles.aboutItemText}>
                        <h3 className={styles.skillTitle}>UI Designer</h3>
                        <p className={styles.skillDescription}>
                        I have designed multiple landing pages and
                        have created design systems as well
                        </p>
                    </div>
                </li>
                
            </ul>
        </div>
    </section>
    );
}