import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import OurTeam from '../OurTeam/OurTeam';
import ServiceOverview from '../ServiceOverview/ServiceOverview';
import Testimonial from '../Testimonial/Testimonial';
import UpdateNews from '../UpdateNews/UpdateNews';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurTeam></OurTeam>
            <ServiceOverview></ServiceOverview>
            <Testimonial></Testimonial>
            <UpdateNews></UpdateNews>
        </div>
    );
};

export default Home;