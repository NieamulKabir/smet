import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../../assets/image/brands/antonio-merloni.jpg'
import img2 from '../../../assets/image/brands/cryocan.png'
import img3 from '../../../assets/image/brands/Ebsray-Logo.png'
import img4 from '../../../assets/image/brands/ett-gas-logo.jpg'
import img5 from '../../../assets/image/brands/europump_logo.png'
import img6 from '../../../assets/image/brands/plinoxotar.png'
import img7 from '../../../assets/image/brands/yilteks.png'
import img8 from '../../../assets/image/brands/zavoli.png'

const BrandOffer = () => {
    return (
        <div className='w-11/12 mx-auto mb-16 mt-16'>
            <h1 className='font-bold text-base md:text-4xl mt-10 mb-6 border-2 w-[50%] mx-auto py-2 border-amber-300 rounded-lg'>Brands We Offer</h1>
            <Marquee speed={100}>

                <img className='w-44 h-16 pr-4' src={img1} alt="" />
                <img className='w-44 h-16 pr-4' src={img3} alt="" />
                <img className='w-44 h-16 pr-4' src={img4} alt="" />
                <img className='w-44 h-16 pr-4' src={img2} alt="" />
                <img className='w-44 h-16 pr-4' src={img5} alt="" />
                <img className='w-44 h-16 pr-4' src={img6} alt="" />
                <img className='w-44 h-16 pr-4' src={img7} alt="" />
                <img className='w-44 h-16 pr-4' src={img8} alt="" />
            </Marquee>
        </div>
    );
};

export default BrandOffer;