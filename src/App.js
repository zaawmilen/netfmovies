
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Row from './components/Row';
import Header from './components/Header';
import Footer from './components/Footer';
// import requests from './requests';


const App = () => {
  
  return (
   
      <div className="app">
    

      <Header/>
      {/* <NavBar/> */}
        <Banner/> 
      {/* <Row title="NETFLIX ORIGINALS" fetchUrl="/netflix-originals" isLargeRow />
      <Row title="Trending Now" fetchUrl="/trending" />
       <Row title="Top Rated" fetchUrl="/top-rated" />
      <Row title="Action Movies" fetchUrl="/action" />
      <Row title="Comedy Movies" fetchUrl="/comedy" />
      <Row title="Horror Movies" fetchUrl="/horror" />
      <Row title="Romance Movies" fetchUrl="/romance" />
      <Row title="Documentaries" fetchUrl="/documentaries" /> */}
      <Footer/>   
    
    </div>
)
};

export default App;


  