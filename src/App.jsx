import React from 'react'
import "./App.css"
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  
  return (
    <>
      <div className=''>
      <img className='' src="src/assets/tobias-rademacher-kq-Qf1ZCQvc-unsplash.jpg" alt="background img" />
        <Navbar/>
        <Home/>  
        <Footer/>
      </div>    
    </>
  );
}

export default App;
