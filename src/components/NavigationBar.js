import '../App.css';

function NavigationBar() {
  return (
    <div className="App">
      <div className="navigation">
        <h1 className='netflixLogo'>Netflix</h1>
        <div className="navLinks">
          <a href="/"><p>Home</p></a>
          <a href="/tvshows"><p>Tv Shows</p></a>
          <a href="/movies"><p>Movies</p></a>
        </div> 
      </div>
    </div>
  );
}

export default NavigationBar;
