import React from 'react'
import Navbar from './Navbar'
import "../styles/home.css"
import AboutUs from './AboutUs'
import Destinations from './Destinations'
import Testimonial from './Testimonial'
import Partners from './Partners'
import Footer from './Footer'
import whatsIcon from "../assets/whats-icon.png"
import maya from "../assets/maya.png"
import ifra from "../assets/ifra.png"
import logopic from "../assets/logo-rm.png"
import { useState } from 'react'

export default function Home() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "918421658656";
    const message = `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  
  return (
   <>
   <div className="scroll-fix-2" style={{ height: '100vh' }}>
   
   <Navbar />
   <section id='home-page-section'>
   
   <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner home-bg-img">
    <div className="carousel-item active c-item">
      <img src="https://defelizvacation.com/wp-content/uploads/2018/12/banner-thailand-3.jpg" className="d-block w-100 c-img" alt="..."/>
      <div className="carousel-caption top-0 mt-4 ">
        <p className='mt-5 fs-3  ' style={{letterSpacing:"2px"}}>THE ULTIMATE LUXURY EXPERIENCE</p>
        <h1 className='display-1 fw-bolder animate__animated animate__bounce first-tag-line' style={{fontFamily:"Barlow Condensed, serif"}} >Join us on this unforgettable journey</h1>
        <button className='btn btn-primary px-4 py-2 fs-5 mt-4 book-btn-home'>BOOK NOW</button>
      </div>
    </div>
    <div className="carousel-item c-item">
      <img src="https://defelizvacation.com/wp-content/uploads/2018/12/banner-img-4.jpg" className="d-block w-100 c-img" alt="..."/>
      <div className="carousel-caption  top-0 mt-4 ">
      <p className='mt-5 fs-3' style={{letterSpacing:"2px"}}>THE ULTIMATE LUXURY EXPERIENCE</p>
      <h1 className='display-1 fw-bolder animate__animated animate__bounce secound-tag-line' style={{fontFamily:"Barlow Condensed, serif"}} >Where every memory has a story to tell</h1>
      <button className='btn btn-primary px-4 py-2 fs-5 mt-4 book-btn-home'>BOOK NOW</button>
      </div>
    </div>
    <div className="carousel-item c-item ">
      <img src="https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 c-img " alt="..."/>
      <div className="carousel-caption top-0 mt-4 ">
      <p className='mt-5 fs-3' style={{letterSpacing:"2px"}}>THE ULTIMATE LUXURY EXPERIENCE</p>
      <h1 className='display-1 fw-bolder animate__animated animate__bounce' style={{fontFamily:"Barlow Condensed, serif"}} >Find Your Dream Holidays</h1>
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

   <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h1 className="modal-title fs-5 " id="exampleModalLabel">CONTACT-US</h1> */}
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="logo-box d-flex justify-content-center">
            <img src={logopic}  alt="logo here" style={{width:"100px"}} className='img-fluid logo-img-login' />
          </div>
        <h2 className='text-center poppins-font' style={{fontWeight:"500",color:"rgb(171, 138, 98)"}}>CONTACT-US</h2>
     
      <form onSubmit={handelSubmit}>

      <div className="mb-3">
    <label for="name" className="form-label poppins-font" style={{fontWeight:"500"}}>Name:</label>
    <input type="text"  onChange={(e) => setName(e.target.value)} style={{outline:"1px solid #AB8A62"}} className="form-control" id="name" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label poppins-font" style={{fontWeight:"500"}}>Email address:</label>
    <input type="email" style={{outline:"1px solid #AB8A62"}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>

  <div className="mb-3">
    <label for="exampleInputNumber" className="form-label poppins-font" style={{fontWeight:"500"}}>Number:</label>
    <input type="number" onChange={(e) => setNumber(e.target.value)} style={{outline:"1px solid #AB8A62"}} className="form-control" id="exampleInputNumber" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>

  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label poppins-font" style={{fontWeight:"500"}}>Message:</label>
  <textarea onChange={(e) => setMessage(e.target.value)} className="form-control" style={{outline:"1px solid #AB8A62"}} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

      </form>
      </div>
      <div className="modal-footer d-flex justify-content-center">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">SUBMIT</button>
 
      </div>
    </div>
  </div>
</div>
   
   <AboutUs />
   <Destinations/>
   <Testimonial />
   <Partners />
   <Footer />
    
    

   </div>

   <div className="whats-div">
   <a href="https://wa.me/8421658656?text=Hello" target='blank' style={{position:"fixed",left:"0",bottom:"0",marginBottom:"30px"}}>
      <img className='img-fluid' style={{width:"100px"}} src={whatsIcon} alt="whats app" />
    </a>
   </div>
   
   <div className="ask-maya-div" style={{position:"fixed",right:"0",bottom:"0",marginBottom:"10px"}}>
   <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
   <img src={ifra}  className='img-fluid' style={{width:"100px"}} alt="ask maya image" />
</button>
  
   </div>
   
   
   </>
  )
}
