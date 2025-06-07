import React from "react";
import styles from './profressorCard.module.css';


const ProfressorCard = ({image, children}) => {
    return (
        <div className={styles.professorCard}>
              <img className={styles.professorImage} src={image} alt="professor-image"/>
               <div className={styles.professorContent}>
                   {children}
               </div>
        </div>
    );
}

export default  ProfressorCard;