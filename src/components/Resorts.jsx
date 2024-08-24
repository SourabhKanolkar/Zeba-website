import React from 'react'
import "../styles/resorts.css"
import Navbar from './Navbar'
import NavA from './NavA'
import whatsIcon from "../assets/whats-icon.png"


export default function Resorts() {
  return (
   <>
   <div className="scroll-fix" style={{ height: '100vh' }}>
   {/* <Navbar/> */}
   <NavA />
  
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

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://www.theparkhotels.com/images/site-specific/chennai/dining/aqua/THE-Park-Chennai-Aqua-poolside.jpg')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>The Park Chennai</h3>
                       <p className='resort-location-address'>Nungambakkam,Chennai,Tamil Nadu </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://cache.marriott.com/content/dam/marriott-renditions/MAACY/maacy-exterior-6889-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Courtyard Chennai</h3>
                       <p className='resort-location-address'>NTeynampet, Chennai </p>
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

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/100848121.jpg?k=74823af6d8308e171065b2e58dffccc0514d00a90775645e900d5d7c5c2f6dd2&o=&hp=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>The Deltin , Daman</h3>
                       <p className='resort-location-address'>Nagar Haveli and Daman </p>
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
              

             </div>
           </div>
          </div>

       </div>

    </section>
     
        {/* belwo is resort of some other state gujrat */}
        <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in  Gujarat</h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>Welcome to the vibrant state of Gujarat, where age-old traditions meet modern marvels, creating a tapestry of captivating experiences. Known for its rich cultural heritage, historical landmarks, and warm hospitality, Gujarat beckons you to embark on an unforgettable journey. Immerse yourself in the colourful festivals like Navratri, explore the architectural wonders of ancient temples like Somnath, and lose yourself in the bustling markets brimming with vibrant textiles and handicrafts. Indulge in the delectable Gujarati cuisine and witness the spellbinding beauty of the Rann of Kutch. With Osdiadefesta, let us be your trusted guide as you uncover the hidden gems and create cherished memories in this magnificent land of Gujarat.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/4a/7e/f3/bhanu-the-fern-forest.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Bhanu The Fern Forest Resort Jambughoda</h3>
                       <p className='resort-location-address'>Jamjodhpur, Gujarat  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/b2/46/a8/kensville-golf-and-country.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Club Mahindra Kensville Golf Resort</h3>
                       <p className='resort-location-address'>Ahmedabad, Gujarat  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/300315468.jpg?k=c4f328a533f55b5ab3dfefd44dcc7ba306f70d7c76b2318b05cd3069da06a7f3&o=&hp=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}> Club Mahindra Netrang</h3>
                       <p className='resort-location-address'>Nandej, Gujarat  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
              
              


             </div>
           </div>
          </div>

       </div>

    </section>

       {/* belwo is resort of some other state jammu & kashmir */}
       <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Jammu And Kashmir</h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>Unarguably the ‘Paradise on Earth, Jammu & Kashmir is bestowed with nature’s best and has several scenic destinations that attract tourists from all over the world. The picturesque mountain ranges, the beautiful monasteries, lakes, and gardens are tourist hotspots. One can enjoy them during their stay at any of the Club Mahindra resorts in Jammu and Kashmir.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/3/31/Houseboat-_Dal_Lake%2C_srinagar_Kashmir.JPG')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Kashmir House Boat Srinagar</h3>
                       <p className='resort-location-address'>Srinagar, Jammu and Kashmir  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipOmC6c5-7l4LNK9vIWzL6848wB0thyq3d9XDKlA=s680-w680-h510')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Fortune Inn Riviera Jammu</h3>
                       <p className='resort-location-address'> Old Heritage City, Jammu, Jammu and Kashmir  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipMpFWr0Btim7vxFjAxTk45l3o5wzxZMHqnSKYab=s680-w680-h510')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Vivanta Jammu, City Centre</h3>
                       <p className='resort-location-address'>   Old Heritage City, Jammu, Jammu and Kashmir</p>
                       </div>
                   </figure>
                  
                 </div>
               </div>

              
             </div>
           </div>
          </div>

       </div>

    </section>

      {/* belwo is resort of some other state karnataka */}

      <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Karnataka </h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>With hundreds of protected monuments from different periods, Karnataka is a treasure for tourists with a love of history and ancient architecture. The state is home to iconic attractions such as the mesmerizing Mysore Palace, the ancient ruins of Hampi, and the breath-taking Jog Falls.There are also numerous nature and adventure destinations in this south India state. Moreover, with warm hospitality and stunning surroundings, the resorts in Karnataka offer a perfect retreat for travellers seeking comfort and relaxation amidst the state's captivating beauty.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://www.vijayshreeresort.com/images/rooms/r-villa.jpg')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Vijayshree Resort & Heritage Village</h3>
                       <p className='resort-location-address'>Hampi, Karnataka  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ba/36/f4/swing-into-action-at.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Eagleton Golf Resort, Bengaluru</h3>
                       <p className='resort-location-address'>Bengaluru, Karnataka  </p>
                       </div>
                   </figure>
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/b3/26/71/club-mahindra-virajpet.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Club Mahindra Virajpet, Coorg</h3>
                       <p className='resort-location-address'>Coorg, Karnataka  </p>
                       </div>
                   </figure>
                 </div>
               </div>
              
             </div>
           </div>
          </div>

       </div>

    </section>

     {/* belwo is resort of some other state kerala */}

     <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Kerala </h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>South India has always been known for its dense evergreen forests, tranquil beaches and hill stations that invoke feelings of serenity. Moreover, the southern state of India, Kerala, is famous for its towering temples that stand proof of the might of the Chera dynasty that once ruled these parts. All of these attractions have led Kerala to become one of the most visited tourist destinations in India. So, when looking forresorts in Kerala, do remember to select one that lets you easily visit these popular tourist spots.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/1e/cb/2a/ramada-alleppey.jpg?w=1000&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Ramada, Alleppey</h3>
                       <p className='resort-location-address'>Alappuzha, Kerala   </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/75/ed/a2/vythiri-village.jpg?w=900&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Vythiri Village Wayanad</h3>
                       <p className='resort-location-address'>Wayanad, Kerala   </p>
                       </div>
                   </figure>
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/4d/0f/75/the-pool.jpg?w=1000&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Club Mahindra Cherai, Kochi</h3>
                       <p className='resort-location-address'>Kochi, Kerala   </p>
                       </div>
                   </figure>
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/15267389.jpg?k=97977ba5e33d41baa3d3b952d2fd47fe85c1089e3f4788cbc3c32ea00151f9e3&o=&hp=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Kumarakom Lake Resort</h3>
                       <p className='resort-location-address'>Vayitharamattom, Kumarakom, Kerala</p>
                       </div>
                   </figure>
                 </div>
               </div>

              
             </div>
           </div>
          </div>

       </div>

    </section>

      {/* belwo is resort of some other state Ladakh */}
      <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Leh & Ladakh </h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>Nestled amidst the beauty of the Himalayas & Karakoram ranges, Ladakh stands as the "Land of High Passes,". Snow-capped peaks majestically pierce the skies, while serene monasteries exude an aura of spiritual tranquility. Vast barren landscapes, seemingly untouched by time, evoke a sense of profound solitude. Amidst this enchanting realm, charming, locally inspired resorts by Club Mahindra that welcome you with open arms, offering an authentic glimpse into the richness of Ladakhi culture.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://pix8.agoda.net/hotelImages/2829236/-1/ae56244e92756c9035191c052357b382.jpg?ca=0&ce=1&s=1024x')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>The Driftwood Ladakh</h3>
                       <p className='resort-location-address'>Leh, Ladakh  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/73/cf/71/the-barren-mountains.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Nubra Ethnic Camp</h3>
                       <p className='resort-location-address'>Leh, Ladakh  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/65/84/99/sitting-area-on-the-backside.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>The Grand Dragon</h3>
                       <p className='resort-location-address'>Leh, Ladakh  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
              
              
              
              
              
              

              
             </div>
           </div>
          </div>

       </div>

    </section>

        {/* belwo is resort of some other state Madhya Pradesh */}
        <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Madhya Pradesh</h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>The heart of India’, Madhya Pradesh, with its diverse landscapes encompassing ancient temples, wildlife sanctuaries, and architectural wonders offers an unforgettable experience. There are numerous resorts in Madhya Pradesh, including the renowned Osdiadefesta Resorts. These resorts provide a perfect blend of comfort and nature, offering visitors a chance to unwind amidst the serene surroundings. Whether exploring the UNESCO World Heritage Sites of Khajuraho or embarking on thrilling wildlife safaris in Bandhavgarh National Park or Kanha National Park, Madhya Pradesh promises an unforgettable journey.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/fb/a0/25/mint-bandhavgarh-resort.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Bundela Resort Bandhavgarh</h3>
                       <p className='resort-location-address'>Bandhavgarh, Madhya Pradesh  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/d7/af/93/piscine-et-batiments.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Bundela Resort Khajuraho</h3>
                       <p className='resort-location-address'>Khajuraho, Madhya Pradesh   </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/4f/82/41/club-mahindra-kanha.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Club Mahindra Kanha</h3>
                       <p className='resort-location-address'>Kanha, Madhya Pradesh h   </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
              
              
              
              

              
             </div>
           </div>
          </div>

       </div>

    </section>

       {/* belwo is resort of some other state Maharastra */}
       <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Maharashtra </h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>Filled with picturesque locations and steeped in rich cultural heritage, Maharashtra is a veritable treasure trove for tourists. From its historical monuments, natural forests and tiger reserves to the various events and festivals celebrated all over the state, it has something for every tourist. Visitors have the option of staying at one of many hotels or resorts in Maharashtra during their visit.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/1a/84/94/library.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Forest Escape Koyna</h3>
                       <p className='resort-location-address'>Godoli, Maharashtra  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5a/da/4e/novotel-imagica-khopoli.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Imagicaa Hotel</h3>
                       <p className='resort-location-address'>Khopoli, Maharashtra   </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c1/48/02/getlstd-property-photo.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Riverside County Resort Amba Ghat</h3>
                       <p className='resort-location-address'>Kolhapur, Maharashtra   </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://static2-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Club-Mahindra-Alibaug-Resized.jpg?w=768&dpr=1.0')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Club Mahindra Alibaug</h3>
                       <p className='resort-location-address'>Alibaug, Maharashtra  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
              
              
              
             </div>
           </div>
          </div>

       </div>

    </section>
     {/* belwo is resort of some other state Rajasthan */}
     <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Rajasthan </h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>Rajasthan is the enchanted land of deserts, where the grandeur of forts, palaces, and a rich cultural legacy are the main highlights. With its huge forest ranges and breath-taking vistas, this destination is truly an experience to have. Each city emanates its own unique regal appeal, from the majestic forts of Jaipur to the beautiful palaces of Udaipur. You can choose from a variety of excellent resorts in Rajasthan that offer a seamless fusion of modern comfort and regal majesty as you embark on your wonderful journey.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/b1/d9/9c/regenta-resort-pushkar.jpg?w=1000&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Hotel Pushkar Fort Ajmer, Rajasthan</h3>
                       <p className='resort-location-address'>Pushkar, Rajasthan   </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/ab/a9/ce/premium-villa.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Hotel Tiger Kingdom</h3>
                       <p className='resort-location-address'>Sawai Madhopur, Rajasthan </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/55/a0/36/cottages-exterior-view.jpg?w=1000&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Hummingbird Resorts</h3>
                       <p className='resort-location-address'>Mount Abu, Rajasthan   </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/70/0b/00/aravali-hotel.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Hotel Aravali, Mount Abu</h3>
                       <p className='resort-location-address'>Abu Road, Rajasthan </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
              
              
              
             </div>
           </div>
          </div>

       </div>

    </section>

      {/* belwo is resort of some other state  Sikkim */}
      <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Sikkim</h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>The north-eastern state of Sikkim has several hidden gems that even some travel enthusiasts know little about. The picturesque villages of Lachen and Lachung, the mesmerizing bed of flowers at Yumthang Valley, and the ancient monasteries of Pelling are just some of these lesser-known tourist delights. The best part about all of these places is that you will be able to enjoy the beauty of them during your stay at Osdiadefesta resorts in Sikkim.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202206151717541968-304c571cee0111ecbc370a58a9feac02.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Le Vintuna Gangtok</h3>
                       <p className='resort-location-address'>Gangtok, Sikkim </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ef/37/87/yashshree-lachung.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Yashshree Lachung</h3>
                       <p className='resort-location-address'>Sikkim, Sikkim </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/6b/08/cd/the-chumbi-mountain-retreat.jpg?w=1000&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>The Chumbi Mountain Retreat Pelling, Sikkim</h3>
                       <p className='resort-location-address'>Pelling, Sikkim </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/4f/96/8b/club-mahindra-gangtok.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Club Mahindra Gangtok</h3>
                       <p className='resort-location-address'>Gangtok, Sikkim </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
              
              
              
             </div>
           </div>
          </div>

       </div>

    </section>
       {/* belwo is resort of some other state  Tamil Nadu */}
       <section className='resorts-section-all here'>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="resort-heading-name-box d-flex justify-content-between space-between-margin">
               <h2 className='heading-resot-title'>Osdiadefesta Resorts in Tamil Nadu</h2>
             </div>
           </div>
         </div> 
         <div className="content content-para">
           <p style={{textAlign:"justify",marginTop:"10px",marginBottom:"15px"}}>In Tamil Nadu, one can enjoy the beauty of nature, relax on serene beaches, explore the famous temples, take a train ride through the Nilgiri Hills, and experience the rich biodiversity. Tamil Nadu is truly a traveller’s dream, and the various resorts in Tamil Nadu make the experience even better. Not just spectacular beaches in Mahabalipuram and Kanyakumari, Tamil Nadu is also home to some lovely hill stations like Ooty and Kodaikanal. Osdiadefesta has resorts in Tamil Nadu which are sure to add an already unforgettable experience.</p>
         </div>
          
          <div className="listing-slider" >
           <div className="polite">
             <div className="slide-track d-flex" style={{overflow:"auto"}}>

             <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/62/e5/48/wooden-walkway.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Anantya by the Lake
                       </h3>
                       <p className='resort-location-address'>Kanyakumari District, Tamil Nadu  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>

             
               
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://static-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/club-mahindra-danish-villa-ooty.jpg?w=768&dpr=1.0')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Club Mahindra Danish Villa, Ooty</h3>
                       <p className='resort-location-address'>Ooty, Tamil Nadu  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>


               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/8f/77/club-mahindra-derby-green.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Club Mahindra Derby Green, Ooty</h3>
                       <p className='resort-location-address'>Ooty, Tamil Nadu  </p>
                       </div>
                   </figure>
                  
                 </div>
               </div>
               <div className="slick-active" >
                 <div className="img-box-resort">
                  
                   <figure className=' resort-page-img' style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/56/ef/3f/kaldan-samudhra.jpg?w=1200&h=-1&s=1')",backgroundSize:"cover",backgroundPosition:"center",width:"270px" }} >
                     {/* <img src="https://static3-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Summer-Sands.jpg?w=768&dpr=1.0" alt="resott" className='img-fluid resort-page-img' /> */}
                       <div className="name-location-box">
                       <h3 style={{fontSize:"18px",color:"#fff"}}>Kaldan Samudhra Palace</h3>
                       <p className='resort-location-address'>Mahabalipuram, Tamil Nadu  </p>
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





  <a href="https://wa.me/8421658656?text=Hello" target='blank' style={{position:"fixed",right:"0",bottom:"0",marginBottom:"20px"}}>
      <img className='img-fluid' style={{width:"100px"}} src={whatsIcon} alt="whats app" />
    </a>
   </div>
   </>
  )
}
