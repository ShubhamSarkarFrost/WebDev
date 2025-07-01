import React from 'react'
import styles from './ThemeToggleButton.module.css'


const ThemeToggleButton = ({ currentTheme , onToggle }) =>{
     return (
         <button className={`${styles.button} ${styles.themeToggleButton}`} onClick={onToggle}>
             Toggle {currentTheme ==='light'? 'Dark':'Light'}
         </button>
     )
}

export default ThemeToggleButton;
