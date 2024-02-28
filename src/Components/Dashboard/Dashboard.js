import React from "react";
import Cart from "../Cart/Cart";
import ProductSection from "../ProductSection/ProductSection";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <Cart />
      <ProductSection/>
    </div>
  );
};

export default Dashboard;
