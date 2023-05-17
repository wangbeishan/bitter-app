import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'tmthosting.wangbeishan.top'
})

export {
    axios
}