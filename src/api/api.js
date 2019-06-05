import axios from 'axios';
// 每次请求携带cookies信息
axios.defaults.withCredentials = true;
let base ='http://b.test.com';

export const  login = params => {return axios.post(`${base}/login`,params).then(res=>res.data)};
export const  getUser = params => {return axios.get(`${base}/user`,params).then(function (res) {
  return res.data;
}).catch(function (error) {
  console.log(error);
})};
