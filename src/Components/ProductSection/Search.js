import React from 'react';
import { FaSearch } from "react-icons/fa";
import { CiBarcode } from "react-icons/ci";
const Search = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2 gap-4 bg-[#F9FAFB] shadow-md">
        <div className="text-lg lg:text-4xl text-secondary">
          <FaSearch />
        </div>
        <input type="text" placeholder="Search Product"  className="lg:text-3xl  w-full bg-inherit p-3 focus:outline-none"/>

        <div className="text-xl lg:text-5xl relative">
          <CiBarcode />
          <div className="w-full border border-error absolute top-[50%]"></div>
        </div>
      </div>
    );
};

export default Search;