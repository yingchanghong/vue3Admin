import http from '../utils/request';
export default {
  login(data) {
    // return http({url:'/user/login',method:'post',data:data,mock:false})
    return http.post('/user/login', data);
  },
};
