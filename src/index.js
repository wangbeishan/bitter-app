import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.URL || 'tmthosting.wangbeishan.top:8080'
})

export {
    axios
}