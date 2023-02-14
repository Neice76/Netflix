import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import './authenticationForm.css';

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then((result) => {
      navigate('/home');
      sendEmailVerification(auth, email).then(() => {
        navigate('/home')
      })
      console.log(result);
    }).catch(err => {
      console.log(err);
      navigate('/registrationpage');
    })
  }

  return (
    <div className="backgroundImage">
        <h1 className="netflixLogo">Netflix</h1>
        <div className="registrationContainer">
          <h1 className='signInTitle'>Create your Account</h1>
          <input className="email-address" placeholder="Email Address" type="email" onChange={(e) => setEmail(e.target.value)}/>
          <input className="password" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={createUser} className="createAccountButton">Create Account</button>
          <p className="loginContainer">Already have an Account?<a href="/loginpage" className='loginLink'>Login</a></p>
        </div>

    </div>
  )
}

export default RegistrationPage;