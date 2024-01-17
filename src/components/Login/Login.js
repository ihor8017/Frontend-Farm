import React, { useContext, useState } from 'react';
import { useAuth } from '../../hooks/AuthProvider';
import { Link } from 'react-router-dom';
import './login.css';
import { Context } from '../..';

export function Login() {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const {store} = useContext(Context);
  //const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.email !== '' && input.password !== '') {
      store.login(input);
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
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">e-mail</label>
        <input onChange={handleInput} type="email" placeholder="e-mail" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input onChange={handleInput} type="password" placeholder="Пароль" id="password" name="password" />
        <button type="submit">Увійти</button>
      </form>
      <Link className="link-btn" path='/signup'>Ви ще не зареєстровані?</Link>
    </div>
  );
}
