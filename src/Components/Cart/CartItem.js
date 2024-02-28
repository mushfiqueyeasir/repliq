import React from "react";
import { FaRegEdit, FaMinusCircle, FaTrashAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
const CartItem = () => {
  return (
    <td className="flex items-center justify-between w-full text-secondary text-xl font-semibold !p-0 border-none ">
      <div className=" flex justify-center">
        <FaRegEdit />
      </div>
      <div className="flex justify-between items-center p-2 border border-b-0 w-[90%]">
        <h1 className=" ">Pure White & Black Sleeve</h1>
        <h1 className="text-center">$91.00</h1>

        <div className="flex items-center justify-center gap-x-4 ">
          <button>
            <FaMinusCircle />
          </button>
          1
          <button>
            <FaCirclePlus />
          </button>
        </div>

        <h1 className="text-center">$91.00</h1>
      </div>
      <div className=" flex justify-center text-error">
        <FaTrashAlt />
      </div>
    </td>
  );
};

export default CartItem;
