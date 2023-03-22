import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    const {id,img,title}=product
    return (
        <div>
        <div>
            <div className="transform hover:-translate-y-3 to-hover hover:shadow-xl bg-amber-100 text-center secondary-bg transition duration-300 rounded-box w-full mx-auto">

                <img className="mx-auto rounded-lg w-full h-[300px]" src={img} alt="" />
                <h2 className="px-5 pt-5 text-black">{title}</h2>
              

                <NavLink to={`/productDetails/${id}`}
                ><button className="px-6 py-3 mt-5 mb-8 bg-amber-600 custom-bg-font rounded-lg text-white hover:text-black hover:bg-white transition duration-300">VIEW DETAILS</button></NavLink>
            </div>
        </div>
    </div>
    );
};

export default Product;