import React, { useState } from "react";
import Search from "./Search";
import Categories from "./Categories";
import ProductList from "./ProductList";
import { categories } from "../../content/categories";

const ProductSection = ({addToCart}) => {
    const [selectedCategory,setSelectedCategory]=useState(categories[0])

  return (
    <section className="bg-[#F4F6F8] h-full">
        <Search/>
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <ProductList selectedCategory={selectedCategory==="All Categories"?null:selectedCategory} addToCart={addToCart}/>
      
    </section>
  );
};

export default ProductSection;
