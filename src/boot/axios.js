import { boot } from "quasar/wrappers";
import axios from "axios";

// const api = axios.create({ baseURL: 'https://api.example.com' })

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
const tipsApi = (c = "i",min = 0, max = "20") => {
  const url = `https://v1.hitokoto.cn?c=${c}&min_length=${min}&max_length=${max}`;
  return axios
    .get(url)
    .then((res) => {
      return res;
      // content.value = res.data.hitokoto;
      // author.value = res.data.from;
    })
    .catch((err) => {
      console.error(err);
    });
};

export { axios, tipsApi };
