import React from 'react'
import Navbar from './Navbar'
import NavA from './NavA'
import { useState } from 'react'

export default function Payment() {
    const [displayRazorpay, setDisplayRazorpay] = useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [amount,setAmount]=useState("");

    const handleCreateOrder = async (e) => {
        e.preventDefault();
        const options = {
            key: 'rzp_live_PuECn9YXAKoa7f', // Replace with your Razorpay API key
            amount: amount * 100, // amount in the smallest unit of currency
            currency: 'INR',
            name: 'OS DIA DE FESTA',
            description: 'Test transaction sourabh',
            image: '',
            handler: function (response) {
                // handle payment response
                console.log(response);
            },
            prefill: {
                name: name,
                email: email,
                contact: number,
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: '#61dafb',
            },
            emi_options: {
                enabled: true,
                providers: [
                 
                  'earlysalary'
                ]
              },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
     
    };

    return (
        <>
          <NavA />
            <section id='paymentPage-section' style={{marginTop:"100px"}}>
                <div className="container">
                    <div className="row">
                        <div className="title-pay-box">
                            <h2 className='text-center' style={{fontFamily:""}}>PAYMENT</h2>
                        </div>
                        <div className="col-md-12">
                           <form onSubmit={handleCreateOrder}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="name">Name</label>
                                        <input onChange={(e) => setName(e.target.value)} id='name' type="text" className='form-control' />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email">Email</label>
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-control' id='email' />
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <label htmlFor="cnumber">Number</label>
                                        <input onChange={(e) => setNumber(e.target.value)} type="number"  className='form-control' id='cnumber' />
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <label htmlFor="amount">Amount</label>
                                        <input type="number" onChange={(e) => setAmount(e.target.value)} className='form-control' id='amount' />
                                    </div>
                                    <div className="col-md-12 mt-4 text-center">
                                        <button type='submit' className='btn btn-primary'>PAY NOW</button>
                                    </div>
                                </div>
                            </div>
                           </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}