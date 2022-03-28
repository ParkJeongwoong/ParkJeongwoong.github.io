import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL; // 배포용
// const BASE_URL = "http://localhost:8080"; // 개발용

const apiTest1 = (data, callback, errorCallback) => {
  axios({
    method: "get",
    url: BASE_URL + "/hello",
    params: data,
  })
    .then(callback)
    .catch(errorCallback);
};

const apiTest2 = (data, callback, errorCallback) => {
  axios({
    method: "get",
    url: BASE_URL + "/hello/dto",
    params: data,
  })
    .then(callback)
    .catch(errorCallback);
};

const visited = data => {
  axios({
    method: "post",
    url: BASE_URL + "/blog-api/visited",
    data: data,
  })
    .then()
    .catch(err => console.log(err));
};

const Api = {
  apiTest1: (data, callback, errorCallback) =>
    apiTest1(data, callback, errorCallback),
  apiTest2: (data, callback, errorCallback) =>
    apiTest2(data, callback, errorCallback),
  visited: data => visited(data),
};

export default Api;
