import React from 'react'
import NavA from './NavA'
import "../styles/affilidated.css"
import "../styles/membership.css"
import Footer from './Footer'

export default function Membership() {
  return (
   <>
   <div className="scroll-fix" style={{ height: '100vh' }}>
   <NavA/>
   <section id='membership-section' style={{marginTop:"100px",marginBottom:"20px"}}>
   <div className="banner-img-box ">
            <div className="container">
              <div className="col-12">
                <h2>Membership</h2>
              </div>
            </div>
          </div>

          <div className="container">
           <div className="row">
            <div className="membership-title">
                <h2 className='text-center' style={{fontWeight:"800"}}>Package & Their Benefits</h2>
                <h5  className='text-center'>You can customize your holiday package which depends on your Family size , locations you prefer , facilities you want and of course activities you want to indulge in</h5>
            </div>

          <div className="col-md-3 mt-3">
          <div className="membershipbox-1 membership-box">

             <div className="tittle-box-mem text-center">
              <h3 className=''>Blue</h3>
                <h3><i class="bi bi-currency-rupee"></i>6,65,000</h3>
             </div>

             <div className="benifits-box ">
                <ul style={{listStyle:"none"}}>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>25 Years Valid</li>
                    <li style={{padding:"5px 0px"}}> <i class="bi bi-check"></i>When resorts are not packed</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>If you love the Monsoon season</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i> During the work week</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>  AMC ₹18,000</li>
                </ul>
             </div>

            </div>
          </div>
          <div className="col-md-3 mt-3">
          <div className="membershipbox-2 membership-box">

             <div className="tittle-box-mem text-center">
              <h3 className=''>White</h3>
                <h3><i class="bi bi-currency-rupee"></i>8,95,000</h3>
             </div>

             <div className="benifits-box ">
                <ul style={{listStyle:"none"}}>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>25 Years Valid</li>
                    <li style={{padding:"5px 0px"}}> <i class="bi bi-check"></i>  If you love the Monsoon season</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i> During Non-Peak Season</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>  During the work week</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>   AMC ₹19,600</li>
                </ul>
             </div>

            </div>
          </div>
          <div className="col-md-3 mt-3">
          <div className="membershipbox-3 membership-box">

             <div className="tittle-box-mem text-center">
              <h3 className=''>Red</h3>
                <h3><i class="bi bi-currency-rupee"></i>11,43,000</h3>
             </div>

             <div className="benifits-box ">
                <ul style={{listStyle:"none"}}>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>25 Years Valid</li>
                    <li style={{padding:"5px 0px"}}> <i class="bi bi-check"></i>   During School Vacations</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>  On National Holidays</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>  During Festivals</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>   AMC ₹21,500</li>
                </ul>
             </div>

            </div>
          </div>
          <div className="col-md-3 mt-3">
          <div className="membershipbox-4 membership-box">

             <div className="tittle-box-mem text-center">
              <h3 className=''>Purple</h3>
                <h3><i class="bi bi-currency-rupee"></i>14,95,000</h3>
             </div>

             <div className="benifits-box ">
                <ul style={{listStyle:"none"}}>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>AMC ₹24,500</li>
                    <li style={{padding:"5px 0px"}}> <i class="bi bi-check"></i>     25 Years Valid</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>   During Festivals</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>   Any time of the year</li>
                    <li style={{padding:"5px 0px"}}><i class="bi bi-check"></i>   A New Year’s Eve</li>
                </ul>
             </div>

            </div>
          </div>

           </div>
          </div>
   </section>
   <Footer />
   
   </div>
   </>
  )
}
