import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.css';

function Row({rowTitle, rowURL, isLargeRow}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [rowURL]);

  const fetchMovies = async () => {
    const ApiData = await axios.get(rowURL);
    setMovies(ApiData.data.results)
    return ApiData;
  }

  return (
    <div className="rowComponent">
      <h2>{rowTitle}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path !== null && (
                    <img
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
            )
        )}
      </div>
    </div>
  )
}

export default Row;