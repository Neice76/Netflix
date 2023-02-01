import React from 'react';
import LandingNavigationBar from './LandingNavigationBar';
import './LandingNav.css';

function LandingPage() {
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
              <button className='freeMonthButton'>Get Started</button>
            </div>
          </div>
        </div>

        <div className='border'></div>

        <div className='section2'>
          <h1 className='section2Title'>Enjoy on your Tv</h1>
          <h2 className='section2Body'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple Tv, Blu-ray players, and more.</h2>
          <div className='tvAnimation'>
            <img className='tvPicture'/>
            <video autoplay playsInline>
              <video preload="auto" playsinline="" poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" tabindex="-1"></video>
            </video>
          </div>
        </div>
    </div>
  )
}

export default LandingPage;