import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'bitter-app.netlify.app'
})

export {
    axios
}