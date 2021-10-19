import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'



const Login = () => {
    const { signInUsingGoogle, signInWithEmailPassword, user, error } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleEmailLogIn = (e) => {
        e.preventDefault()
        signInWithEmailPassword(email, password)

    }

    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    console.log(user, error)


    return (
        <div className="login-container">
            <div className="form-container">
                <div className="d-flex">
                    <h2>Log in </h2>
                    <p className="text">{error}</p>
                </div>
                <form onSubmit={handleEmailLogIn}>
                    <input required onBlur={getEmail} className="input-field" type="text" placeholder="Enter Your Email" />
                    <input required onBlur={getPassword} className="input-field" type="password" placeholder="Enter Your Password" />
                    <input className="submit-button" type="Submit" value="Continue" />
                </form>
                <p className="text-center my-3">----------or------------</p>
                <button onClick={signInUsingGoogle} className="google-login-button" ><i className="fab fa-google mx-2"></i>Google log in</button>
                <p className="my-3 text-center">Are You New In <span className="text-danger">MEDICARE</span> ? please <Link to="/signup">Sign Up</Link> </p>
            </div>
        </div>
    );
};

export default Login;