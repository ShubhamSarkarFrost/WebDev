import React from "react";
import styles from "../UserLogin/UserLogin.module.css";


const UserLogin = ({onLogin, email, password, setEmail, setPassword}) => {
    return (
        <div className={styles.loginCard}>
            <h2 className={styles.loginTitle}>USER LOGIN</h2>
            <div className={styles.inputGroup}>
                <label className={styles.inputGroupLabel} htmlFor="email">EMAIL</label>
                {/* The input fields are present but their values are ignored as per instructions */}
                <input type="email" id="email" value={email} className={styles.inputField} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.inputGroupLabel} htmlFor="password">PASSWORD</label>
                {/* The input fields are present but their values are ignored as per instructions */}
                <input type="password" id="password" value={password} className={styles.inputField} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={onLogin} className={styles.loginButton}>
                Login
            </button>
        </div>
    );
}

export default UserLogin;
