import React, {Fragment} from 'react';
import styles from './UnitSelector.module.css'


const UnitSelector = ({label, id, value, onChange, units}) =>{
    return(
        <Fragment>
            <div className={styles.unitSelector}>
                <select id={id} value={value} onChange={onChange}>
                    {units.map((unit) => (
                        <option key={unit.value} value={unit.value}>
                            {unit.label}
                        </option>
                    ))}
                </select>
            </div>
        </Fragment>
    )
}

export default UnitSelector;