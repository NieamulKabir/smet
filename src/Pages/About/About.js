import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-base md:text-4xl font-semibold text-amber-500 mt-10'>About SMET Services</h1>
            <p className='pb-4'>One stop engineering and technology services</p>
            <div className='md:flex w-11/12 md:w-[80%] mx-auto my-10'>
                <div className='md:w-[50%] mb-2'>
                    <img src="https://i.ibb.co/4gv1WDf/company-Profile.jpg" alt="" />
                </div>
                <div className='md:w-[50%]'>
                    <p className='text-start pl-6'>


                        <span className='font-bold text-amber-500'>SMET SERVICES </span>  and <span className='
                    font-bold text-amber-500'>Saad Motors</span>(formerly SAAD CNG) is the leading CNG & LPG service provider in Bangladesh. Its experience is the CNG & LPG industry made it pioneer in this sector. At present it has services all over the country through its branches.
                    </p>
                    <br />

                    <h1 className='font-bold text-start text-lg pl-6'>The product and services are:</h1>
                    <ul className='text-start text-sm pl-6'>
                        <li className='py-1'>
                            <i className="fa-solid fa-arrow-right"></i> Supply of CNG & LPG Filling Station equipment.
                        </li>
                        <li className='py-1'>
                            <i className="fa-solid fa-arrow-right"></i> Manufacturing of CNG & LPG Dispenser.
                        </li>
                        <li className='py-1'>
                            <i className="fa-solid fa-arrow-right"></i> Fabrication of CNG storage package
                        </li>
                        <li className='py-1'>
                            <i className="fa-solid fa-arrow-right"></i> Package of CNG & LPG conversion kits
                        </li>
                        <li className='py-1'>
                            <i className="fa-solid fa-arrow-right"></i>Filling station management system.
                        </li>
                        <li className='py-1'>
                            <i className="fa-solid fa-arrow-right"></i> Petrol/Octane/ Diesel Dispenser.
                        </li>
                        <li className='py-1'>
                            <i className="fa-solid fa-arrow-right"></i>CNG & LPG conversion workshop.
                        </li>
                        <li className='py-1'>
                            <i className="fa-solid fa-arrow-right"></i>Vehicle tracking system.
                        </li>
                        <li className='py-1'>
                            <i className="fa-solid fa-arrow-right"></i>Industrial pressure gauge.
                        </li>
                        <li className='py-1'>
                            <i className="fa-solid fa-arrow-right"></i> CNG cylinder re-testing center.
                        </li>
                    </ul>
                    <br /> <br />
                    <div>
                        <p className='text-start pl-6'>
                            <span className='text-amber-500 font-bold'>SMET SERVICES</span> is a company with well-trained professionals has been working in divisions continuously through efficient communications in order to meet clients needs and requirements. This is the key to the growth of the companys development.


                        </p>
                        <br />

                        <p className='text-start pl-6'>
                            <span className='text-amber-500 font-bold'>Our aim at SMET SERVICES </span> is to be known as a <span className='text-amber-500 font-bold'>one stop engineering solution(OES)</span> with the ability to complete any kinds of project successfully in various fields. Therefore, we are committed towards fulfilling our vision by providing careful service to all customers.




                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;