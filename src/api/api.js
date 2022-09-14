import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL; // 배포용
const BASE_URL2 = process.env.NEXT_PUBLIC_SERVER_URL2; // 배포용
// const BASE_URL = "http://localhost:8080"; // 개발용

const apiTest1 = (data, callback, errorCallback) => {
  console.log("GET TEST");
  axios({
    method: "GET",
    url: process.env.NEXT_PUBLIC_SERVER_URL2 + "/blog-api/count-visitor",
    params: data,
  })
    .then(callback)
    .catch(errorCallback);
};

const visited = data => {
  if (RegExp(/^(itsme)/).test(data.who)) {
    console.log("Welcome tester!");
  } else {
    axios({
      method: "post",
      url: BASE_URL + "/blog-api/visited",
      data: data,
    })
      .then()
      .catch(err => console.log(err));

    axios({
      method: "post",
      url: BASE_URL2 + "/blog-api/visited",
      data: data,
    })
      .then()
      .catch(err => console.log(err));
  }
};

const getArticle = (data, callback, errorCallback) => {
  axios({
    method: "get",
    url:
      BASE_URL2 +
      "/blog-api/article/" +
      data.articleCategory +
      "/" +
      data.articleId,
  })
    .then(callback)
    .catch(() => {
      alert("Main Server Error");
      axios({
        method: "get",
        url:
          BASE_URL +
          "/blog-api/article/" +
          data.articleCategory +
          "/" +
          data.articleId,
      })
        .then(callback)
        .catch(errorCallback);
    });
};

const Api = {
  apiTest1: (data, callback, errorCallback) =>
    apiTest1(data, callback, errorCallback),
  apiTest2: (data, callback, errorCallback) =>
    apiTest2(data, callback, errorCallback),
  visited: data => visited(data),
  getArticle: (articleCategory, articleId) =>
    getArticle(articleCategory, articleId),
};

export default Api;
