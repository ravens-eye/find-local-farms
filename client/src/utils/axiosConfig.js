import axios from 'axios';

const axiosInstance = axios.create({
  // Can configure later if needed
});

axiosInstance.interceptors.response.use(
  (response) => {
    // 2xx response codes
    return response.data;
  },
  (error) => {
    // 3xx, 4xx, 5xx codes, handle specific error situations here
    return Promise.reject(error);
  },
);

// Response.data coming into this on resolution
export const asyncGet = async (url, config) => {
  return axiosInstance
    .get(url, config)
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const maxios = {
  asyncGet: asyncGet,
};

export default maxios;
