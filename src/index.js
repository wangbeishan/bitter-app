import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://bitter-api.onrender.com'
})

export {
    axios
}