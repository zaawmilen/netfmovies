
import React from 'react';
import './App.css';
// import NavBar from './components/NavBar';
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
     
      <Footer/>   
    
    </div>
)
};

export default App;


  