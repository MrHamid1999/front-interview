import axios from "axios";

const getZonesApi = async () => {
  return await axios
    .get("https://front-interview.darkube.app//inter/exp/direct/api/zones")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default getZonesApi;
