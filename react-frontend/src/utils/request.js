import axios from "axios";

axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;

export const getFetch = async (url, params = {}) => {
  try {
    const response = await new Promise((resolve, reject) => {
      axios.get(url, {params: params}).then((res) => {
        resolve(res.data);
      }).catch((err) => {
        reject(err);
      });
    });
    return response;
  } catch (e) {
    return {
      code: -1,
      message: e.message,
      status: false,
    };
  }
};

export const postFetch = async (url, params = {}) => {
  try {
    const response = await new Promise((resolve, reject) => {
      axios.post(url, params).then((res) => {
        resolve(res.data);
      }).catch((err) => {
        reject(err);
      });
    });
    return response;
  } catch (e) {
    return e.message;
  }
};