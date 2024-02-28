import React from "react";
import CartItem from "./CartItem";

const ItemCart = ({ removeCart,cartProduct,updateCartItem }) => {
  return (
    <div className="overflow-x-auto mt-10 ">
      <table className="table">
        <tbody className="">
          {cartProduct.map((item, index) => (
            <tr key={index} className="hover border-none">
              <CartItem updateCartItem={updateCartItem} removeCart={removeCart} item={item}/>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default ItemCart;
