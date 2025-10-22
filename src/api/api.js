import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}',
});

export const api_key = "17a403d51787ffaa8613cd5731305af6";