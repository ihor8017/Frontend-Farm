import React, { useContext, useState } from 'react'
import { useAuth } from '../../hooks/AuthProvider'
import { NavLink } from 'react-router-dom'
import { Context } from '../..'

export function Login() {
	const [input, setInput] = useState({
		email: '',
		password: '',
	})
	const { store } = useContext(Context)
	//const auth = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault()
		if (input.email !== '' && input.password !== '') {
			store.login(input)
		}
	}
	const handleInput = (e) => {
		const { name, value } = e.target
		setInput((prev) => ({
			...prev,
			[name]: value,
		}))
	}

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

					<NavLink className='forgot-password' path='/forgot-password'>
						Забули пароль?
					</NavLink>

					<button className='form-submit' type='submit'>
						Увійти
					</button>
				</form>
				<p className='auth-to-other-page'>
					Ви ще не зареєстровані?
					<span>
						<NavLink path='/registration'> Sign up</NavLink>
					</span>
				</p>
			</div>
		</div>
	)
}
