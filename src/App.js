import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import TvShowsPage from './TvShowsPage';
import MoviesPage from './MoviesPage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path="/tvshows" element={<TvShowsPage />} />
          <Route exact path="/movies" element={<MoviesPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
