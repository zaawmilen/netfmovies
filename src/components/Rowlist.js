import React from 'react'
import Row from './Row'
import requests from './utils/requests'




const Rowlist = () => {
  return (
    <>
    
    <Row
    title="Netflix Originals"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow = {true}
    />
    
    <Row
    title="Trending"
    fetchUrl={requests.fetchTrending}
   
    />
    <Row
    title="Top Rated"
    fetchUrl={requests.fetchTopRated}
   
    />
    <Row
    title="Action"
    fetchUrl={requests.fetchActionMovies}
   
    />
    <Row
    title="Adventure"
    fetchUrl={requests.fetchAdventureMovies}
   
    />
    <Row
    title="Animation"
    fetchUrl={requests.fetchAnimationMovies}
   
    />
    <Row
    title="Comedy"
    fetchUrl={requests.fetchComedyMovies}
   
    />
    <Row
    title="Crime"
    fetchUrl={requests.fetchCrimeMovies}
   
    />
    <Row
    title="Documentary"
    fetchUrl={requests.fetchDocumentaryMovies}
   
    />
    <Row
    title="Drama"
    fetchUrl={requests.fetchDramaMovies}
   
    />
    <Row
    title="Family"
    fetchUrl={requests.fetchFamilyMoviess}
   
    />
    <Row
    title="Fantasy"
    fetchUrl={requests.fetchFantasyMovies}
   
    />
    <Row
    title="History"
    fetchUrl={requests.fetchHistoryMovies}
   
    />
    <Row
    title="Horror"
    fetchUrl={requests.fetchHorrorMovies}
   
    />
    <Row
    title="Music"
    fetchUrl={requests.fetchMusicMovies}
   
    />
    <Row
    title="Mystery"
    fetchUrl={requests.fetchMysteryMovies}
   
    />

<Row
    title="Romance"
    fetchUrl={requests.fetchRomanceMovies}
   
    />

<Row
    title="Science"
    fetchUrl={requests.fetchScienceFiction}
   
    />

<Row
    title="TV Movie"
    fetchUrl={requests.fetchTVMovie}
   
    />

{/* <Row
    title="Thriller"
    fetchUrl={requests.fetchThrillerMovies}
   
    /> */}

<Row
    title="War"
    fetchUrl={requests.fetchWarMovies}
   
    />

<Row
    title="Western"
    fetchUrl={requests.fetchWesternMovies}
    //
    />


    </>
  )
}

export default Rowlist