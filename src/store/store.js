import { makeAutoObservable } from 'mobx';
import {AuthService} from '../services/AuthService';

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
        const response = await AuthService.login(dataUser).json();
        if (response.data){
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
        console.log(dataUser);
        const response = await AuthService.registration(dataUser).json();
        localStorage.setItem('token', response.data.accessToken);
        this.setAuth(true);
        this.setUser(dataUser);
      } catch (e) {
        console.log('error');
      }
    }

    async logout() {
      try {
        const response = await AuthService.logout();
        localStorage.removeItem('token');
        this.setAuth(true);
        this.setUser(null);
      } catch (e) {
        console.log('error');
      }
    }
}
