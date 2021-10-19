import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {

    const { signUpWithEmailPassword, signInUsingGoogle, user, error } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const handleEmailSignUp = (e) => {
        e.preventDefault()
        signUpWithEmailPassword(email, password)

    }

    const getUserName = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="login-container">
            <div className="form-container">
                <div>
                    <h2>Sign Up </h2>
                    <p className="text-danger">{error}</p>
                </div>
                <form onSubmit={handleEmailSignUp}>
                    <input onBlur={getUserName} className="input-field" type="text" placeholder="Enter Your Name" />
                    <input onBlur={getEmail} className="input-field" type="email" placeholder="Enter Your Email" />
                    <input onBlur={getPassword} className="input-field" type="password" placeholder="Enter Your Password" />
                    <input className="submit-button" type="Submit" value="Continue" />
                </form>
                <p className="text-center my-3">----------or------------</p>
                <button onClick={signInUsingGoogle} className="google-login-button" ><i className="fab fa-google mx-2"></i>Google log in</button>
                <p className="text-center my-3">Already have an account? please <Link to="/login">Log In</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;