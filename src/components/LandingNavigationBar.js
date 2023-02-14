import '../App.css';
import './LandingNav.css';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  let navigate = useNavigate();
  
  return (
    <div className="App">
      <div className="navigation">
        <h1 className="netflixLogo">Netflix</h1>
        <button className='signInButton' onClick={() => navigate("/loginpage")}>Sign In</button>
      </div>
    </div>
  );
}

export default NavigationBar;