import {$api, API_URL} from '../http/index';
import axios from 'axios';

export const   AuthService = {

  login(data) {
    return axios.get(`${API_URL}/Auth/Login`,
    {
      params: {
        email: data.email,
        password: data.password,
      },
       headers: {
        'Content-Type': 'text/json',
       },
      
    })
  },

  registration (data) {
    return axios.post(`${API_URL}/Auth/Register`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  forgot (data) {
    return axios.put(`${API_URL}/Auth/ForgotPassword`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  reset (data, token) {
    return axios.put(`${API_URL}/Auth/ResetPassword`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },


  
  emailConfirmation (token)  {
    return  axios(`${API_URL}/Auth/ConfirmEmail`, {
      method: 'put',
      headers : {
        'Authorization': `Bearer ${token}`,
       },
      });
  },
};
