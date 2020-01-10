import axios from "axios";

export default class ApiService {
  static get = ({ url, limit = 10 }) => {
     return axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/${url}?_limit=${limit}`
    });
  };
}
