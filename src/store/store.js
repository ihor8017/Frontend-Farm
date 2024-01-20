import { makeAutoObservable } from 'mobx';
import{ AuthService} from '../services/AuthService';
import {$api, API_URL} from '../http/index';

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
        const response = await AuthService.login(dataUser);
        if (response.ok){
          localStorage.setItem('token', response.data.token);
          this.setAuth(true);
          this.setUser(dataUser);
        }
      } catch (e) {
        console.log('error');
      }

    }

    async register(dataUser) {
      try {
        const response = await AuthService.registration(dataUser);
        console.log('Email sent successfully!', response.status);
        this.setAuth(true);
      } catch (e) {
        console.log('error');
      }
    }

    async emailConfirm(token) {
      try {
        const response = await AuthService.emailConfirm(token);
        console.log('emailConfirm', response.status);
        this.setAuth(true);
      } catch (e) {
        console.e('Failed to verify email:', e);
      }
    }

    async logout() {
      try {
        await logout();
        localStorage.removeItem('token');
        this.setAuth(true);
        this.setUser(null);
      } catch (e) {
        console.log('error');
      }
    }
}
