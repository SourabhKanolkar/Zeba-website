import React from 'react'
import NavA from './NavA'
import "../styles/affilidated.css"
import { Link } from 'react-router-dom'
import ResortsDataAffiliated from "./resorts.json"

export default function AffiliatedResort() {
  return (
   <>
   <NavA />
<section id='Affilidated-page-section'>
<div className="banner-img-box ">
            <div className="container">
              <div className="col-12">
                <h2>Affiliated Resorts</h2>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">

                {/* <div className="col-md-4">
                    <div className="outer-resort-info-box">
                        <div className="affiliated-pre-info">
                           <h3>Hotel Katson Blue - Manali</h3 >
                           <Link to="/affilidatedresorts" className="nav-link affi-link" style={{ fontFamily: "sans-serif" }} >Know More</Link>
                        </div>
                    </div>
                </div> */}
                {ResortsDataAffiliated.map((resort)=>(
                    <div key={resort.id} className="col-md-4 mt-3">
                    <div className="outer-resort-info-box" style={{width:"100%",height:"400px",backgroundImage: `url(${resort.img1})`,backgroundSize:"cover"}}>
                        <div className="affiliated-pre-info">
                           <h3>{resort.name}</h3 >
                           <Link to="/affilidatedresorts" className="nav-link affi-link" style={{ fontFamily: "sans-serif" }} >Know More</Link>
                        </div>
                    </div>
                </div>
                ))}


            </div>
          </div>
</section>
   
   </>
  )
}
