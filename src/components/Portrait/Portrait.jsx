import React from "react";

import styles from "./Portrait.module.css";
import { getImageUrl } from "../../utils";


export const Portrait = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm<br/>Collin</h1>
            <p className={styles.description}>
                I'm a full-stack developer with 1 year of experience using .NET Core and SQL. 
                Reach out if you'd like to learn more!
            </p>
            <a className={styles.contactBtn} href="mailto:collinbdev@outlook.com">Contact Me</a>
        </div>
        <img src={getImageUrl("portrait/portraitImage.png")} className={styles.portraitImg} alt="Portrait Image"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    );
}