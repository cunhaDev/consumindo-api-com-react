import axios from  'axios';
const api = axios.create({
baseURL: 'https://v1-filmax.herokuapp.com/api'
});
export default api;