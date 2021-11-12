import React from 'react';
import Reviews from '../Reviews/Reviews';
import Accordation from '../Accordation/Accordation';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Accordation></Accordation>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;