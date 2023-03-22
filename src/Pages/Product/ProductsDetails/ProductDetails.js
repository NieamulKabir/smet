import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const ProductDetails = () => {
    let { productId } = useParams();
    const [products, setProducts] = useState([])
    const [singleProductDetails, setSingleProductDetails] = useState({});
    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/smet-data/products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const foundProduct = products.find(products => products.id === productId);
        setSingleProductDetails(foundProduct);
    }, [productId, products]);
    console.log(singleProductDetails);

    return (
        <div className='w-[70%] mx-auto my-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='ml-10' src={singleProductDetails?.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-amber-500 md:text-4xl">{singleProductDetails?.title}</h2>

                    <p className='text-start'>
                        <ul className='space-y-2'>
                            {singleProductDetails?.specification?.map((spe, i) => {
                                return (
                                    <li key={i} className='text-sm list-disc'>
                                        {spe}
                                    </li>
                                );
                            })}
                        </ul>
                    </p>


                    <div className="card-actions justify-end mt-4 pt-4">
                    <NavLink to="/products">
                            <button className="btn btn-primary bg-amber-500 border-0">Go Back</button>
                        </NavLink>
                        <button className="btn btn-primary bg-amber-500 border-0">Get Services</button>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;