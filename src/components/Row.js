// src/components/Row.js
import React, { useState, useEffect } from 'react';
import axios from './utils/axios';
import './Row.css';
import movieTrailer from 'movie-trailer'
import youtube from 'react-youtube'
import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerurl] = useState('');
  // const [base_url] ="https://image.tmdb.org/t/p/original"; 
  
  
  
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, 
  [fetchUrl]);

  // // const handleClick = (movie)=> {
  // //   if (trailerUrl) {
  // //       setTrailerurl ('')
  // //          }
  // //    else {
  // //     movieTrailer(movie?.Title  ||  movie?.name  || movie?.Original_name)
  // //       .then((url) => { 
  // //         const urlParams = new URLSearchParams(new URL(url).search)
  // //         setTrailerurl(urlParams.get('v'));
           
  // //     })
  //   }
  // }
  
      // const opts = {
      //   height: '350',
      //   width: '1100',
      //   playerVars: {
      //     autoplay: 1,
      // },
    // }

   return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
          {movies.map((movie) => (
             <img
          // onClick={() =>handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      {/* </div>
      {/* <div style={{padding:'10px'}} >
      {trailerUrl  && <YouTube videoId={trailerUrl} opts={opts}/>}
   */}
    </div> 
    </div>
  );
};

export default Row;
