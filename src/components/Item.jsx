import React from "react";

const Item = ({ name, id, handleClick }) => {
  return (
    <div
      className="w-full px-2 py-4 bg-slate-50 my-1 cursor-pointer"
      onClick={() => handleClick(id)}
    >
      {name}
    </div>
  );
};

export default Item;
