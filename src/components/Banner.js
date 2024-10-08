// src/components/Banner.js
import React, { useState, useEffect } from 'react';
import axios from './utils/axios';
// import requests from 'requests';
import './Banner.css';
import requests from './utils/requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
       console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
    
  // const handleClick = (movie)=> {
    // if (trailerUrl) {
    //    setTrailerurl ('')
    //         }
    //   else {
    //    movieTrailer(movie?.name  || movie?.Title  || movie?.Original_name)
    //      .then((url) => { 
    //         const urlParams = new URLSearchParams(new URL(url).search)
    //        setTrailerurl(urlParams.get('v'));
    //                 })
    //                }
    //              };
  
  
  
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
        {/* onClick={() => handleClick(movie)}
            key={movie.id}
            className={`banner__buttons ${isLargeRow && "banner__buttonsLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} */}
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
