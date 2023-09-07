import React, { useEffect } from "react";

const Start = (props) => {
  const { setSelectedLevel } = props;

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <h1 className=" m-4 mt-10 text-center font-bold">
        میتوانید خدمات مختلف را در شهر مورد نظر خود جستجو کنید
      </h1>

      <div className="w-full h-[40px]">
        <button
          className="w-full h-full bg-sky-500 text-white rounded-lg"
          onClick={() => setSelectedLevel("zone")}
        >
          جستجوی خدمات
        </button>
      </div>
    </div>
  );
};

export default Start;
