import axios from "axios";
// import { Toast } from 'zarm'

// 环境变量
const MODE = import.meta.env.MODE;
// 请求基本路径
const baseURL = "http://127.0.0.1:4000/api";
const axiosInstance = axios.create({
  // 请求头需要带cookie，服务端 Access-Control-Allow-Origin不能为 " * "， 需要指定域名
  // withCredentials: true,
  timeout: 50000,
});
// 设置请求基本路径
axiosInstance.defaults.baseURL = MODE === "development" ? baseURL : "/";
// 设置请求头
axiosInstance.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axiosInstance.defaults.headers["Authorization"] = `${
  localStorage.getItem("token") || null
}`;
// 设置 post 请求使用的请求体
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
// 拦截器配置
axiosInstance.interceptors.response.use((res) => {
  if(!res.data) {
    return Promise.resolve(new Error("返回体异常"))
  }
  if(!res.data.success) {
    if(res.data.errorCode === 401) {
      // 未登录拦截
      window.location.href = "/login";
    } else {
      return Promise.reject(res.data.errorMessage);
    }
  }
  return res.data;
});

export const get = (url, params) => {
  return axiosInstance.get(url, params);
}

export const post = (url, params) => {
  return axiosInstance.post(url, {...params}, {
    headers: {
      csrf: '__csrf'
    }
  });
}

export default axiosInstance;
