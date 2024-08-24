import React from 'react'
import logo from "../assets/logo-rm.png"
import { Link } from 'react-router-dom';

export default function NavA() {
    const handleLinkClick = () => {
        const offcanvasElement = document.getElementById('offcanvasNavbar');
        const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
        bsOffcanvas.hide();
      
      }
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} className='img-fluid' width={70} height={70} alt="logo here" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
        <a className="navbar-brand" href="#"><img src={logo} className='img-fluid' width={70} height={70} alt="logo here" /></a>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end     flex-grow-1 pe-3">
          <li className="nav-item">
            {/* <a className="nav-link" aria-current="page" style={{fontFamily:"sans-serif"}}  href="#" onClick={handleLinkClick} >Home</a> */}
            <Link to="/home" className="nav-link" style={{ fontFamily: "sans-serif" }} onClick={handleLinkClick}>Home</Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" style={{fontFamily:"sans-serif"}} href='#about-page-section' onClick={handleLinkClick}  >About-Us</a> */}
            <Link to="/home" className="nav-link" style={{ fontFamily: "sans-serif" }} onClick={handleLinkClick}>About-Us</Link> 
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" style={{fontFamily:"sans-serif"}} href="/" onClick={handleLinkClick} >Resorts</a> */}
            <Link to="/Affiliates" className="nav-link" style={{ fontFamily: "sans-serif" }} onClick={handleLinkClick}>Affiliates</Link>
          </li>
          <li className="nav-item">
                <Link to="/companydetails" className="nav-link" style={{ fontFamily: "sans-serif" }} onClick={handleLinkClick}>Company details</Link>
                </li>
                
                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resorts
          </a>
          <ul className="dropdown-menu">
            <li>   <Link to="/affilidatedresorts" className="nav-link" style={{ fontFamily: "sans-serif" }} onClick={handleLinkClick}>Domestic</Link>
            </li>
            <li>   <Link to="/international" className="nav-link" style={{ fontFamily: "sans-serif" }} onClick={handleLinkClick}>International</Link>
            </li>


            <li><a className="dropdown-item" href="#">Exchange</a></li>
            
          </ul>
        </li>


          <li className="nav-item">
            {/* <a className="nav-link" style={{fontFamily:"sans-serif"}} href="#testimonial-page-section" onClick={handleLinkClick} >Testimonials</a> */}
            <Link to="/home" className="nav-link" style={{ fontFamily: "sans-serif" }} onClick={handleLinkClick}>Testimonials</Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" style={{fontFamily:"sans-serif"}} href="/" onClick={handleLinkClick} >BookNow</a> */}
            <Link to="/membership" className="nav-link" style={{ fontFamily: "sans-serif" }} onClick={handleLinkClick}>Membership</Link>
          
          </li>
          {/* <li className="nav-item">
           
            <Link to="/home" className="nav-link" style={{ fontFamily: "sans-serif" }} onClick={handleLinkClick}>Contact</Link>
          </li> */}

          
        </ul>
        
      </div>
    </div>
  </div>
</nav>
    
    
    </>
  )
}
