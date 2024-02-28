import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from 'react-toastify';
const PaymentSection = ({ calculation,setPaymentSection,setCartProduct }) => {

    const handlePaynow=()=>{
        toast.success("Payment Done!")
        setCartProduct([])
        setPaymentSection(false)
    }
  return (
    <section className="p-4">
      <div className="p-4 border rounded flex items-center justify-between">
        <h1 className="text-lg font-semibold text-secondary">Order Amount</h1>
        <h1 className="text-2xl font-bold text-black">${calculation.total}</h1>
      </div>

      <div className="flex flex-col mx-auto gap-y-2 mt-4 w-[60%]">
        <input
          type="text"
          name=""
          id=""
          placeholder="Card Name"
          className="text-xl p-4 focus:outline-none border-b-2"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Card Number"
          className="text-xl p-4 focus:outline-none border-b-2"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Card Expire Date"
          className="text-xl p-4 focus:outline-none border-b-2"
        />
         <input
          type="text"
          name=""
          id=""
          placeholder="Card Secrete"
          className="text-xl p-4 focus:outline-none border-b-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-3   w-[60%] mx-auto mt-4">

        <button onClick={()=>setPaymentSection(false)} className="flex justify-center py-3 rounded-lg items-center gap-x-4 text-xl text-error bg-error/40 font-semibold">
          <IoMdCloseCircleOutline/>
          Cancel
        </button>
      
        <button onClick={handlePaynow}  className="flex justify-center py-3 rounded-lg items-center gap-x-4 text-xl text-white bg-[#3674D9] font-semibold">
        <FaHandHoldingUsd />
         Complete Payment
        </button>

      </div>


    </section>
  );
};

export default PaymentSection;
