/* eslint-disable no-unused-vars */
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { categories } from "../../content/categories";
const Categories = ({selectedCategory,setSelectedCategory}) => {

  return (
    <div className="flex justify-around items-center gap-x-2 mt-4">
      {categories.slice(0, 5).map((item, index) => (
        <button
          key={index}
          onClick={()=>setSelectedCategory(item)}
          className={`border-2 ${selectedCategory===item?"border-[#3674D9] text-[#3674D9]":"border-secondary text-secondary"} px-1 lg:px-1 2xl:px-4 py-1 lg:py-2  font-bold rounded-md text-xs h-full lg:text-sm 2xl:text-lg bg-white`}
        >
          {item}
        </button>
      ))}
      <button className="text-3xl">
        <CiMenuKebab />
      </button>
    </div>
  );
};

export default Categories;
