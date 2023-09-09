import { useState } from "react";
import dynamic from "next/dynamic";
import Start from "./components/Start";

const Search = (props) => {
	const { zoneList } = props;
	const [currentZone, setCurrentZone] = useState({
		zoneName: "",
		zoneId: "",
	});
	const [selectedLevel, setSelectedLevel] = useState("start");

	const Zone = dynamic(() => import("@/src/components/Zone"));
	const Service = dynamic(() => import("@/src/components/Service"));

	const SelectedComponent = () => {
		switch (selectedLevel) {
			case "start":
				return <Start setSelectedLevel={setSelectedLevel} />;
			case "zone":
				return (
					<Zone
						zoneList={zoneList}
						currentZone={currentZone}
						setCurrentZone={setCurrentZone}
						setSelectedLevel={setSelectedLevel}
					/>
				);

			case "service":
				return (
					<Service
						currentZone={currentZone}
						setSelectedLevel={setSelectedLevel}
					/>
				);
			default:
				return <Start />;
		}
	};

	return (
		<div className="max-w-[500px] w-full h-full p-3 flex flex-wrap content-center flex-col ">
			{/* <h1 className=" m-4 mt-10 text-center font-bold">
        میتوانید خدمات مختلف را در شهر مورد نظر خود جستجو کنید
      </h1>
      <FullPageSearch
        containerClassName="flex  w-full px-3 py-4 overflow-hidden"
        zoneName={currentZone.zoneName}
        zoneId={currentZone.zoneId}
        setCurrentZone={setCurrentZone}
      /> */}

			<SelectedComponent />
		</div>
	);
};

export default Search;
