import React, { useState } from "react";
import { FaRegEdit, FaMinusCircle, FaTrashAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
const CartItem = ({ updateCartItem, removeCart, item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
    item.quantity = quantity ;
    updateCartItem(item);
  };

  const handleRemove = () => {
    if(quantity > 1){
      setQuantity((prev) => prev - 1);
      item.quantity =  quantity ;
      updateCartItem(item);
    }
   
  };
  return (
    <td className="flex items-center justify-between w-full text-secondary text-xl font-semibold !p-0 border-none ">
      <div className=" flex justify-center">
        <FaRegEdit />
      </div>
      <div className="flex justify-between items-center p-2 border border-b-0 w-[90%]">
        <h1 className=" ">{item.title}</h1>
        <h1 className="text-center">${item.price}</h1>

        <div className="flex items-center justify-start gap-x-4 ">
          <button onClick={handleRemove}>
            <FaMinusCircle />
          </button>
          {quantity}
          <button onClick={handleAdd}>
            <FaCirclePlus />
          </button>
        </div>

        <h1 className="text-center">${item.price * quantity}</h1>
      </div>
      <button
        onClick={() => removeCart(item.title)}
        className=" flex justify-center text-error"
      >
        <FaTrashAlt />
      </button>
    </td>
  );
};

export default CartItem;
