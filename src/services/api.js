import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://hotelsantos.herokuapp.com/'
})
 
export default api;