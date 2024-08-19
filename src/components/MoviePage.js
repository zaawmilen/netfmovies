import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from './utils/axios';
import Row from './Row';
import requests from './utils/requests';

const MoviesPage = () => {
  const { categoryName } = useParams();
  const [fetchUrl, setFetchUrl] = useState("");

  useEffect(() => {
    switch (categoryName) {
      case 'Netflix Originals':
        setFetchUrl(requests.fetchNetflixOriginals);
        break;
      case 'Trending':
        setFetchUrl(requests.fetchTrending);
        break;
      case 'Top Rated':
        setFetchUrl(requests.fetchTopRated);
        break;
      case 'Action':
        setFetchUrl(requests.fetchActionMovies);
        break;
      case 'Comedy':
        setFetchUrl(requests.fetchComedyMovies);
        break;
      // Add more cases for other categories
      default:
        setFetchUrl(requests.fetchTrending); // Default to trending if category not found
    }
  }, [categoryName]);

  return (
    <div>
      <h2>{categoryName}</h2>
      <Row title={categoryName} fetchUrl={fetchUrl} />
    </div>
  );
};

export default MoviesPage;
