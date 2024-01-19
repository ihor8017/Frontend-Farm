import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
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
        console.log(dataUser);
        const response = await $api.put('/Auth/Login',
          dataUser,
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          },
        );
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
        await  $api.post('/Auth/Register',
          JSON.stringify(dataUser),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          },
        );
        this.setAuth(true);
        this.setUser(dataUser);
      } catch (e) {
        console.log('error');
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
