import React from 'react'
import "../styles/about.css"
import aboutimg1 from "../assets/waterfall.jpg"
export default function AboutUs() {
  return (
   <>
   <section id="about-page-section">
   <h2 className='text-center about-us-heading' style={{fontSize:"1.5rem"}}>About Our Corporation. </h2>
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
               <p className='para-content-about text-center poppins-font '>Capture the essence of a mundane day and relish it as a festive one with us.
               Come elevate your hectic routine with a break of imagery and full of relaxing experiences with us.
               Engaging in leisure activities, exploring novels, and disconnecting from work-related responsibilities and help rejuvenate the mind and body.Take part in the revolutionary new way of taking holidays with OS DIA DE FESTA and guarantee your family vacations filled with happiness and love.</p>
               <button className='btn btn-primary px-4 py-2 fs-5 mt-4 call-btn-about mb-2' style={{color:"#AB8A62"}}>
  <a href="tel:9226531939" style={{textDecoration: 'none', color: '#AB8A62'}}>
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
   </section>
 
   </>
  )
}
