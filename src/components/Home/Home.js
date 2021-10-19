import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import OurTeam from '../OurTeam/OurTeam';
import ServiceOverview from '../ServiceOverview/ServiceOverview';
import Testimonial from '../Testimonial/Testimonial';
import UpdateNews from '../UpdateNews/UpdateNews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Main></Main>
            <OurTeam></OurTeam>
            <ServiceOverview></ServiceOverview>
            <Testimonial></Testimonial>
            <UpdateNews></UpdateNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;