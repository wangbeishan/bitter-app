import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'luxury-blancmange-da3e8e.netlify.app'
})

export {
    axios
}