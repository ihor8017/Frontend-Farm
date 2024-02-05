import{ AuthService} from '../services/AuthService';
import {$api, API_URL} from '../http/index';

export function setUserAuth(bool){
  this.isAuth = bool;
}
export function setUser(user){
  this.user = user;
}

export const Store = {
  user : {},
  isAuth: false,

  login(dataUser) {
    AuthService.login(dataUser)
      .then((response)=>response.json())
      .then((data) => {
        localStorage.setItem('token', data?.token);
        const token = data?.token;
       // const roles = data?.role;
        setUserAuth.call(Store,true);
        localStorage.setItem('isAuthor', true);
        setUser.call(Store,dataUser);
        setUser.call(Store,Object.assign(this.user,dataUser, {token: token, roles: 0}));
      })
      .catch((error) => {
        if (!error?.response) {
          console.log('No Server Response');
        } else if (error.response?.status === 400) {
          console.log('Missing Username or Password');
        } else if (error.response?.status === 401) {
          console.log('Unauthorized');
        } else {
          console.log('Login failed');
        }

      });
  },

  register (dataUser) {
    AuthService.registration(dataUser)
      .then( (response) =>{
        if (response.ok){
          console.log('Email sent successfully!', response.status);
          setUserAuth.call(Store,true);
        }
      })
      .catch((error) => {
        if (!error?.response) {
          console.log('No Server Response');
        } else if (error.response?.status === 409) {
          console.log('Email Taken');
        } else {
          console.log('Registration Failed');
        }

      });
  },

  emailConfirm (token) {
    AuthService.emailConfirmation(token)
      .then( (response) =>{
        if (response.ok){
          console.log('Email verified successfully!', response?.status);
          setUserAuth.call(Store,true);
        }
      })
      .catch( (error)=> {
        console.log('Failed to verify email:');
      });
  },

  logOut() {
    localStorage.clear();
    setUser.call(Store,{});
  },
};
