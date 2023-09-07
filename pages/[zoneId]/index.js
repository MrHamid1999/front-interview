import getServicesApi from "@/lib/getServices";
import getZonesApi from "@/lib/getZones";
import ServiceCart from "@/src/component/ServiceCart";
import Link from "next/link";

const ZonePage = ({ data, zoneId }) => {
  return (
    <main>
      {data?.map((service) => {
        return (
          <Link href={`/${zoneId}/${service.id}`}>
            <ServiceCart service={service.name} />
          </Link>
        );
      })}
    </main>
  );
};

export const getStaticPaths = async () => {
  const data = await getZonesApi();

  return {
    paths: data.map((item) => {
      return {
        params: {
          zoneId: item.id,
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { zoneId } }) => {
  const data = await getServicesApi(zoneId);

  return {
    props: { data: data || null, zoneId },
    revalidate: 18000,
  };
};

export default ZonePage;
