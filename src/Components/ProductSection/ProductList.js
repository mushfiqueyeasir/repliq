import React from 'react';
import { products } from '../../content/product';
import ProductCard from './ProductCard';

const ProductList = () => {
    return (
        <div className='grid grid-cols-5 gap-4 mt-6 p-4'>
            {products.map((item,index)=><ProductCard key={index} data={item}/>)}
            
        </div>
    );
};

export default ProductList;