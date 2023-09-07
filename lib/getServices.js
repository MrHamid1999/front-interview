import axios from "axios";

const getServicesApi = async (zoneId) => {
  const data = await axios
    .get(
      `https://front-interview.darkube.app//inter/exp/direct/api/services?zoneId=${zoneId}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return data;
};

export default getServicesApi;
