import React from "react";
import styles from './Input.module.css';

const Input = ({richText, ...props}) =>{
    if (richText){
        return (
            <textarea className={styles.textarea} {...props}></textarea>
        )
    }else{
        return (
            <input className={styles.input} {...props}/>
        )
    }
}

export default Input;