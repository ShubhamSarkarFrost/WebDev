import React, {useState} from "react";
import UserLogin from "../UserLogin/UserLogin";
import styles from "../LoginHandler/LoginHandler.module.css"

const LoginHandler = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [user, setUser] = useState(
        {
            email : '',
            password: '',
            loggedIn: false,
        }
    );

    const handleLogin = () =>{
        setUser({
            email: inputEmail,
            password: inputPassword,
            loggedIn: true,
        });

        console.log(`User logged in with email : ${inputEmail} and password : ${inputPassword}`);
    }


    return (
        <div className={styles.appContainer}>
            {user.loggedIn ? (
                    <div className={styles.loggedInMessage}>
                        <h1>Welcome, {user.email}!</h1>
                        <p>You are now logged in.</p>
                    </div>
                ) : ( <UserLogin
                onLogin={handleLogin}
                email={inputEmail}
                password={inputPassword}
                setEmail={setInputEmail}
                setPassword={setInputPassword}
            /> )}
        </div>
    )

}

export default  LoginHandler;
