import axios from 'axios';
 let base ='http://test.com';

export const  login = params => {return axios.post(`${base}/login`,params).then(res=>res.data)};
export const  getUser = params => {return axios.get(`${base}/user.json`,params).then(res=>res.data)};

