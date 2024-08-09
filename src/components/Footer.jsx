import React from 'react'
import "../styles/footer.css";

export default function Footer() {
  return (
   <>
   <section id='footer-section-page'>
    <footer>
    <div className="footer-container">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h3 className='heading-logo-footer footer-logo'>OS DIA DE FESTA</h3>
                    <p className='footer-para'>Capture the essence of a mundane day and relish it as a festive one with us.
                    Come elevate your hectic routine with a break of imagery and full of relaxing experiences with us.</p>

                    <h3 className='heading-sm-footer'>FOLLOW US</h3>
                    <div className="social-icons-footer ">
                    <i className="bi bi-instagram social-icons"></i>
                    <i className="bi bi-facebook social-icons"></i>
                    <i className="bi bi-twitter-x social-icons"></i>
                    </div>
                </div>
               
               <div className="col-lg-4 col-md-6 col-sm-12">
                   <div className="pages-footer">
                    <h3 className='heading-pages-title '>Pages Links</h3>
                          
                    <ul className="navbar-nav justify-content-end     flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link footer-link-text" aria-current="page" style={{fontFamily:"sans-serif",color:"#fff"}}  href="#home-page-section"  >Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link footer-link-text" style={{fontFamily:"sans-serif",color:"#fff"}} href='#about-page-section'   >About-Us</a>
          </li>

          <li className="nav-item">
            <a className="nav-link footer-link-text" style={{fontFamily:"sans-serif",color:"#fff"}} href="/" >Destinations</a>
          </li>

          <li className="nav-item">
            <a className="nav-link footer-link-text" style={{fontFamily:"sans-serif",color:"#fff"}} href="/"  >Testimonials</a>
          </li>

          <li className="nav-item">
            <a className="nav-link footer-link-text" style={{fontFamily:"sans-serif",color:"#fff"}} href="/"  >BookNow</a>
          </li>
          <li className="nav-item">
            <a className="nav-link footer-link-text" style={{fontFamily:"sans-serif",color:"#fff"}} href="/" >Contact</a>
          </li>

          
        </ul>


                   </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-12">
                <h3 className='heading-pages-title'>Contact Us  </h3>
                <p className="contact-footer">
                  <span className='text-contact'><i className="bi bi-geo-alt-fill footer-icon"></i>No.361Baman Vaddo Lane 1,Candolim,Goa 403515</span>
                  <span className='text-contact'><i className="bi bi-telephone footer-icon"></i>+91 8421658656</span>
                  <span className='text-contact'><i className="bi bi-envelope footer-icon"></i>reservations@osdiadefestavacation.com</span>
                </p>

               </div>

            </div>
        </div>
          
          <div className="container-fluid">
            <div className="footer-rights">
              <p className="rights-para">Copyright @ OS DIA DE FESTA. All Rights Reserved. </p>
            </div>
          </div>

     </div>
    </footer>
   </section>
   
   </>
  )
}
