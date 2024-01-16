import React, { useState } from 'react';
import { useAuth } from '../../hooks/AuthProvider';
import { Link } from 'react-router-dom';

export function Register() {
  const [input, setInput] = useState({
    'name': '',
    'surname': '',
    'email': '',
    'password': '',
    'confirmPassword': '',
    'role': 0,
  });

  const regist = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.email !== '' && input.password !== '' && input.surname !== '' && input.confirmPassword !== '' && input.name !== '') {
      regist.loginAction(input);
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
      <h2>Sign up</h2>
      <p>Уже маєте обліковий запис?</p>
      <Link className="link-btn" path='/login'>Увійдіть</Link>

      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="buyer">Покупець</label>
        <input type="radio" id="buyer" name="role" value="0" checked />
        <label htmlFor="seller">Продавець</label>
        <input type="radio" id="seller" name="role" value="1" />
        <label htmlFor="farmer">Фермер</label>
        <input type="radio" id="farmer" name="role" value="2" />


        <label htmlFor="email">email</label>
        <input  onChange={handleInput} type="email" placeholder="youremail@gmail.com" id="email" name="e-mail" />

        <label htmlFor="lastName">Full name</label>
        <input  name="lastName" onChange={handleInput} id="lastName" placeholder="Прізвище" />
        <label htmlFor="name">Full name</label>
        <input  name="name" onChange={handleInput} id="name" placeholder="Ім’я" />

        <label htmlFor="password">password</label>
        <input onChange={handleInput} type="password" placeholder="Пароль" id="password" name="password" />
        <p>
         Пароль має містити мінімум 8 символів (принаймні одна велика літера, одна мала літера, 1 цифра)
        </p>
        <label htmlFor="confirmPassword">password</label>
        <input onChange={handleInput} type="password" placeholder="Підтвердіть пароль" id="confirmPassword" name="confirmPassword" />
        <button type="submit">Продовжити</button>
      </form>
    </div>
  );
}
