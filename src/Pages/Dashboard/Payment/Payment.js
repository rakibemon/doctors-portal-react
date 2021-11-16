import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe('pk_test_51JvlfqBKakImoPvLBga8nC2HoadqJLutkp9uqdbGApK86L5MhzBU50cpal8usG3Wl0gpC5PtYNfUfUdSUNpFQrTq00CoXRSsT6');
const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/dashboard/payment/${appointmentId}`)
            .then(data => setAppointment(data.data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay for : {appointment?.name} for {appointment?.serviceName}</h2>
            <p>Pay : ${appointment?.price}</p>
            {
                appointment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        appointment={appointment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;

/*
1. Install stripe and stripe react
2. set publishable key to stripPromise
3. Elements
4. Check Out From
--------------
a) stripe
b) elements CardElemnt e ja likhbo setagula ei hooks e save hbe
____
5. create payment method
6. server : crated payment intent api
7. load clinet secret
8. ConfirmCard Payment
9. handle user error
*/