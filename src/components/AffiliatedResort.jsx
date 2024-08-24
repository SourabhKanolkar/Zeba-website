import React from 'react'
import NavA from './NavA'
import "../styles/affilidated.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ResortsDataAffiliated from "./resorts.json"

export default function AffiliatedResort() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResorts, setFilteredResorts] = useState(ResortsDataAffiliated);

  const handleSearch = (e) => {

  const query = e.target.value.toLowerCase();
  setSearchQuery(query);
  const filtered = ResortsDataAffiliated.filter((resort) => {
     return resort.name.toLowerCase().includes(query);
    });
    setFilteredResorts(filtered);
    
  };

  return (
   <>
   <div className="scroll-fix" style={{ height: '100vh' }}>
   <NavA />
   <section id='Affilidated-page-section'>
<div className="banner-img-box ">
            <div className="container">
              <div className="col-12">
                <h2>Affiliated Resorts </h2>
              </div>
            </div>
          </div>

          <div className="container">
           <div className="row">
            <div className="col-12">
            <input className="form-control me-2" onChange={handleSearch} value={searchQuery} type="search" placeholder="Search" aria-label="Search"/>
            <div className="serach-submit-btn-box text-center">
            <button className="btn btn-outline-success mt-3" type="submit">Search</button>
            </div>
            </div>
           </div>
            <div className="row">
            
                {/* <div className="col-md-4">
                    <div className="outer-resort-info-box">
                        <div className="affiliated-pre-info">
                           <h3>Hotel Katson Blue - Manali</h3 >
                           <Link to="/affilidatedresorts" className="nav-link affi-link" style={{ fontFamily: "sans-serif" }} >Know More</Link>
                        </div>
                    </div>
                </div> */}
                {filteredResorts.map((resort)=>(
                    <div key={resort.id} className="col-md-4 mt-3">
                    <div className="outer-resort-info-box" style={{width:"100%",height:"400px",backgroundImage: `url(${resort.img1})`,backgroundSize:"cover"}}>
                        <div className="affiliated-pre-info">
                           <h3>{resort.name}</h3 >
                           <Link to={`/resorts/${resort.id}`} className="nav-link affi-link" style={{ fontFamily: "sans-serif" }} >Know More</Link>
                        </div>
                    </div>
                </div>
                ))}


            </div>
          </div>
</section>

   </div>
  

   
   </>
  )
}
