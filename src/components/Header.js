import React, { useState, useEffect } from 'react';
import axios from '../axios';
import "../header.css";

function Header({fetchURL, movie, tv}) {
    const [movies, setMovies] = useState([]);
    const [isMovie, setIsMovie] = useState(null);

    useEffect(() => {
        fetchMovies();
        setIsMovie(movie);
    }, []);

    const fetchMovies = async () => {
        const ApiData = await axios.get(fetchURL);
        setMovies(ApiData.data.results[Math.floor(Math.random() * ApiData.data.results.length - 1)]);
        console.log(ApiData.data);
        return ApiData;
    }

  return (
    <div>
        <div className='headerBody' style={{backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`, backgroundPosition: "center center"}}>
            <div className='banner_contents'>
                <h5 className="movieTitle">{isMovie ? movies?.title : movies?.original_name}</h5>
                <p className="movieDescription">{movies?.overview}</p>
                <button className="playButton">Play</button>
                <button className="MyListButton">My List</button>
            </div>
        </div>
    </div>
  )
}

export default Header