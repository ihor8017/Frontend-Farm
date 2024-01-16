import axios from 'axios';
const API_URL = 'http://sasha2235-001-site1.ftempurl.com/api';

const $api = axios.create({
  withCredentials: true,
  baseUrl: API_URL,
});

$api.interceptors.request.use( (config) => {
  config.headers.Authorization =  `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default $api;
