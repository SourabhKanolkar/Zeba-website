import React from 'react'
import "../styles/testimonial.css"


export default function Testimonial() {
  return (
 <>

 <section id="testimonial-page-section">
   <div className="container ">
    <div className="row">
        <h2 className='text-center poppins-font display-5' style={{color:"#AB8A62",}}>Testimonial</h2>
        <div className="col-md-12 mt-4">

        <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
    
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active" style={{height:"250px"}}>
     <div className="container">
     <div className="row">
     <div className="col-md-12 testimonila-text-align">
        <h2 className='text-center' style={{color:"#000"}}>Sourabh Knaolkar</h2>
        <p className='text-center poppins-font' style={{color:"#000"}}>Wow nice rooms and service All the rooms are kept clean, good care and work for this maravilha a Boutique stay??</p>
        </div>
     </div>
     </div>
    </div>

    <div className="carousel-item"  style={{height:"250px"}}>
    <div className="container">
     <div className="row">
     <div className="col-md-12  testimonila-text-align">
        <h2 className='text-center' style={{color:"#000"}}>Ajay Sharma</h2>
        <p className='text-center poppins-font' style={{color:"#000"}}>I recently had the pleasure of staying at the Maravilha a Boutique Stay Goa, and the experience was nothing short of exceptional.</p>
        </div>
     </div>
     </div>
    </div>

    <div className="carousel-item"  style={{height:"250px"}}>
    <div className="container">
     <div className="row">
     <div className="col-md-12  testimonila-text-align">
        <h2 className='text-center' style={{color:"#000"}}>Siddik Naikawadi</h2>
        <p className='text-center poppins-font' style={{color:"#000"}}>Nestled amidst lush greenery and surrounded by breathtaking views, this resort offers the perfect escape from the hustle and bustle of city life.</p>
        </div>
     </div>
     </div>
    </div>

    {/* <div className="carousel-item"  style={{height:"250px"}}>
    <div className="container">
     <div className="row">
     <div className="col-md-12  testimonila-text-align">
        <h2 className='text-center' style={{color:"#000"}}>Vedant Karekar</h2>
        <p className='text-center poppins-font' style={{color:"#000"}}>Fantastic ambience with great staff, rooms are well maintained and staff is well mannered</p>
        </div>
     </div>
     </div>
    </div> */}
   
   
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next" >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  
    <span className="visually-hidden">Next page</span>
  </button>
</div>
         
        </div>
    </div>
   </div>
 </section>
 
 
 </>
  )
}
