import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://bitter-api.onrender.com:10000'
})

export {
    axios
}