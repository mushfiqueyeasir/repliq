import React from "react";
import CartHeader from "./CartHeader";
import ItemCart from "./ItemCart";
import CartCalculation from "./CartCalculation";
import CartAction from "./CartAction";


const Cart = ({cartProduct,removeCart,updateCartItem,calculation,setPaymentSection}) => {
  return (
    <section className="shadow p-4">
      <CartHeader />
      <ItemCart updateCartItem={updateCartItem} removeCart={removeCart} cartProduct={cartProduct}/>
      <CartCalculation calculation={calculation} />
      <CartAction setPaymentSection={setPaymentSection}/>
      
    </section>
  );
};

export default Cart;
