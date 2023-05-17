import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'tmthosting.wangbeishan.top:8080'
})

export {
    axios
}