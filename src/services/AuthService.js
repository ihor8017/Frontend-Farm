import {$api, API_URL} from '../http/index';


export default class AuthService {
  async login (data) {
    return $api.put('/Auth/Login', data);
  }

  async registration(data) {
    return $api.post('/Auth/Register',
      JSON.stringify({ data }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      },
    );
  }

  //   function resetPassword(data) {
  //     return $api.post('/Auth/Reset', data);
  //   }

//   function logout() {
//     return $api.put('/logout');
//   }
}
