import axios from "axios";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const BASE_URL = "https://api.techizons.in/api";

// Dynamically get headers to always use latest token
const getHeaders = () => {
  const token = cookie.get("token");
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};

// POST request
const post_data = async (url, data = {}, customHeaders = null) => {
  const finalHeaders = customHeaders || getHeaders();
  return axios.post(`${BASE_URL}/${url}`, data, finalHeaders);
};

// GET request
const get_api = async (url, customHeaders) => {
  const finalHeaders = customHeaders || getHeaders();
  return axios.get(`${BASE_URL}/${url}`, finalHeaders);
};

// PUT request
const put_api = async (url, data = {}, customHeaders = null) => {
  const finalHeaders = customHeaders || getHeaders();
  return axios.put(`${BASE_URL}/${url}`, data, finalHeaders);
};

// DELETE request
const delete_api = async (url, customHeaders = null) => {
  const finalHeaders = customHeaders || getHeaders();
  return axios.delete(`${BASE_URL}/${url}`, finalHeaders);
};

// PATCH request
const patch_api = async (url, data = {}, customHeaders = null) => {
  const finalHeaders = customHeaders || getHeaders();
  return axios.patch(`${BASE_URL}/${url}`, data, finalHeaders);
};

export { post_data, get_api, put_api, delete_api, patch_api };
