import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.URL || 'https://tmthosting.wangbeishan.top:8080',
    Headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export {
    axios
}