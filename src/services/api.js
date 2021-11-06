import axios from 'axios';

//url destaques
const api = axios.create({
    baseURL: 'http://192.168.1.8:4000'
})

export default api;