import Axios from 'axios'

const axios = Axios.create({
    baseURL: '44.226.145.213:8080'
})

export {
    axios
}