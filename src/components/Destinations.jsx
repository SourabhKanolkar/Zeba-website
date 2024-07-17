import React from 'react'
import "../styles/Destination.css"
import karnatakaImg from "../assets/karnataka.jpg"
import rajasthanImg from "../assets/rajasthan.jpg"
import darjeelingImg from "../assets/darjeeling.jpg"
import mussoorieImg from "../assets/mussoorie.jpg"
import shimlaImg from "../assets/shimla.jpg"
import manaliImg from "../assets/manali.jpg"
import kanyakumariImg from "../assets/kanyakumari.jpg"
import tirupatiImg from "../assets/tirupati.jpeg"


export default function Destinations() {
  return (
   <>
   <section id='destination-page'> 
   <div className="container">
    <div className="row">
        <h2 className='text-center poppins-font destination-page-title  mb-4'>Top  Destinations</h2>
        <div className="col-md-4 mt-2">
        <div className="destination-img-box">
            <img src="https://plus.unsplash.com/premium_photo-1697729600112-434ee1c7f670?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='img-fluid destinations-img' alt="goa-img" />
            <p className='destination-photo-title poppins-font'>Goa</p>
        </div>
        </div>

        <div className="col-md-4 mt-2">
        <div className="destination-img-box">
            <img src={karnatakaImg} className='img-fluid destinations-img' alt="goa-img" />
            <p className='destination-photo-title poppins-font'>Karnataka</p>
        </div>
        </div>
        <div className="col-md-4 mt-2">
        <div className="destination-img-box">
            <img src={rajasthanImg} className='img-fluid destinations-img' alt="goa-img" />
            <p className='destination-photo-title poppins-font'>Rajasthan</p>
        </div>
        </div>


    </div>

    <div className="row row-2-destination mt-2">
    <div className="col-md-4 mt-2">
        <div className="destination-img-box">
            <img src={darjeelingImg} className='img-fluid destinations-img' alt="goa-img" />
            <p className='destination-photo-title poppins-font'>Darjeeling</p>
        </div>
        </div>

        <div className="col-md-4 mt-2">
        <div className="destination-img-box">
            <img src={mussoorieImg} className='img-fluid destinations-img' alt="goa-img" />
            <p className='destination-photo-title poppins-font'>Mussoorie</p>
        </div>
        </div>

        <div className="col-md-4 mt-2">
        <div className="destination-img-box">
            <img src={shimlaImg} className='img-fluid destinations-img' style={{height:"238px"}} alt="goa-img" />
            <p className='destination-photo-title poppins-font'>Shimla</p>
        </div>
        </div>
    </div>

    <div className="row row-3-destination mt-3">

    <div className="col-md-4 mt-2">
        <div className="destination-img-box">
            <img src={kanyakumariImg} className='img-fluid destinations-img' style={{height:"238px"}} alt="goa-img" />
            <p className='destination-photo-title poppins-font'>Kanyakumari</p>
        </div>
        </div>

        <div className="col-md-4 mt-2">
        <div className="destination-img-box">
            <img src={manaliImg} className='img-fluid destinations-img' style={{height:"238px"}} alt="goa-img" />
            <p className='destination-photo-title poppins-font'>Manali</p>
        </div>
        </div>

        <div className="col-md-4 mt-2">
        <div className="destination-img-box">
            <img src={tirupatiImg} className='img-fluid destinations-img' style={{height:"238px"}} alt="goa-img" />
            <p className='destination-photo-title poppins-font'>Tirupati</p>
        </div>
        </div>

    </div>
      
      

   </div>
   </section>
   
   </>
  )
}
