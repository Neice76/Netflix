import React from 'react';
import LandingNavigationBar from './LandingNavigationBar';
import { useNavigate } from 'react-router-dom';
import './LandingNav.css';

function LandingPage() {
  let navigate = useNavigate();

  return (
    <div>
        <div className="backgroundImage">
          <LandingNavigationBar/>
          <div className="landingPageBody">
            <h1 className='title'>Unlimited movies, Tv shows, and more.</h1>
            <p className='body'>Watch Anywhere. Cancel Anytime.</p>
            <p className='body2'>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className="emailForm">
              <input type="email" placeholder="Email address" className="emailInput"/>
              <button className='freeMonthButton' onClick={() => navigate("/registrationpage")}>Get Started</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage;