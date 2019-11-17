import axios from 'axios';

const url = 'http://localhost:5000';
const url_heroku = 'https://back-semana7.herokuapp.com';

const api = axios.create({
    baseURL: url_heroku
});

export default api;