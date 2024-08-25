import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

export default function Payment() {
    const [displayRazorpay, setDisplayRazorpay] = useState(false);

    const handleCreateOrder = async () => {
        const options = {
            key: 'rzp_test_YA455skRKjapj5', // Replace with your Razorpay API key
            amount: '101', // amount in the smallest unit of currency
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Test transaction',
            image: '',
            handler: function (response) {
                // handle payment response
                console.log(response);
            },
            prefill: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                contact: '9999999999',
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