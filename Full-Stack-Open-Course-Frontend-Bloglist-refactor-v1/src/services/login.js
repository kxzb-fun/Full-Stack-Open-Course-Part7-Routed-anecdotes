import axios from "axios";

const baseUrl = "/api/login";

const login = async (data) => {
  const res = await axios.post(baseUrl, data);
  return res.data;
};

export default { login };
