import React from "react";
import CartHeader from "./CartHeader";
import ItemCart from "./ItemCart";
import CartCalculation from "./CartCalculation";
import CartAction from "./CartAction";


const Cart = () => {
  return (
    <section className="shadow p-4">
      <CartHeader />
      <ItemCart />
      <CartCalculation />
      <CartAction/>
      
    </section>
  );
};

export default Cart;
