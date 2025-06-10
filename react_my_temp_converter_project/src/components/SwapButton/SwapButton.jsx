import React  from 'react';
import styles from './SwapButton.module.css'


const SwapButton = ({onClick}) =>{
    return (
        <button className={styles.swapButton} onClick={onClick}>
            ⇄
        </button>
    )
}

export default SwapButton;