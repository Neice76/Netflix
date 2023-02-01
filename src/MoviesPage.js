import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Row from './components/Row';
import { request } from './requests';

function MoviesPage() {
    return (
      <div className="App">
          <NavigationBar/>
          <Header fetchURL={request.fetchTrending} movie={true}/>
          <Row rowTitle={"Top Rated Movies"} rowURL={request.fetchTopRated}/>
          <Row rowTitle={"Action Movies"} rowURL={request.fetchActionMovies}/>
          <Row rowTitle={"Documentaries Movies"} rowURL={request.fetchDocumentaries}/>
          <Row rowTitle={"Comedy Movies"} rowURL={request.fetchComedyMovies}/>
          <Row rowTitle={"Romance Movies"} rowURL={request.fetchRomanceMovies}/>
          <Row rowTitle={"Horror Movies"} rowURL={request.fetchHorrorMovies}/>
      </div>
    );
  }

export default MoviesPage;  
