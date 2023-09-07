import getZonesApi from "@/lib/getZones";
import Search from "@/src/Search";

export default function Home(props) {
  const { data } = props;

  return (
    <div className="w-full h-screen flex justify-center md:hidden">
      <Search zoneList={data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await getZonesApi();
  return {
    props: {
      data: data || null,
    },
  };
};
