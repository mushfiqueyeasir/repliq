import React from 'react';

const ProductCard = ({data}) => {
    return (
        <div className='border rounded'>
            <img src={data.image} alt=""  className='h-[12rem] object-cover'/>
            <h1 className='text-center py-2 bg-secondary/5 text-secondary font-bold text-lg '>${data.price}</h1>
            <h1 className='py-2 text-center text-secondary font-semibold border-t'>{data.title}</h1>
            
        </div>
    );
};

export default ProductCard;