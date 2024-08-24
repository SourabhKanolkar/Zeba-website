import React from 'react'
import "../styles/about.css"
import aboutimg1 from "../assets/waterfall.jpg"
import incopimg from "../assets/incop.jpg"
import isoImg from "../assets/iso2.jpg"
export default function AboutUs() {
  return (
   <>
   <section id="about-page-section">
   <h2 className='text-center about-us-heading animate__backInLeft' style={{fontSize:"1.5rem"}}>About Our Corporation. </h2>
   <p className='lead text-center about-head-para '>Having the whole resort to yourself has never been more important !</p>
   <div className="container about-us-content">
   
    <div className="row">
         <div className="col-lg-3 col-md-12 mt-3">
            <div className="img-about-1">
              <img src={aboutimg1}  alt="waterfall" className='img-fluid img-content' />
            </div>
         </div>
           
           <div className="col-lg-6 col-md-12 text-center  ">
             <div className="conatent-about-text">
               <h4 className='content-about-head-texts text-center display-5 mt-3 mb-4 mb-lg-2' style={{color:"#AB8A62",}} >About Us</h4>
               <p className='para-content-about text-center poppins-font '>Majestic group of hotels is the driving force behind os dia de festa vacations ,A brand dedicated to provinding exceptional travel experiences. Majestic vacation is one of the most recognized brands in Indian Hospitality Industry. We have empaneled all state of the art luxury properties to cater the market. As being the pioneer in hospitality industry, Majestic Vacation answer the perfect blend of craftmanship & variety in membership plans.
Majestic vacation has passed 7 years of accomplishment, aining to lead competitive segment of hospitality in India. Majestic vacation has re-engineered each step in segment of the industry & its value-chain to match the dynamism of Indian hospitality market.
Parent organization: Majestic group
Founded: 1993, Kolkata, India.
Head office.
2nd, 16K, Fern Rd, Ballygunge, Kolkata, West Bengal 700019, india.
Corporate office.
10-8, Halasuru, cross road, Bengaluru
Karnataka 560008, India. </p>
               <button className='btn btn-primary px-4 py-2 fs-5 mt-4 call-btn-about mb-2' style={{color:"#AB8A62"}}>
  <a href="tel:8421658656" style={{textDecoration: 'none', color: '#AB8A62'}}>
    <i className="bi bi-telephone"></i> Call Us
  </a>
</button>
             </div>
           </div>

           <div className="col-lg-3 col-md-12 mt-3">
            <div className="img-about-1">
              <img src="https://maravilha.in/wp-content/uploads/2019/02/IMG_5181_1.jpg"  alt="waterfall" className='img-fluid img-content' />
            </div>
         </div>
    </div>
   </div>

   <div className="container mt-3">
    <div className="row">
  
    <div className="col-12 text-center">
      <img src={isoImg} alt="certificate ISO" className='img-flui certificate '  />
    </div>
    </div>

   </div>

   </section>
 
   </>
  )
}
