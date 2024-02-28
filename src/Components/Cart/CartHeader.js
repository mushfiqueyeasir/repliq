import React from 'react';
import { GrMenu } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineLocalShipping, MdOutlineDownloading } from "react-icons/md";

const cartMenu = [
  { title: "Note", icon: <FaRegEdit /> },
  { title: "Shipping", icon: <MdOutlineLocalShipping /> },
  { title: "Hold Orders", icon: <MdOutlineDownloading /> },
  { title: " New Items", icon: <IoMdAddCircle /> },
];

const CartHeader = () => {
    return (
        <div className="flex justify-between items-center gap-x-1 lg:gap-x-3">
        <button className="lg:text-2xl">
          <GrMenu />
        </button>
        {cartMenu.map((item, index) => (
          <button
            key={index}
            className="flex justify-center text-xs lg:text-sm 2xl:text-xl items-center gap-x-1 lg:gap-x-2 text-primary bg-primary/10 hover:bg-primary/20 duration-300 lg:px-2 2xl:px-4 py-2 rounded-lg font-semibold  w-full"
          >
            <span className="text-xs lg:text-2xl">{item.icon}</span>
            {item.title}
          </button>
        ))}
      </div>
    );
};

export default CartHeader;