import { async } from '@firebase/util';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./authenticationForm.css";
import { auth } from './Firebase';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  const resetPassword = async () => {
    await sendPasswordResetEmail(auth, email).then(() => {
      navigate('/loginpage')
    })
  }

  return (
    <div className="backgroundImage">
        <h1 className="netflixLogo">Netflix</h1>
        <div className="forgotPasswordContainer">
          <h1 className='forgotPasswordTitle'>ForgotPassword</h1>
          <input className="email-address" placeholder="Email Address" type="email" onChange={(e) => setEmail(e.target.value)}/>
          <button onClick={resetPassword} className="signInButton">Send Password Reset Email</button>
        </div>
    </div>
  )
}

export default ForgotPassword;