import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/marcuspontes12/',
});

export default api;
