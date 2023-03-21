import React from 'react';

const Station = () => {
    return (
        
       <div className='bg-purple-100 mb-4'>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <h1 className='font-bold text-base md:text-4xl mt-10 mb-6 border-2 w-[50%] mx-auto py-2 border-amber-300 rounded-lg'>LPG Station</h1>
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                <div className="text-center">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        130
                    </h6>
                    <p className="font-bold">Running</p>
                </div>
                <div className="text-center">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                    145
                    </h6>
                    <p className="font-bold">On Going</p>
                </div>
                <div className="text-center">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                    477
                    </h6>
                    <p className="font-bold">Upcoming</p>
                </div>
                <div className="text-center">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                    752
                    </h6>
                    <p className="font-bold">Stations</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Station;