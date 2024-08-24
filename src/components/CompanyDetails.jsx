import React, { useState, useEffect } from 'react';
import NavA from './NavA';
import "../styles/companyDet.css";
import cpimg from  "../assets/company-detiles.jpg";
import Footer from './Footer';
import whatsIcon from "../assets/whats-icon.png"

export default function CompanyDetails() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 1.0 });

    const box1 = document.querySelector('.box1.project-done');
    observer.observe(box1);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isInView) {
      intervalId = setInterval(() => {
        if (count1 < 3280) {
          setCount1((prevCount) => prevCount + 10);
        }
        if (count2 < 3912) {
          setCount2((prevCount) => prevCount + 10);
        }
        if (count3 < 3900) {
           setCount3((prevCount)=> prevCount + 10);
        }
        if(count4 < 2319){
          setCount4((prevCount)=> prevCount + 10);
        }
       
        if (count1 >= 3280 && count2 >= 3912 && count3 >= 3900 && count4 >= 2319) {
          clearInterval(intervalId);
        }

      }, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isInView, count1, count2,count3,count4]);

  return (
    <>
      <div className="scroll-fix" style={{ height: '100vh' }}>
        <NavA />
        <section id='company-details-section'>
          <div className="banner-img-box ">
            <div className="container">
              <div className="col-12 ">
                <h2 className='text-center'>Company Details</h2>
              </div>
            </div>
          </div>
          
          <div className="container ditelses-frost-section">
            <div className="row">
              <div className="col-md-6">
                <img src={cpimg} alt="sdsd" style={{ maxHeight: "500px" }} className='img-fluid' />
              </div>
              <div className="col-md-6 mt-3 info-box">
                <h1 className='mb-3' style={{color:"#AB8A62"}} >Insuring your Future</h1>
                <p style={{ fontSize: "20px", marginBottom: "40px" }}>At Osdiadefesta, we take pride in crafting an unparalleled escape where luxury meets nature. Immerse yourself in a world of sophistication and serenity, where every detail is designed to exceed expectations and create an exceptional retreat for our valued guests.</p>

                <div className="box-group  ">
                  <div className="box1 project-done">
                    <h2>{count1}</h2>
                    <span style={{ marginTop: "10px" }}>GUEST STAY </span>
                  </div>
                  <div className="box1 project-done">
                    <h2>{count2}</h2>
                    <span style={{ marginTop: "10px" }}>BOOK ROOM </span>
                  </div>
                </div>

                <div className="box-group  ">
                  <div className="box1 project-done">
                    <h2>{count3}</h2>
                    <span style={{ marginTop: "10px" }}>MEMBER STAY </span>
                  </div>
                  <div className="box1 project-done">
                    <h2>{count4}</h2>
                    <span style={{ marginTop: "10px" }}>MEALS SERVED</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>


          <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                    <span className='learn-us' style={{color:"#AB8A62"}}>Learn about us</span>
                    <h1>Osdiadefesta</h1>
                    <p style={{ fontSize: "20px", marginBottom: "40px" }}>Way back in 2015, we had the vision to create a world of truly luxurious and unforgettable holiday experiences that will engage and indulge your senses. Today with a wide global presence we specialize in bespoke and customized holidays created for discerning travellers who expect the highest level of luxury, service, and attention to details The company boast of an ever-growing network of leisure resorts, clubs, hotels and wellness centres at some of the best holiday destinations in India and abroad. The company is run by a team of passionate, creative travel devotees who create tailor-made holidays and experiences around the globe Currently, osdiadefesta has a total inventory of more than 2000+ room inventories spread across a network of 3000 plus resorts in 110 countries</p>
                </div>
              </div>
          </div>

        </section>
        <div className="whats-div">
   <a href="https://wa.me/8459039060?text=Hello can I help you ?" target='blank' style={{position:"fixed",right:"0",bottom:"0",marginBottom:"30px"}}>
      <img className='img-fluid' style={{width:"100px"}} src={whatsIcon} alt="whats app" />
    </a>
   </div>
     <Footer />
      </div>
    </>
  )
}