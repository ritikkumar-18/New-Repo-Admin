
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import cookies from "universal-cookie";

// const cookie = new cookies();
// const token = cookie.get("token");

// const BASE_URL = "https://api.techizons.in/api"; 

// const headers = {
//   headers: {
//     "Content-Type": "application/json",
//     token: token,
//   },
// };

// const post_data = async (url, data) => axios.post(`${BASE_URL}/${url}`, data, headers);
// const get_api = async (url) => axios.get(`${BASE_URL}/${url}`, headers);
// const put_api = async (url, data) => axios.put(`${BASE_URL}/${url}`, data, headers);
// const delete_api = async (url) => axios.delete(`${BASE_URL}/${url}`, headers);

// export { post_data, get_api, put_api, delete_api };
import axios from "axios"
import cookies from "universal-cookie"

const cookie = new cookies()
const token = cookie.get("token")

const BASE_URL = "https://api.techizons.in/api"

const headers = {
  headers: {
    "Content-Type": "application/json",
    token: token,
  },
}

// Modified to accept custom headers that can override the default headers
const post_data = async (url, data, customHeaders = null) => {

  const finalHeaders = customHeaders || headers
  console.log(finalHeaders)
  return axios.post(`${BASE_URL}/${url}`, data, finalHeaders)
}

const get_api = async (url, customHeaders = null) => {
  const finalHeaders = customHeaders || headers
  return axios.get(`${BASE_URL}/${url}`, finalHeaders)
}

const put_api = async (url, data, customHeaders = null) => {
  const finalHeaders = customHeaders || headers
  return axios.put(`${BASE_URL}/${url}`, data, finalHeaders)
}

const delete_api = async (url, customHeaders = null) => {
  const finalHeaders = customHeaders || headers
  return axios.delete(`${BASE_URL}/${url}`, finalHeaders)
}

export { post_data, get_api, put_api, delete_api }
