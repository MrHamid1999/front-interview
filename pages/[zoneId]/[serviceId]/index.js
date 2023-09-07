import React from "react";
import getServicesApi from "../../../lib/getServices";
import getZonesApi from "@/lib/getZones";
import getServiceApi from "@/lib/getService";
import ServiceCart from "@/src/component/ServiceCart";

const ServicePage = ({ data }) => {
  return (
    <div className="w-full h-full flex justify-center pt-3 px-2 ">
      {data?.serviceId ? (
        <ServiceCart
          service={data?.serviceId}
          zone={data?.zoneId}
          text={data?.text}
        />
      ) : (
        <p>خدمت مورد نظر در حال حاظر در دسترس نمیباشد</p>
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  const zoneData = await getZonesApi();
  const servicesData = [];

  zoneData.forEach((zone) => {
    getServicesApi(zone.id).then((res) => {
      const data = res.map((item) => {
        return {
          ...item,
          zoneId: zone.id,
        };
      });
      servicesData.push(data);
    });
  });

  const data = servicesData.flat();

  return {
    paths: data.map((service) => {
      return {
        params: {
          zoneId: service.zoneId,
          serviceId: service.id,
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { zoneId, serviceId } }) => {
  const data = await getServiceApi(zoneId, serviceId);

  return {
    props: { data: data || null },
    revalidate: 18000,
  };
};

export default ServicePage;
