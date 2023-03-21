import React from 'react';
import Banner from './banner/Banner';
import BrandOffer from './BrandOffer/BrandOffer';
import SisterConcern from './SisterConcern/SisterConcern';
import Station from './Station/Station';
import WeBest from './WeBest/WeBest';

const Home = () => {
    return (
        <div>
            <Banner />
            <WeBest />
            <BrandOffer />
            <Station />
            <SisterConcern />
        </div>
    );
};

export default Home;