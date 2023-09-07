import React, { useState } from "react";
import Zone from "./Zone";

const SearchModal = ({ zones }) => {
  const [currentZone, setCurrentZone] = useState({ zoneId: "", setZoneId: "" });
  const [activeInput, setActiveInput] = useState(null);

  return (
    <div className="w-full  h-[400px]">
      <Zone
        currentZone={currentZone}
        setCurrentZone={setCurrentZone}
        zones={zones}
        activeInput={activeInput}
        setActiveInput={setActiveInput}
      />
    </div>
  );
};

export default SearchModal;
