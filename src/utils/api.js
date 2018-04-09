/**
 *
 * https接口放在这里
 *
 */
import axios from "axios";
import CONFIG from "../config";

/*需要对post进行formdata转换*/
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

  //post请求,把数据结变成键值对结构
  if (config.data) {
    var str = [];
    var data = JSON.parse(JSON.stringify(config.data));
    for (var p in data)
      if (data.hasOwnProperty(p) && data[p] != null) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
      }
    config.data = str.join("&");
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

/*默认过滤返回的数据*/
axios.interceptors.response.use(
  function (response) {
    // do something with response data
    return response.data;
  },
  function (error) {
    // do something with response error
    return Promise.reject(error);
  }
);

export default {
  install: function (Vue, options) {
    Vue.prototype.api = {
      getFn(params) {
        return axios({
          method: "get",
          url: CONFIG.yoururl + "you url",
          params: params
        });
      }
    };
  }
};
