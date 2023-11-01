import axios from "axios";

const Api = (url, data = [], method = "GET") => {
  return axios({
    url: process.env.REACT_APP_API_URL + url,
    method: method,
    data: data,
  });
};

export default Api;
