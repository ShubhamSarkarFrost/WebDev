import React ,{ useState } from "react";
import styles from './Chapter.module.css';


const Chapter = ({title, content}) =>{
    return (
        <div className={styles.chapterContent}>
            <h3 className={styles.chapterTitle}>{title}</h3>
            <p className={styles.chapterText}>{content}</p>
        </div>
    )
};

export default Chapter;