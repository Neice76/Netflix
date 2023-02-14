import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import './authenticationForm.css';

function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    await signInWithEmailAndPassword(auth, email, password).then((result) => {
      navigate('/home')
      console.log(result);
    }).catch(err => {
      console.log(err);
      navigate('/loginpage');
    })
  }

  return (
    <div className="backgroundImage">
        <h1 className="netflixLogo">Netflix</h1>
        <div className="signInContainer">
          <h1 className='signInTitle'>Sign In</h1>
          <input className="email-address" placeholder="Email Address" type="email" onChange={(e) => setEmail(e.target.value)}/>
          <input className="password" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <a href="/forgotpassword" className="forgotPasswordLink">Forgot Password?</a>
          <button onClick={loginUser} className="signInButton">Sign In</button>
          <p className="signUpLinkContainer">Don't have an Account?<a href="/registrationpage" className='signUpLink'>Sign Up</a></p>
        </div>

    </div>
  )
}

export default LoginPage;