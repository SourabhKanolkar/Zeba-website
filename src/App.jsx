

import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Destinations from './components/Destinations'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Login from './components/Login'
import Resorts from './components/Resorts'
import AffiliatedResort from './components/AffiliatedResort'
import ResortDetailed from './components/ResortDetailed'
import InternationalResort from './components/InternationalResort'
import Membership from './components/Membership'
import InternationalDet from './components/InternationalDet' 
import Payment from './components/Payment'

import CompanyDetails from './components/CompanyDetails'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'


function App() {
   
  const [loginIS,setLoginIS]=useState(false);
  const [redirectURL, setRedirectURL] = useState('/'); 

  return (
    <>
    {/* <Home />
    <AboutUs />
    <Destinations />
    <Testimonial />
    <Footer /> */}

    <Routes>
      <Route path='/' element={<Home />}></Route>
      {/* <Route path='/home' element={<Home />}></Route> */}
      <Route path='/login' element={<Login loginIS={loginIS} setLoginIS={setLoginIS} redirectURL={redirectURL} setRedirectURL={setRedirectURL} />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/Affiliates' element={<Resorts />}></Route>
      <Route path='/companydetails' element={<CompanyDetails />}></Route>
      <Route path='/affilidatedresorts' element={<AffiliatedResort />}></Route>
      <Route path="/resorts/:id" element={<ResortDetailed loginIS={loginIS} setLoginIS={setLoginIS} redirectURL={redirectURL} setRedirectURL={setRedirectURL}  />} />
      <Route path='/international' element={<InternationalResort />}></Route>
      <Route path="/internationalresorts/:id" element={<InternationalDet loginIS={loginIS} setLoginIS={setLoginIS} redirectURL={redirectURL} setRedirectURL={setRedirectURL} />} />
      <Route path='/membership' element={<Membership/>}></Route>
      <Route path='/payment-page' element={<Payment />}></Route>
    </Routes>


    
  
    

  
      
    </>
  )
}

export default App
