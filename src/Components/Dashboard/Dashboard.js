/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cart from "../Cart/Cart";
import ProductSection from "../ProductSection/ProductSection";
import PaymentSection from "../PaymentSection/PaymentSection";

const Dashboard = () => {
  const [paymentSection,setPaymentSection]=useState(false)
  const [cartProduct, setCartProduct] = useState([]);
  const addToCart = (item) => {
    !cartProduct.includes(item) && setCartProduct([...cartProduct, item]);
  };
  const removeCart = (product) => {
    const filter = cartProduct.filter((item) => item.title !== product);
    setCartProduct(filter);
  };

  const updateCartItem = (updatedProduct) => {
    const updatedCart = cartProduct.map((item) =>
      item.title === updatedProduct.title ? updatedProduct : item
    );
    setCartProduct(updatedCart);
  };

  const subtotal = cartProduct.reduce((total, item) => {
    const price = parseInt(item.price);
    const quantity = parseInt(item.quantity) || 1;
    return total + (price * quantity);
}, 0);

const tax = cartProduct.length*5;
const shipping = cartProduct.length*1.5;
const discount= (subtotal*0.05).toFixed(2);
const total=(subtotal+tax+shipping)-discount
const calculation = {subtotal,tax,shipping,discount,length:cartProduct.length,total}
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <Cart updateCartItem={updateCartItem} removeCart={removeCart} cartProduct={cartProduct} calculation={calculation} setPaymentSection={setPaymentSection}/>
      {!paymentSection &&<ProductSection addToCart={addToCart} />}
      {paymentSection &&<PaymentSection calculation={calculation}  setPaymentSection={setPaymentSection} setCartProduct={setCartProduct}/>}
    </div>
  );
};

export default Dashboard;
