import React from 'react';
import Reviews from '../Reviews/Reviews';
import Accordation from '../Accordation/Accordation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Accordation></Accordation>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;