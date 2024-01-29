import React, { useState, useEffect } from 'react';
import  useAuth  from '../../hooks/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Store, setUser, setUserAuth } from '../../store/store';
import{ AuthService} from '../../services/AuthService';


function Login() {

  const {auth, setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/main';

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.email !== '' && input.password !== '') {
      AuthService.login(input)
      .then((response)=>response.json())
      .then((data) => {
        localStorage.setItem('token', data?.token);
        const token = data?.token;
        //const roles = data?.role;
        const {email, password} = input;
        const roles = [201];
        setAuth({email, password, token, roles});
        console.log('roles[0]', roles[0]);
        console.log('auth', auth);
        navigate(from, { replace: true });
        //setInput({});
         switch(roles[0]){
        case 201: navigate( '/bayer');
          break;
        case 1: navigate('/seller');
          break;
        case 2: navigate('/farmer');
        break;
         default: navigate(from, { replace: true });;
      }
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
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className='auth-title'>Login</h2>
      <button type='button' className='auth-form-close'>
        <img src='/img/svg/Cross.svg' alt='Close auth' />
      </button>
      <div className='auth-form-container'>
        <form className='auth-form' onSubmit={handleSubmit}>
          <div className="auth-logo">
            <img src="/img/svg/Logo.svg" alt="" />
          </div>
          <h3 className='form-title'>Авторизація</h3>
          <article className='form-article'>
            <div className='form-field'>
              <input
                className='form-input-field'
                onChange={handleInput}
                type='email'
                id='email'
                name='email'
              />
              <label className='form-label' htmlFor='email'>
								e-mail
              </label>
            </div>
          </article>
          <article className='form-article'>
            <div className='form-field'>
              <input
                className='form-input-field'
                onChange={handleInput}
                type='password'
                id='password'
                name='password'
              />
              <label className='form-label' htmlFor='password'>
								Пароль
              </label>
            </div>
          </article>

          <NavLink className='forgot-password' to='/forgot-password'>
						Забули пароль?
          </NavLink>

          <button className='form-submit' type='submit'>
						Увійти
          </button>
        </form>
        <p className='auth-to-other-page'>
					Ви ще не зареєстровані?
          <span>
            <NavLink to='/registration'> Sign up</NavLink>
          </span>
          <NavLink className='forgot-password' to='/bayer'>
						bayer
          </NavLink>
          <NavLink className='forgot-password' to='/farmer'>
						farmer
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
