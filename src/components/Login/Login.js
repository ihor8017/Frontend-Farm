import React, { useState } from 'react';
import  useAuth  from '../../hooks/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
  const [err, setErr]= useState('');
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.email !== '' && input.password !== '') {
      AuthService.loginAxios(input)
      .then((response)=>{
        if (!response.ok) {
          setErr(response.data.errore);
        }
        })
      .then((data) => {
        //localStorage.setItem('token', data?.token);
        const token = data?.token;
        //const roles = data?.role;
        const {email, password} = input;
        const roles = ['0'];
        setAuth({email, password, token, roles});
        localStorage.setItem('user', JSON.stringify({email, password, token, roles}));
        setInput({});
        navigate(from, { replace: true });
        console.log('authorized', auth);
        if (auth) {
           switch(roles[0]){
            case '0': navigate( '/bayer');
              break;
            case '1': navigate('/seller');
              break;
            case '2': navigate('/farmer');
            break;
            default: navigate(from, { replace: true });;
        }
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
          console.log('errr', error.response.data.error);
          setErr(error.response.data.error);
          e.target.reset();
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
          
          <div className='form-article'>
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
          </div>
          <div className='form-article'>
            <div className='form-field'>
              <input
                className='form-input-field'
                onChange={handleInput}
                type={visible? 'text' : 'password'}
                id='password'
                name='password'
              />
              <label className='form-label' htmlFor='password'>
								Пароль
              </label>
              <div className='show-password' type="button" onClick={()=>{setVisible(!visible)}}>
                    {!visible?  <img src='/img/svg/Icon _ Eye.svg' alt='show password'/>
                            : <img src='/img/svg/Icon _ Eye_Shown.svg' alt='hide password'/>}
              </div>
            </div>
          </div>
          {err && <div className='field-error'>{err}</div>}

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
        </p>
              </div>
    </div>
  );
}

export default Login;
