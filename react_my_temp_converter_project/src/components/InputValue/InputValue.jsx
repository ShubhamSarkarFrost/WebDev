import React, {Fragment} from "react";
import styles from './InputValue.module.css'


const InputValue = ({value, onChange, placeholder}) => {
      return(
          <Fragment>
              <div className={styles.inputGroup}>
                  <label htmlFor="input-value">Input Value:</label>
                  <input
                      id="input-value"
                      type="text"
                      value={value}
                      onChange={onChange} // The event handler comes from the parent
                      placeholder={placeholder}
                  />
              </div>
          </Fragment>
      )
}

export default InputValue;