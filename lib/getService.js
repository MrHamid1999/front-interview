import axios from "axios";

const getServiceApi = async (zoneId, serviceId) => {
  const data = await axios
    .get(
      `https://front-interview.darkube.app/inter/exp/direct/api/page?zoneId=${zoneId}&serviceId=${serviceId}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return data;
};

export default getServiceApi;
