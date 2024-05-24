
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl="/netflix-originals" isLargeRow />
      <Row title="Trending Now" fetchUrl="/trending" />
      <Row title="Top Rated" fetchUrl="/top-rated" />
      <Row title="Action Movies" fetchUrl="/action" />
      <Row title="Comedy Movies" fetchUrl="/comedy" />
      <Row title="Horror Movies" fetchUrl="/horror" />
      <Row title="Romance Movies" fetchUrl="/romance" />
      <Row title="Documentaries" fetchUrl="/documentaries" />
    </div>
  );
}

export default App;
