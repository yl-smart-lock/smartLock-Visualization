import axios from 'axios'

import store from '../store/index'
// import {
//     Message,
// } from 'element-ui'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = '/api'
}


// 请求拦截器
// axios.interceptors.request.use(

//     error => {
//         return Promise.error(error)
//     })

axios.defaults.timeout = 600000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 响应拦截器
axios.interceptors.response.use(response => {
    console.log(response, '000')
    if (response.status === 200 || response.status === 201) {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response.data)
    }
}, error => {
    console.log(error, '001')
    // if (error.response.status) {
    //     console.log(error.response.data.msg, '1111')
    //     // Message({
    //     //     message: error.response.data.msg || 'Error',
    //     //     type: 'error',
    //     //     duration: 2 * 10000
    //     //   })
    //     // 对不同返回码对相应处理
    //     return Promise.reject(error.response)
    // }
})

export function httpGet(url, data) {
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
//delete 请求
export function httpDelete(
    url
) {
    return new Promise((resolve) => {
        axios({
            url,
            method: 'delete',
            // transformRequest: [function (data) {
            //     let ret = ''
            //     for (let it in data) {
            //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            //     }
            //     return ret
            // }],
            // 发送的数据
            // url参数

        }).then((res) => {
            resolve(res.data)
        })
    })
}

// post请求
export function httpPost(url, data) {
    console.log(url, '888')
    return new Promise((resolve) => {
        axios({
            url,
            method: 'post',
            // transformRequest: [function (data) {
            //     let ret = ''
            //     for (let it in data) {
            //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            //     }
            //     return ret
            // }],
            // 发送的数据
            data
            // url参数

        }).then(res => {
            console.log(res)
            resolve(res)
        })
    })
}

//put请求
export function httpPut(url, data) {
    return new Promise((resolve) => {
        axios({
            url,
            method: 'put',

            // 发送的数据
            data,
            // url参数

        }).then(res => {
            resolve(res.data)
        })
    })

}
// patch请求
export function httpPatch(url, data) {
    return new Promise((resolve) => {
        axios({
            url,
            method: 'patch',

            // 发送的数据
            data,
            // url参数

        }).then(res => {
            resolve(res.data)
        })
    })

}