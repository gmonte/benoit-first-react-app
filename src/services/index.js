import axios from "axios";

const instance = axios.create({
  baseURL: "https://5dcd5f05d795470014e4d06d.mockapi.io"
});

export default instance;
