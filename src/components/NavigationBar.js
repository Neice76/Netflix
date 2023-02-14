import '../App.css';
import { auth } from './Firebase';

function NavigationBar() {
  return (
    <div className="App">
      <div className="navigation">
        <h1 className='netflixLogo'>Netflix</h1>
        <div className="navLinks">
          <a href="/home"><p>Home</p></a>
          <a href="/tvshows"><p>Tv Shows</p></a>
          <a href="/movies"><p>Movies</p></a>
        </div>
        <div className="profileContainer">
          <img src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" className="profileImage"/>
          <p className="currentUserEmail">{auth.currentUser?.email}</p>
       </div>
      </div>
    </div>
  );
}

export default NavigationBar;
