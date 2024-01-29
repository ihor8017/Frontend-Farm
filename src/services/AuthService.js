import {$api, API_URL} from '../http/index';


export const   AuthService = {
  login (data)  {
    return  fetch('http://sasha2235-001-site1.ftempurl.com/api/Auth/Login', {
      method: 'PUT',
      headers: {
        'Content-Type': 'text/json',
      },
      body: JSON.stringify(data),
    });
  },

  registration (data) {
    return fetch('http://sasha2235-001-site1.ftempurl.com/api/Auth/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
  
  emailConfirmation (token)  {
    return  fetch(`http://sasha2235-001-site1.ftempurl.com/api/Auth/ConfirmEmail`, {
      method: 'PUT',
      headers : {'Authorization': `Bearer ${token}`},
      });
  },
};
