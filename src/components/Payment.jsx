import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

export default function Payment() {
    const [displayRazorpay, setDisplayRazorpay] = useState(false);

    const handleCreateOrder = async () => {
        const options = {
            key: 'rzp_live_PuECn9YXAKoa7f', // Replace with your Razorpay API key
            amount: '15000', // amount in the smallest unit of currency
            currency: 'INR',
            name: 'OS DIA DE FESTA',
            description: 'Test transaction sourabh',
            image: '',
            handler: function (response) {
                // handle payment response
                console.log(response);
            },
            prefill: {
                name: 'sourabhkanolkar',
                email: 'sourabhkanolkar17@gmail.com',
                contact: '7083405130',
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: '#61dafb',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <>
            <Navbar />
            <section id='paymentPage-section' style={{marginTop:"100px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button onClick={handleCreateOrder}>PAY</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}