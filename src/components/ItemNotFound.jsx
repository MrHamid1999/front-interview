import React from "react";
import { FaBox, FaFile } from "react-icons/fa";

const ItemNotFound = () => {
  return (
    <div className="w-full h-[80%] flex justify-center content-center flex-wrap">
      <div>
        <FaFile size={50} color="#b1b0b0" className="m-auto" />
        <p className="text-[#b1b0b0] mt-5 text-md font-bold">موردی پیدا نشد</p>
      </div>
    </div>
  );
};

export default ItemNotFound;
