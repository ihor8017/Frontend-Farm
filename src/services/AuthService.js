import {API_URL, Method} from '../http/index';
import {AxiosResponse} from 'axios';

export const  AuthService = {
  login (data) {
    return fetch(`${API_URL}/Auth/Login`,{
      method: Method.PUT,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },

  registration(data) {
    return fetch(`${API_URL}/Auth/Register`,{
      method: Method.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },

  resetPassword(email, password) {
    return $api.put('/reset', {email, password});
  },

  logout(email, password) {
    return $api.post('/', {email, password});
  },
};
