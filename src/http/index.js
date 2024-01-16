import axios from 'axios';
export const API_URL = 'http://sasha2235-001-site1.ftempurl.com/api';

export const Method = {
  POST: 'POST',
  PUT: 'PUT',
};

const $api = axios.create({
  withCredentials: true,
  baseUrl: API_URL,
});

$api.interceptors.request.use( (config) => {
  config.headers.Authorization =  `Bearer ${localStorage.getItem('token')}`;
  return config;
});


