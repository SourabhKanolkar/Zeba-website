import React from 'react'
import ResortsDataAffiliated from "./resorts.json"
import { useParams } from 'react-router-dom';
import NavA from './NavA';
import Footer from './Footer';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import "../styles/Resortdetil.css"

export default function ResortDetailed() {
    const params = useParams();
    const id = params.id;
    const redetail= Number(id);
    
    const resort =ResortsDataAffiliated.find((r)=> r.id===redetail);
    if (!resort) {
        return <div>Resort not found</div>;
      }
      const [name,setName]=useState("");
      const [number,setNumber]=useState("");
      const [arriveDate,setArriveDate]=useState("");
      const [depatureDate,setDepatureDate]=useState("");
      const [adult,setAdult]=useState("");
      const [child,setChild]=useState("");
      const [location,setLocation]=useState("");

      const handelSubmit=(e)=>{
        e.preventDefault();
        const serviceId='service_j96lb6l';
        const templateId='template_afai6zi';
        const publicKey="iC2V9Rp5_5TM9dZ6a";
        setLocation(resort.name);
       let testL=resort.name;
       console.log(testL)

        const templateParams={
          from_name: name,
          number: number,
          arriveDate: arriveDate,
          depatureDate:depatureDate,
          adult:adult,
          child:child,
          location:testL,
         
        };
        
        emailjs.send(serviceId,templateId,templateParams,publicKey)
          .then((response)=>{
            console.log("Email sent done",response);
             setName('');
             setNumber('');
             setArriveDate('');
             setDepatureDate('');
             setAdult('');
             setChild('');
             
          })
          .catch((error)=>{
            console.log("error came:",error);
          })


      }
    
  return (
<>
   
 <div className="scroll-fix" style={{ height: '100vh' }}>
 <NavA />
 <section id='resort-details-section'>
   <div className="container">
    <div className="row">
    <div className="col-md-8">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={resort.img1} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={resort.img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={resort.img3}  className="d-block w-100  img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={resort.img4}  className="d-block w-100  img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={resort.img5}  className="d-block w-100  img-fluid" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

    <div className="col-md-4">
        <div className="form-box">
            <form onSubmit={handelSubmit}>
                <div className="member-form-title">
                    <h5 className='text-center'>BOOK YOUR TOUR </h5>
                </div>
            <div className="mb-3">
    <label for="exampleName-member" className="form-label">MEMBER NAME:</label>
    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleName-member" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInpuTnumber" className="form-label">NUMBER:</label>
    <input onChange={(e) => setNumber(e.target.value)} type="number" className="form-control" id="exampleInpuTnumber"/>
  </div>

   <div className="mb-3">
   <label for="exampleAriveDate" className="form-label">ARRIVE:</label>
   <input onChange={(e) => setArriveDate(e.target.value)} type="date" className="form-control" id="exampleAriveDate"/>
   </div>

   <div className="mb-3">
   <label for="exampleDeputure" className="form-label">DEPATURE:</label>
   <input onChange={(e) => setDepatureDate(e.target.value)} type="date" className="form-control" id="exampleDeputure"/>
   </div>

   <div className="mb-3">
   <label for="exampleAdult" className="form-label">ADULT:</label>
   <select onChange={(e) => setAdult(e.target.value)} id='exampleAdult' className="form-select" aria-label="Default select example">
  <option selected>select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
   </div>

   <div className="mb-3">
   <label for="examplechild" className="form-label">CHILD:</label>
   <select onChange={(e) => setChild(e.target.value)} id='examplechild' className="form-select" aria-label="Default select example">
  <option selected>select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
   </div>

  <div className="submit-box" style={{display:"flex",justifyContent:"center"}}>
  <button type="submit" className="btn btn-resort-page">Request</button>
  </div>
            </form>
        </div>
    </div>
    </div>
   
   <div className="row">
    <div className="col-md-12">
        <div className="box-info" style={{background:"#f5f5f5",padding:"30px",border:"1px solid black",marginBottom:"30px"}}>
            <h4>{resort.name}</h4>
            <p className='lead'>{resort.description}</p>
        </div>
    </div>
   </div>



   </div>

 <Footer />
  </section>
 </div>

</>
  )
}
