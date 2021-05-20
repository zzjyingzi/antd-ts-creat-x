import axios from 'axios';


// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://api.example.com'
});

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 移除拦截器
// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

interface serverConfig {
    ip: string;
    port: number;
    path: string;
}

export function fetch(URL: string,  params: object, serverCon?: serverConfig) {
    let url = !serverCon ? URL : serverCon.ip + '/:' + serverCon.port + serverCon.path;
    return axios.get(url, {...params});
}
export function post(URL: string,  params: object, serverCon?: serverConfig) {
    let url = !serverCon ? URL : serverCon.ip + '/:' + serverCon.port + serverCon.path;
    return axios.post(url, {...params});
}
