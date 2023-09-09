import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

const SearchInput = (props) => {
  const { list, setList, placeHolder } = props;
  const [inputValue, setInputValue] = useState("");
  let handleClearClick = (_) => {
    setInputValue("");
    setList([]);
  };

  useEffect(() => {
    let trimmedValue = inputValue.trim();

    setList((_) => {
      if (trimmedValue === "") {
        return list;
      } else {
        return list.filter((item) => item.name.includes(trimmedValue));
      }
    });
  }, [inputValue]);
  return (
    <div className="flex w-full mt-[50px] border border-neutral-300 p-3 rounded ">
      <div className="flex justify-between  items-center w-full relative overflow-hidden">
        <input
          type="search"
          className="absolute outline-none text-gray-700 w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeHolder}
        />
      </div>
      <span className="z-10" onClick={handleClearClick}>
        <CgClose className="cursor-pointer" size="1.4rem" color="#D3D4D5" />
      </span>
    </div>
  );
};

export default SearchInput;
