

import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Destinations from './components/Destinations'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'


function App() {
   
  
  

  return (
    <>
    {/* <Home />
    <AboutUs />
    <Destinations />
    <Testimonial />
    <Footer /> */}

    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={
        <>
        <Home />
    <AboutUs />
    <Destinations />
    <Testimonial />
    <Footer /> 
        
        </>
      }></Route>


    </Routes>


    
  
    

  
      
    </>
  )
}

export default App
