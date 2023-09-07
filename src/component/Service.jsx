import React, { useEffect, useState } from "react";
import Header from "./Header";
import getServicesApi from "@/lib/getServices";
import SearchWrapper from "./SearchWrapper";
import { useRouter } from "next/router";

const Service = (props) => {
  const { currentZone, setSelectedLevel } = props;
  const [services, setServices] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getServices = async () => {
      const data = await getServicesApi(currentZone.id);
      setServicesList(data);
      setServices(data);
    };
    getServices();
  }, [currentZone]);

  return (
    <div className="w-full">
      <Header
        text="سرویس خود را انتخاب کنید"
        handleBack={() => setSelectedLevel("zone")}
      />
      <SearchWrapper
        mainList={servicesList}
        list={services}
        setList={setServices}
        placeHolder="جستجوی سرویس"
        handleClick={(id) => router.push(`/${currentZone.id}/${id}`)}
      />
    </div>
  );
};

export default Service;
