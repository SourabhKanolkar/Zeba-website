import React from 'react'
import "../styles/resorts.css"
import Navbar from './Navbar'
import whatsIcon from "../assets/whats-icon.png"


export default function Resorts() {
  return (
   <>
   <div className="scroll-fix" style={{ height: '100vh' }}>
   <Navbar/>
  
  <section id='resorts-section-page'>

     <section className='banner-resorts-page'>
        <div className="banner-slide slick-slider">
             <div className="container" style={{height:"550px"}}>
               <div className="row" style={{height:"550px"}}>
                   <div className="col-md-12 banner-box-heading" style={{height:"550px"}}>
                       <h2 className='text-center' style={{fontSize:"50px",color:"#fff"}}> Resorts in India & Abroad</h2>
                   </div>
               </div>
             </div> 
        </div>
     </section>
    {/* above was code for the banner in resort */}
    <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Andaman and Nicobar Islands</h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>The Andaman & Nicobar Islands, nestled in the Bay of Bengal, are a paradise for nature enthusiasts and beach lovers. With their pristine white sandy beaches, crystal-clear turquoise waters, and diverse marine life, the islands offer an idyllic escape. One can choose from a variety of resorts in Andaman & Nicobar Islands, including Osdiadefesta Resorts. These resorts provide a memorable stay and a range of amenities to ensure a memorable stay. Whether indulging in water sports like snorkeling and scuba diving, exploring the vibrant coral reefs, or simply basking in the sun, the Andaman & Nicobar Islands promise an unforgettable tropical getaway.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{width:"270px"}} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Symphony Summer Sands, Neil Island</h3>
                       <p className='resort-location-address'>Port Blair, Andaman and Nicobar Islands </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://static2-clubmahindra.gumlet.io/storage/app/media/Symphony%20Samudra/Banner-1.jpg?w=768&dpr=1.0')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Symphony Samudra Port Blair</h3>
                       <p className='resort-location-address'>Port Blair, Andaman and Nicobar Islands  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://images.trvl-media.com/lodging/7000000/6220000/6218700/6218624/cc1d8e6e.jpg?impolicy=resizecrop&rw=1200&ra=fit')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>ITC Hotels, Bay Island, Port Blair</h3>
                       <p className='resort-location-address'>Port Blair, Andaman and Nicobar Islands  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>


             </div>
           </div>
          </div>

       </div>

    </section>

    {/* below is resort in other state */}
    <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Andhra Pradesh</h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>Welcome to the magnificent realm of Andhra Pradesh, a treasure trove of cultural heritage and natural wonders! Immerse yourself in the richness of this diverse state boasting ancient temples as well as architectural marvels. Surrender to the peace of pristine beaches and stunning hill stations here. This state is an ideal destination, offering you a complete package of beauty, peace, thrill along with delectable Andhra cuisine renowned for its spicy flavours. To make your vacation perfect, get ready to be fascinated with the warmth of traditional hospitality at luxurious resorts in Andhra Pradesh, where your comfort and experience is catered to with utmost care. </p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Starlit-Suites.jpg?w=768&dpr=1.0')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Starlit Suites</h3>
                       <p className='resort-location-address'>Tirupati, Andhra Pradesh  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>


             </div>
           </div>
          </div>

       </div>

    </section>
    {/* belwo is resort of some other state */}
    <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Daman and Diu</h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>Daman and Diu, a charming union territory in West India, offers a delightful sun, sand, and sea holiday. The peaceful beaches offer a perfect escape, embraced by the sun-kissed shores and gentle waves. One can explore the colonial remainders through ancient forts and majestic churches, embracing the tales of the past. Moreover, the bright blue waters invite you to indulge in thrilling water sports. Amidst all the beauty, Osdiadefesta resorts in Daman and Diu provide a pleasant abode with their offerings of world-class amenities and warm hospitality </p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

             
             

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202304171807463791-0c504c26-8768-454a-8baa-6712b7f07e56.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Azzaro Resorts & Spa Diu</h3>
                       <p className='resort-location-address'>Diu, Daman and Diu  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://pix8.agoda.net/hotelImages/27753662/-1/7491ffa5be70424c3c749541e971d411.jpg?ca=22&ce=0&s=600x')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Devka Beach Resort</h3>
                       <p className='resort-location-address'>Diu, Daman and Diu  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>


             </div>
           </div>
          </div>

       </div>

    </section>
        {/* belwo is resort of some other state */}
        <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Goa</h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>Goa is the favorite getaway destination for beach lovers in India. Goa also sees tourists from all over the world, throughout the year. There are several hidden spots to discover and so many beaches to explore. Goa has some of the most happening tourist hotspots, there are endless places to shop from and you can enjoy several water sports during your stay at any of the resorts in Goa that offer a variety of modern facilities to ensure both comfort & fun. </p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

             
             

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://ishavilasgoa.com/outdoor/Ishavilas%2013%20dec%202010-5.jpg')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Ishavilas Siolim Goa</h3>
                       <p className='resort-location-address'>Siolim, Goa   </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://luxurystays.in/villas/morjim/1.jpg')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Courtyard Villa</h3>
                       <p className='resort-location-address'>Morjim, Goa  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://assets.cntraveller.in/photos/63c513f079d81704e445df85/master/w_1600,c_limit/Full%20House%20View%201Orchard-Manor-Goa.jpg')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Orchard Villa</h3>
                       <p className='resort-location-address'>Morjim, Goa  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://oimages.elitehavens.com/images/gallery/hires/P00482/001%20Bastora%20House%20-%20Facade.jpg')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Bastora House, Bardez, Goa</h3>
                       <p className='resort-location-address'>Siolim, Goa   </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://r1imghtlak.mmtcdn.com/b489e261-e70b-4257-8f34-6d854c6c1a4c.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Aroha Palms Majestic</h3>
                       <p className='resort-location-address'>Bardez, Goa   </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>


             </div>
           </div>
          </div>

       </div>

    </section>
  
    

  </section>
















  <a href="https://wa.me/8459039060?text=Hello can I help you ?" target='blank' style={{position:"fixed",right:"0",bottom:"0"}}>
      <img className='img-fluid' style={{width:"100px"}} src={whatsIcon} alt="whats app" />
    </a>
   </div>
   </>
  )
}
