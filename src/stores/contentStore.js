import { axios } from '../index'
import { defineStore } from "pinia"
import { ref } from 'vue'

export const useContentStore = defineStore('contentStore', () => {
    const content = ref({})
    const contents = ref([])

    // -----------------------------------------------------
    const test = () => {
        axios.get('/test')
            .then((response) => {
                console.log('Config: ' + response.config)
                console.log('Data: ' + response.data)
            })
            .catch((error) => {
                console.log(error.config)
            })
    }
    // -----------------------------------------------------
    
    const postContent = async (postCon) => {
        await axios.post('/postContent', postCon, {
            headers: { 
                Authorization: 'Bearer ' + localStorage.getItem('token') 
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    contents.value.push(response.data.content)
                }
            })
            .catch((error) => {
                console.log(error.config)
            })
    }

    const getContents = async () => {
        await axios.get('/contents')
                .then((response) => {
                    if (response.status === 200 && response.data.contents) {
                        contents.value = response.data.contents
                    }
                })
                .catch((error) => {
                    console.log(error.config)
                })
    }

    const deleteAll = async () => {
        await axios.delete('/deleteAll')
            .then((response) => {
                if (response.status === 200) {
                    contents.value = []
                }
            })
            .catch((error) => {
                console.log(error.config)
            })
    }

    return { contents, postContent, getContents, test, deleteAll }
})