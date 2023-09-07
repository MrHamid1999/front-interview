import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Header = ({ text, handleBack }) => {
  return (
    <div className="w-full h-3 flex justify-center relative ">
      <FaAngleRight
        className="absolute right-0 "
        size={22}
        onClick={handleBack}
      />
      <h1 className="font-bold">{text}</h1>
    </div>
  );
};

export default Header;
