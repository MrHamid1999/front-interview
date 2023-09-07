import React, { useEffect } from "react";
import Item from "./Item";
import SearchInput from "./SearchInput";
import ItemNotFound from "./ItemNotFound";

const SearchWrapper = (props) => {
  const { mainList, list, setList, handleClick, placeHolder } = props;

  return (
    <div className="w-full h-full">
      <SearchInput
        list={mainList}
        setList={setList}
        placeHolder={placeHolder}
      />
      <div className="h-full">
        {list.length > 0 ? (
          list.map((item) => {
            return (
              <Item
                key={item.id}
                name={item.name}
                id={item.id}
                handleClick={handleClick}
              />
            );
          })
        ) : (
          <ItemNotFound />
        )}
      </div>
    </div>
  );
};

export default SearchWrapper;
