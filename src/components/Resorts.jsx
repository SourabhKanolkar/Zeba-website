import React from 'react'
import "../styles/resorts.css"
import Navbar from './Navbar'


export default function Resorts() {
  return (
   <>
   <div className="scroll-fix" style={{ height: '100vh' }}>
   <Navbar/>
  
  <section id='resorts-section-page'>

     <section className='banner-resorts-page'>
        <div className="banner-slide slick-slider">
             <div className="container" style={{height:"550px"}}>
               <div className="row" style={{height:"550px"}}>
                   <div className="col-md-12 banner-box-heading" style={{height:"550px"}}>
                       <h2 className='text-center' style={{fontSize:"50px",color:"#fff"}}> Resorts in India & Abroad</h2>
                   </div>
               </div>
             </div> 
        </div>
     </section>
    {/* above was code for the banner in resort */}
    <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Andaman and Nicobar Islands</h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>The Andaman & Nicobar Islands, nestled in the Bay of Bengal, are a paradise for nature enthusiasts and beach lovers. With their pristine white sandy beaches, crystal-clear turquoise waters, and diverse marine life, the islands offer an idyllic escape. One can choose from a variety of resorts in Andaman & Nicobar Islands, including Club Mahindra Resorts. These resorts provide a memorable stay and a range of amenities to ensure a memorable stay. Whether indulging in water sports like snorkeling and scuba diving, exploring the vibrant coral reefs, or simply basking in the sun, the Andaman & Nicobar Islands promise an unforgettable tropical getaway.</p>
         </div>
          
          <div className="listing-slider">
           <div className="polite">
             <div className="slide-track">
               <div className="slick-active" >
                 <div className="img-box-resort">
                   <figure>
                     <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' />
                   </figure>
                 </div>
               </div>
             </div>
           </div>
          </div>

       </div>

    </section>

  </section>
   </div>
   </>
  )
}
