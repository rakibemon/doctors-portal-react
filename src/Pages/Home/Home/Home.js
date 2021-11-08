import React from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services></Services>
            <DentalCare/>
            <AppoinmentBanner></AppoinmentBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;