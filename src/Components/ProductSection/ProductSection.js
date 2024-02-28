import React from "react";
import Search from "./Search";
import Categories from "./Categories";
import ProductList from "./ProductList";

const ProductSection = () => {
  return (
    <section className="bg-[#F4F6F8] h-full">
        <Search/>
        <Categories/>
        <ProductList/>
      
    </section>
  );
};

export default ProductSection;
