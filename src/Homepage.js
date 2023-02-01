import './App.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Row from './components/Row';
import { request } from './requests';

function Homepage() {
  return (
    <div className="App">
        <NavigationBar/>
        <Header fetchURL={request.fetchTrending} movie={true}/>
        <Row rowTitle={"Netflix Originals"} rowURL={request.fetchNetflixOriginals}/>
        <Row rowTitle={"Action Movies"} rowURL={request.fetchActionMovies}/>
        <Row rowTitle={"Comedy Movies"} rowURL={request.fetchComedyMovies}/>
        <Row rowTitle={"Top Rated"} rowURL={request.fetchTopRated}/>
    </div>
  );
}

export default Homepage;