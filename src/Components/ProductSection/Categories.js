/* eslint-disable no-unused-vars */
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
const Categories = () => {
  const categories = [
    "All Categories",
    "Electronics",
    "Home & Lifestyle",
    "Men Fashion",
    "Women Fashions",
    "Toys",
    "All Categories",
    "Electronics",
    "Home & Lifestyle",
    "Men Fashion",
    "Women Fashions",
    "Toys",
    "All Categories",
    "Electronics",
    "Home & Lifestyle",
    "Men Fashion",
    "Women Fashions",
    "Toys",
    "All Categories",
    "Electronics",
    "Home & Lifestyle",
    "Men Fashion",
    "Women Fashions",
    "Toys",
  ];
  return (
    <div className="flex justify-around items-center gap-x-2 mt-4">
      {categories.slice(0, 5).map((item, index) => (
        <button
          key={index}
          className="border-2 border-secondary px-4 py-2 text-secondary font-bold rounded-md text-lg bg-white"
        >
          {item}
        </button>
      ))}
      <button className="text-3xl"><CiMenuKebab /></button>
    </div>
  );
};

export default Categories;
