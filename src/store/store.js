import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import $api, {API_URL} from '../http/index';
import AuthService from '../services/AuthService';

//const auth = new AuthService();
console.log($api);
export default class Store {
    user = {};

    isAuth = false;

    constructor() {
      makeAutoObservable(this);
    }

    setAuth(bool) {
      this.isAuth = bool;
    }

    setUser(user) {
      this.user =user;
    }

    async login(dataUser) {
      try {
        const {email, password} = {dataUser};
        const response = await AuthService.login(email, password);
        localStorage.setItem('token', response.data.token);
        this.setAuth(true);
        this.setUser(dataUser);
      } catch (e) {
        console.log('error');
      }

    }

    async register(dataUser) {
      try {
        const response = await AuthService.register(dataUser);
        localStorage.setItem('token', response.data.accessToken);
        this.setAuth(true);
        this.setUser(dataUser);
      } catch (e) {
        console.log('error');
      }
    }

    async logout(dataUser) {
      try {
        const response = await AuthService.logout();
        localStorage.removeItem('token');
        this.setAuth(true);
        this.setUser(dataUser);
      } catch (e) {
        console.log('error');
      }
    }
}
