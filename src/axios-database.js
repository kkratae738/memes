import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://memes-generator-9ad1e.web.app'
})

export default instance;