import store from '@/store';
import { server } from '@src/config';
import axios from 'axios';
import { getToken } from './auth';

// create an axios instance
const service = axios.create({
  baseURL: server.url, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken();
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    switch (res.code) {
      case store.getters.requestCode.SUCCESS.code:
        return res.info;
      case store.getters.requestCode.FORBIDDEN.code:
        location.href = '/#/forbidden';
        break;
      default:
        console.log('err:' + res.msg);// for debug
        return Promise.reject(res.msg);
    }
  },
  error => {
    console.log('err:' + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
