import '../App.css';
import './LandingNav.css';

function NavigationBar() {
  return (
    <div className="App">
      <div className="navigation">
        <h1 className="netflixLogo">Netflix</h1>
        <button className='signInButton'>Sign In</button>
      </div>
    </div>
  );
}

export default NavigationBar;