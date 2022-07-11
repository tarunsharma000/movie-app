import React, { useEffect, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "./firebase";

function Login() {
    const navigate = useNavigate ();   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate("./home", { replace: true });
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/home') 
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <h1 className='heading'>Search Your Movie!!</h1>
            <div className='login__container'>
                <h1>Sign-in</h1>
  
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="Please Enter Your E-mail"/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}
                    placeholder="Please Enter Your Password"
                    />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
            <footer>Project By Tarun Sharma</footer>
        </div>
    )
}

export default Login