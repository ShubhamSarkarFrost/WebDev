import React , {useState} from 'react';
import styles from './Counter.module.css'
import ThemeToggleButton from "../ThemeToggle/ThemeToggleButton";
import iconImage from '../../assets/counter.png'


const Counter = () =>{
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');



    const increment = () => {
        setCount(count+ 1)
    }

    const decrement =() =>{
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const reset = () =>{
        setCount(0);
    }

    // Function to toggle between light and dark themes (now passed as prop)
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Dynamically apply classes based on the current theme
    const containerClass = `${styles.counterContainer} ${theme === 'dark' ? styles.darkTheme : ''}`;
    const titleClass = `${styles.counterTitle} ${theme === 'dark' ? styles.darkText : ''}`;
    const countDisplayClass = `${styles.countDisplay} ${theme === 'dark' ? styles.darkText : ''}`;
    const countValueClass = `${styles.countValue} ${theme === 'dark' ? styles.darkValue : ''}`;


    return (
        <div className={containerClass}>
            <img src={iconImage} alt="Counter Icon" className={styles.counterIcon} />
            <h2 className={titleClass}>Simple Counter</h2>
            <p className={countDisplayClass}>Count: <span className={countValueClass}>{count}</span></p>
            <div className={styles.buttonGroup}>
                <button className={styles.button} onClick={increment}>Increment</button>
                <button className={`${styles.button} ${styles.resetButton}`} onClick={reset}>Reset</button>
                <button className={styles.button} onClick={decrement}>Decrement</button>
            </div>
            <div className={styles.themeToggleContainer}>
                {/* Render the new ThemeToggleButton component */}
                <ThemeToggleButton
                    currentTheme={theme} // Pass the current theme down
                    onToggle={toggleTheme} // Pass the toggle function down as a callback
                />
            </div>
        </div>
    );
}

export default Counter;