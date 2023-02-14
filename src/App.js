import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import TvShowsPage from './TvShowsPage';
import MoviesPage from './MoviesPage';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/loginpage" element={<LoginPage/>}/>
          <Route exact path="/registrationpage" element={<RegistrationPage/>}/>
          <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path="/tvshows" element={<TvShowsPage />} />
          <Route exact path="/movies" element={<MoviesPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
