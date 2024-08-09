

import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Destinations from './components/Destinations'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Login from './components/Login'
import Resorts from './components/Resorts'
import CompanyDetails from './components/CompanyDetails'
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
      <Route path='/home' element={<Home />}></Route>
      <Route path='/Affiliates' element={<Resorts />}></Route>
      <Route path='/companydetails' element={<CompanyDetails />}></Route>



    </Routes>


    
  
    

  
      
    </>
  )
}

export default App
