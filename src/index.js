import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'bitter-app.netlify.app:8080'
})

export {
    axios
}