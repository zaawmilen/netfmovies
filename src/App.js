
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
// import Row from './components/Row';
import Header from './components/Header';
import Footer from './components/Footer';
import Rowlist from './components/Rowlist';
// import requests from './requests';


const App = () => {
  
  return (
   
      <div className="app">
    

      <Header/>
      {/* <NavBar/> */}
        <Banner/> 
        <Rowlist/>
      {/* <Row title="NETFLIX ORIGINALS" fetchUrl="/netflix-originals" isLargeRow />
      <Row title="Trending" fetchUrl="/trending"  isLargeRow/>
       <Row title="Top Rated" fetchUrl="/top-rated"  isLargeRow/>
      <Row title="Action Movies" fetchUrl="/action"  isLargeRow/>
      <Row title="Adventure Movies" fetchUrl="/adventure"  isLargeRow/>
      <Row title="Animation Movies" fetchUrl="/animation"  isLargeRow/>
      <Row title="Comedy Movies" fetchUrl="/comedy"  isLargeRow/>
      <Row title="Crime Movies" fetchUrl="/crime"  isLargeRow/>
      <Row title="Documentary Movies" fetchUrl="/documentary"  isLargeRow/>
      <Row title="Drama Movies" fetchUrl="/drama"  isLargeRow/>
      <Row title="Documentary Movies" fetchUrl="/documentary"  isLargeRow/>
      <Row title="Family Movies" fetchUrl="/family"  isLargeRow/>
      <Row title="Fantasy Movies" fetchUrl="/fantasy"  isLargeRow/>
       <Row title="History Movies" fetchUrl="/history"  isLargeRow/>
      <Row title="Horror Movies" fetchUrl="/horror"  isLargeRow/>
      <Row title="Music Movies" fetchUrl="/music"  isLargeRow/>
       <Row title="Mystery Movies" fetchUrl="/mMstery"  isLargeRow/>
      <Row title="Romance Movies" fetchUrl="/romance"  isLargeRow/>
      <Row title="ScienceFiction" fetchUrl="/scienceFiction"  isLargeRow/>
      <Row title="TVMovie" fetchUrl="/tVMovie"  isLargeRow/>
      <Row title="Thriller Movies" fetchUrl="/thriller"  isLargeRow/>
      <Row title="War Movies" fetchUrl="/war"  isLargeRow/>
      <Row title="Western Movies" fetchUrl="/western" isLargeRow />  */}
      <Footer/>   
    
    </div>
)
};

export default App;


  