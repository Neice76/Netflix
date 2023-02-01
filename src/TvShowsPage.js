import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Row from './components/Row';
import { request } from './requests';

function TvShowsPage() {
    return (
      <div className="App">
          <NavigationBar/>
          <Header fetchURL={request.fetchComedyTvShows} movie={false}/>
          <Row rowTitle={"Trending Tv Shows"} rowURL={request.fetchTrendingTvShows}/>
          <Row rowTitle={"Netflix Originals"} rowURL={request.fetchNetflixOriginals}/>
          <Row rowTitle={"Action Tv Shows"} rowURL={request.fetchActionTvShows}/>
          <Row rowTitle={"Animation Tv Shows"} rowURL={request.fetchAnimationTvShows}/>
      </div>
    );
  }

export default TvShowsPage;  