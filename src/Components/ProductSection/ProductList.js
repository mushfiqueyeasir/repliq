import React from "react";
import { products } from "../../content/product";
import ProductCard from "./ProductCard";

const ProductList = ({ selectedCategory,addToCart }) => {
 
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 mt-6 p-4">
      {selectedCategory
        ? products
            .filter((item) => item.category === selectedCategory)
            .map((item, index) => <ProductCard key={index} data={item} addToCart={addToCart} />)
        : products.map((item, index) => (
            <ProductCard key={index} data={item} addToCart={addToCart}/>
          ))}
    </div>
  );
};

export default ProductList;
