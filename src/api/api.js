import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL; // 배포용
const BASE_URL2 = process.env.NEXT_PUBLIC_SERVER_URL2; // 배포용
// const BASE_URL = "http://localhost:8080"; // 개발용

const apiTest1 = (data, callback, errorCallback) => {
  console.log("GET TEST");
  axios({
    method: "GET",
    url: process.env.NEXT_PUBLIC_SERVER_URL + "/blog-api/count-visitor",
    params: data,
  })
    .then(callback)
    .catch(errorCallback);
};

const visited = data => {
  if (RegExp(/^(itsme)/).test(data.who)) {
    console.log("Welcome tester!");
  } else {
    // axios({
    //   method: "post",
    //   url: BASE_URL + "/blog-api/visited",
    //   data: data,
    // })
    //   .then()
    //   .catch(err => console.log(err));

    axios({
      method: "post",
      url: BASE_URL + "/blog-api/visited",
      data: data,
    })
      .then()
      .catch(err => console.log(err));
  }
};

const getArticle = (data, callback, errorCallback) => {
  let isReceived = false;
  const localData = { data: { content: data.markdown_gitHub } };

  axios({
    method: "get",
    url:
      BASE_URL +
      "/blog-api/article/" +
      data.articleCategory +
      "/" +
      data.articleId,
  })
    .then(res => {
      console.log("MAIN SERVER ANSWERED");
      if (!isReceived) {
        callback(res, "Main Server");
        isReceived = true;
      }
    })
    .catch(() => {
      console.log("Main Server Error");
      errorCallback;
    });

  axios({
    method: "get",
    url:
      BASE_URL2 +
      "/blog-api/article/" +
      data.articleCategory +
      "/" +
      data.articleId,
  })
    .then(res => {
      console.log("SUB SERVER ANSWERED");
      if (!isReceived) {
        callback(res, "Sub Server");
        isReceived = true;
      }
    })
    .catch(() => {
      console.log("Sub Server Error");
      errorCallback;
    });

  setTimeout(() => {
    if (localData.data.content && !isReceived) {
      callback(localData, "Github Server");
      isReceived = true;
    }
  }, 500);
};

const searchArticle = (data, callback, errorCallback) => {
  axios({
    method: "GET",
    url: BASE_URL + "/blog-api/search/article/" + data.word,
  })
    .then(callback)
    .catch(errorCallback);
};

const Api = {
  apiTest1: (data, callback, errorCallback) =>
    apiTest1(data, callback, errorCallback),
  apiTest2: (data, callback, errorCallback) =>
    apiTest2(data, callback, errorCallback),
  visited: data => visited(data),
  getArticle: (articleCategory, articleId) =>
    getArticle(articleCategory, articleId),
  searchArticle: (data, callback, errorCallback) =>
    searchArticle(data, callback, errorCallback),
};

export default Api;
