import React from 'react';
import styles from './ConvertedValue.module.css'



const ConvertedValue = ({value}) =>{
    return (
        <div className={styles.resultGroup}>
            <h2>Converted Value</h2>
            <p className={styles.convertedValue}>
                {value}
            </p>
        </div>
    )
}

export default ConvertedValue;