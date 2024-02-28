import React from "react";
import CartItem from "./CartItem";

const ItemCart = () => {
  return (
    <div className="overflow-x-auto mt-10 ">
      <table className="table">
        <tbody className="">
          <tr className="hover border-none">
            <CartItem />
          </tr>
          <tr className="hover border-none">
            <CartItem />
          </tr>
          <tr className="hover border-none">
            <CartItem />
          </tr>
          <tr className="hover border-none">
            <CartItem />
          </tr>
          <tr className="hover border-none">
            <CartItem />
          </tr>
          <tr className="hover border-none">
            <CartItem />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemCart;
