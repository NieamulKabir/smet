import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/smet-data/products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="bg-green-50 text-white font-serif">
            <h1 className=" pt-10 text-center text-4xl font-bold text-amber-600">List of Product & services</h1>
            <p className='text-gray-700 w-[50%] mx-auto'>We offer complete solution of LPG Auto Gas Station equipment on turnkey basis. Our offer compromises the complete range of equipment, consultancy, feasibility study and necessary guidelines approval of the project</p>

            <div className="w-5/6 xl:px-12  py-5 lg:py-20 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;