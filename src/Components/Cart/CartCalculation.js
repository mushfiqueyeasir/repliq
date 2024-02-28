import React from 'react';

const CartCalculation = () => {
    return (
        <div className="flex flex-col items-end  mt-10">
        <div className="w-[20rem]">
          <div className="flex items-center justify-between py-3 border-t-2 ">
            <h1 className="font-semibold text-secondary">Sub Total</h1>
            <h2 className="font-bold text-xl">$50253.50</h2>
          </div>
          <div className="flex items-center justify-between py-3 border-t-2 ">
            <h1 className="font-semibold text-secondary">Tax</h1>
            <h2 className="font-bold text-xl">$25.50</h2>
          </div>
          <div className="flex items-center justify-between py-3 border-t-2 border-b-2">
            <h1 className="font-semibold text-secondary">Shipping</h1>
            <h2 className="font-bold text-xl">$5.500</h2>
          </div>
          <div className="flex items-center justify-between py-3">
            <h1 className="font-bold text-primary text-lg">Discount on Cart</h1>
            <h2 className="font-bold text-xl">$5.500</h2>
          </div>
        </div>
        <div className="py-4 flex items-center justify-between w-full bg-[#E1EAF9] rounded-lg">
          <h1 className="text-[#3674D9] font-semibold text-lg px-4">Product Count (13)</h1>
          <div className="flex w-[20rem] justify-between">
            <h1 className="text-[#3674D9] text-2xl font-semibold">Total</h1>
            <h2 className="text-[#3674D9] text-3xl font-semibold px-2">$5005.50</h2>
          </div>
        </div>
      </div>
    );
};

export default CartCalculation;