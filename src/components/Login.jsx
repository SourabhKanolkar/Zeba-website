import React from 'react'
import "../styles/loginmember.css";
import logopic from "../assets/logo-rm.png"
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { db } from '../firebase-config';
import { collection,where,getDocs, query, doc, getDoc } from 'firebase/firestore';

export default function Login() {

  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [showAlert,setShowAlert]=useState(false);
  const navigate = useNavigate();


  const handelLogin= async(e)=>{
    e.preventDefault();
    //  if(userName=="admin" && password=="admin123"){
    //   navigate("/home");
    //  }else{
    //   setShowAlert(true); //to show the alert
    //  }
    const docRef=doc(db,"users",`${userName}`);
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
     const passwordDb=docSnap.data().password;
      if(passwordDb==password){
        navigate("/home");
      }else{
        setShowAlert(true)
      }
    }else{
      setShowAlert(true);
    }

    
  }

  
   
  return (
   <>
  
    <section id='login-member' style={{position:"relative"}}>

    {showAlert && (
          <div id='alert-login-wrong' style={{maxWidth:"300px", display:"block",margin:"auto"}} className="alert alert-danger"  role="alert">
            Invalid username or password.
            <button 
              type="button" 
              className="btn-close" 
              aria-label="Close"
              onClick={() => setShowAlert(false)} // Close the alert when button is clicked
            ></button>
          </div>
        )}

      <div className="container">
        <div className="row">
          <div className="logo-box d-flex justify-content-center">
            <img src={logopic}  alt="logo here" className='img-fluid logo-img-login' />
          </div>
        <h3 className='text-center login-heading' >LOGIN</h3>
          <div className="col-12  test">
            <div className="box d-flex justify-content-center align-items-center ">
            <form onSubmit={(e)=> handelLogin(e)} >
  <div className="mb-3">
    <label for="exampleUsername" className="form-label">Username:</label>
    <input  type="text" className="form-control" onChange={(e)=>setUserName(e.target.value)} id="exampleUsername" aria-describedby="emailHelp"/>
    <div id="emailHelp" style={{visibility:"hidden"}} className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password:</label>
    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1"/>
  </div>

  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}

  <div className="login-btn-box d-flex justify-content-center">
  <button type="submit" className="btn btn-primary login-btn-client">LOGIN</button>
  </div>
</form>
            </div>
           

          </div>
        </div>
      </div>

    </section>
   </>
  )
}
