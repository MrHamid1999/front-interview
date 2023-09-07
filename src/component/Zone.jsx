import React, { useState } from "react";
import Header from "./Header";
import SearchWrapper from "./SearchWrapper";
const Zone = (props) => {
  const { zoneList, currentZone, setCurrentZone, setSelectedLevel } = props;

  const [list, setList] = useState(zoneList || []);

  const handleClick = (id) => {
    const selectedZone = list.find((item) => item.id === id);

    setCurrentZone(selectedZone);
    setSelectedLevel("service");
  };
  return (
    <div className="w-full h-full">
      <Header
        text={"شهر خود را اانتخاب کنید "}
        handleBack={() => setSelectedLevel("start")}
      />
      <SearchWrapper
        mainList={zoneList}
        list={list}
        setList={setList}
        handleClick={handleClick}
        placeHolder="جستجوی شهر"
      />
    </div>
  );
};

export default Zone;
