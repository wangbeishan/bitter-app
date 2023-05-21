import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.URL || 'http://tmthosting.wangbeishan.top',
    Headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export {
    axios
}