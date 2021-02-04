import _axios, { create as Create } from "axios";
// import axios from "axios";



const axios = Create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // timeout: 1000,
});

// export default axios.create({
//   baseURL: "https://some-domain.com/api/",
// });


export const get = async (url, success, error) => {
  try {
    const { data } = await axios({
      mathod: "get",
      url: url,
      responseType: "application/json",
      // headers: { authorization: "bearer " + getAuthToken() },
    });
    success(data);
  } catch (err) {
    error(err);
  }
};

export const deleteApi = async (url, success, error) => {
  try {
    const { data } = await axios({
      mathod: "delete",
      url: url,
      responseType: "application/json",
      // headers: { authorization: "bearer " + getAuthToken() },
    });
    success(data);
  } catch (err) {
    error(err);
  }
};

export const post = async (url, reqData, success, error) => {
  try {
    const { data } = await axios({
      method: "post",
      url: url,
      data: reqData,
      responseType: "application/json",
      // headers: { authorization: "bearer " + getAuthToken() },
    });
    success(data);
  } catch (err) {
    error(err);
  }
};

export const put = async (url, reqData, success, error) => {
  try {
    const { data } = await axios({
      method: "put",
      url: url,
      data: reqData,
      responseType: "application/json",
      // headers: { authorization: "bearer " + getAuthToken() },
    });
    success(data);
  } catch (err) {
    error(err);
  }
};
