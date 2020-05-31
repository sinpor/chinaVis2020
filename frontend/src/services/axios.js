import axios from 'axios'

const instance = axios.create({
    timeout: 30000,
    baseURL: '/d/'
});


export default instance;