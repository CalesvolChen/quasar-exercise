import { boot } from "quasar/wrappers";
import axios from "axios";
const api = axios.create({
  // baseURL:'',
  // timeout: 1000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
let requestTimer = "";
let responseTimer = "";
// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    requestTimer = new Date().getTime();
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    responseTimer = new Date().getTime();
    // 对响应数据做点什么
    const interval = responseTimer - requestTimer;
    if (interval >= 3000) {
      console.log(`用时：${interval / 1000}s`);
    }
    return {
      data: response.data,
      status: response.status,
    };
  },
  (error) => {
    // 对响应错误做点什么
    // notify({
    //   message: "请求失败，请刷新重试",
    //   position: "top",
    //   color: "yellow",
    //   icon: "warning",
    // });
    console.log(error);
    return Promise.reject(error);
  }
);
// export default boot(({ app }) => {
//   // for use inside Vue files (Options API) through this.$axios and this.$api

//   app.config.globalProperties.$axios = axios;
//   // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
//   //       so you won't necessarily have to import axios in each vue file

//   // app.config.globalProperties.$api = api
//   // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
//   //       so you can easily perform requests against your app's API
// });
// export { axios, api };
const tipsApi = (c = "i", min = 0, max = "20") => {
  const url = `https://v1.hitokoto.cn?c=${c}&min_length=${min}&max_length=${max}`;
  return api
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};
const poemsApi = () => {
  const url = "https://open.saintic.com/api/sentence";
  return api
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

export { axios, tipsApi, poemsApi };
