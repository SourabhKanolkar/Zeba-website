import React from 'react'
import Navbar from './Navbar'
import "../styles/home.css"

export default function Home() {
  return (
   <>
   <Navbar />
   <section id='home-page-section'>
   <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active c-item">
      <img src="https://defelizvacation.com/wp-content/uploads/2018/12/banner-thailand-3.jpg" className="d-block w-100 c-img" alt="..."/>
      <div className="carousel-caption top-0 mt-4 ">
        <p className='mt-5 fs-3' style={{letterSpacing:"2px"}}>THE ULTIMATE LUXURY EXPERIENCE</p>
        <h1 className='display-1 fw-bolder' style={{fontFamily:"Barlow Condensed, serif"}} >Find Your Dream Holidays</h1>
        <button className='btn btn-primary px-4 py-2 fs-5 mt-4 book-btn-home'>BOOK NOW</button>
      </div>
    </div>
    <div className="carousel-item c-item">
      <img src="https://defelizvacation.com/wp-content/uploads/2018/12/banner-img-4.jpg" className="d-block w-100 c-img" alt="..."/>
      <div className="carousel-caption  top-0 mt-4 ">
      <p className='mt-5 fs-3' style={{letterSpacing:"2px"}}>THE ULTIMATE LUXURY EXPERIENCE</p>
      <h1 className='display-1 fw-bolder' style={{fontFamily:"Barlow Condensed, serif"}} >Find Your Dream Holidays</h1>
      <button className='btn btn-primary px-4 py-2 fs-5 mt-4 book-btn-home'>BOOK NOW</button>
      </div>
    </div>
    <div className="carousel-item c-item ">
      <img src="https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 c-img " alt="..."/>
      <div className="carousel-caption top-0 mt-4 ">
      <p className='mt-5 fs-3' style={{letterSpacing:"2px"}}>THE ULTIMATE LUXURY EXPERIENCE</p>
      <h1 className='display-1 fw-bolder' style={{fontFamily:"Barlow Condensed, serif"}} >Find Your Dream Holidays</h1>
      <button className='btn btn-primary px-4 py-2 fs-5 mt-4 book-btn-home'>BOOK NOW</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

   </section>

   </>
  )
}
