/**
 * axios封装
 */
import axios from 'axios';
import config from '../config';
import { ElMessage } from 'element-plus';
import router from '../router';

const tokenInvolid = 'token认证失败 请重新登录';
const NETWORK_ERROR = '网络请求异常';

// 创建axios实例对象，添加全局配置
const http = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
});

//请求拦截
http.interceptors.request.use(req => {
  //   console.log('req', req);
  const header = req.headers;
  if (!header.Authorization) header.Authorization = 'ych';
  return req;
});

// 响应拦截
http.interceptors.response.use(res => {
  const { code, data, msg } = res.data;
  if (code === 200) {
    return data;
  } else if (code === 40001) {
    ElMessage.error(tokenInvolid);
    setTimeout(() => {
      router.push('/login');
    }, 1500);
    return Promise.reject(tokenInvolid);
  } else {
    ElMessage.error(msg || NETWORK_ERROR);
    return Promise.reject(msg || NETWORK_ERROR);
  }
});

/**
 *请求核心函数
 * @param {object} options
 */
function request(options) {
  options.method = options.method || 'get';
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data;
  }
  // 确保生产环境调用的一定是baseapi
  if (config.env === 'production') {
    http.defaults.baseURL = config.baseApi;
  } else {
    http.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
  }
  return http(options);
}
['get', 'post', 'delete', 'put'].forEach(item => {
  request[item] = (url, data, options) => {
    return request({ url, data, ...options, method: item });
  };
});
export default request;
