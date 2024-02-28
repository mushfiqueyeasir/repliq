import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaHandHoldingUsd } from "react-icons/fa";
import { PiHandGrabbing } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
const CartAction = () => {
    return (
        <div className="grid grid-cols-4 gap-3 mt-5">

        <div className="flex justify-center py-3 rounded-lg items-center gap-x-4 text-3xl text-error bg-error/40 font-semibold">
          <IoMdCloseCircleOutline />
          Cancel
        </div>
        <div className="flex justify-center py-3 rounded-lg items-center gap-x-4 text-3xl text-primary bg-[#DEE1F3] font-semibold">
        <PiHandGrabbing />
          Hold
        </div>
        <div className="flex justify-center py-3 rounded-lg items-center gap-x-4 text-3xl text-primary bg-[#DEE1F3] font-semibold">
        <CiDiscount1 />
          Discount
        </div>
        <div className="flex justify-center py-3 rounded-lg items-center gap-x-4 text-3xl text-[#3674D9] bg-[#DEE1F3] font-semibold">
        <FaHandHoldingUsd />
          Pay Now
        </div>

      </div>
    );
};

export default CartAction;