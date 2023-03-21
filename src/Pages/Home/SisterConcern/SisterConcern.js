import React from 'react';
import img1 from '../../../assets/image/sisterconcern/smt.png'
import img2 from '../../../assets/image/sisterconcern/sister_two1.png'
import img3 from '../../../assets/image/sisterconcern/Saad-motors-logo.png'

const SisterConcern = () => {
    return (
        <div className='w-11/12 mx-auto mb-16 mt-16'>
            <h1 className='font-bold text-base md:text-4xl mt-10 mb-6 border-2 w-[50%] mx-auto py-2 border-amber-300 rounded-lg'>Sister Concerns
</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className='mx-16' src={img1} alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                </div>
            </div>

        </div>
    );
};

export default SisterConcern;