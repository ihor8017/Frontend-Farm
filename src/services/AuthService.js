import $api from '../http/index';
import {AxiosResponse} from 'axios';

export default class AuthService {
  async login(email, password) {
    return $api.put('/Auth/Login', {email, password});
  }

  async registration(email, password) {
    return $api.post('/registration', {email, password});
  }

  async resetPassword(email, password) {
    return $api.put('/reset', {email, password});
  }

  async logout(email, password) {
    return $api.post('/', {email, password});
  }
}
