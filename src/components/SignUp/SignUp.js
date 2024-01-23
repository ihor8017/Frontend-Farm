import React, { useState, useContext, useEffect } from 'react'
import { useRegistr } from '../../hooks/registrationProvider'
import { NavLink } from 'react-router-dom'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import './Auth.css'

function Registration() {
	const { store } = useContext(Context)

	const [input, setInput] = useState({
		name: '',
		surname: '',
		email: '',
		password: '',
		confirmPassword: '',
		role: 0,
	})
	const [registrationStatus, setRegistrationStatus] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (
			input.email !== '' &&
			input.password !== '' &&
			input.surname !== '' &&
			input.confirmPassword !== '' &&
			input.name !== ''
		) {
			store.register(input)
			console.log(store)
		}
	}

	const handleInput = (e) => {
		const { name, value } = e.target
		setInput((prev) => ({
			...prev,
			[name]: value,
		}))
	}
	useEffect(() => {
		if (store.isAuth) {
			console.log('store.isAuth', store.isAuth)
			setRegistrationStatus(true)
		}
	}, [store.isAuth])

	return registrationStatus ? (
		<div>
			<h2 className='auth-title'>Sign up</h2>
			<button type='button' className='auth-form-close'>
				<img src='/img/svg/Cross.svg' alt='Close auth' />
			</button>
			<section className='registration-successful'>
				<div className='successful-conteiner'>
					<div className='succesfull-img'>
						<img src='/img/svg/RegistrationSuccess.svg' alt='Registration successfull' />
					</div>
					<p className='successfull-title'>Акаунт створено</p>
					<p className='successful-subtitle'>
						На вказаний Вами e-mail відправлено лист. Перейдіть буддь-ласка за посиланням для
						підтвердження акаунту.
					</p>
					<button className='successful-link'>
						<img src='/img/svg/GmailSolid.svg' alt='Gmail' />
						<span>Перейти в пошту</span>
					</button>
				</div>
			</section>
		</div>
	) : (
		<div>
			<h2 className='auth-title'>Sign up</h2>
			<button type='button' className='auth-form-close'>
				<img src='/img/svg/Cross.svg' alt='Close auth' />
			</button>
			<div className='auth-form-container'>
				<p className='auth-to-other-page'>
					Уже маєте обліковий запис?
					<span>
						<NavLink className='link-btn' path='/login'>
							{' '}
							Увійдіть
						</NavLink>
					</span>
				</p>

				<form className='auth-form' onSubmit={handleSubmit}>
					<h3 className='form-title'>Створіть акаунт</h3>
					<div className='form-radio'>
						<div className='radio-item'>
							<input
								className='radio-button'
								type='radio'
								id='buyer'
								name='role'
								value='0'
								defaultChecked
							/>
							<label className='radio-ladel' htmlFor='buyer'>
								Покупець
							</label>
						</div>
						<div className='radio-item'>
							<input className='radio-button' type='radio' id='seller' name='role' value='1' />
							<label className='radio-ladel' htmlFor='seller'>
								Продавець
							</label>
						</div>
						<div className='radio-item'>
							<input className='radio-button' type='radio' id='farmer' name='role' value='2' />
							<label className='radio-ladel' htmlFor='farmer'>
								Фермер
							</label>
						</div>
					</div>

					<article className='form-article'>
						<div
							className='form-field 
            correct-field'
						>
							<input
								className='form-input-field'
								onChange={handleInput}
								type='email'
								id='email'
								name='email'
								required
							/>
							<label className='form-label' htmlFor='email'>
								e-mail<span>*</span>
							</label>
						</div>
						<p className='field-error'>
							<img src='/img/svg/Error.svg' alt="This field cam't be empty" />
							<span>Це поле не може бути пустим</span>
						</p>
					</article>

					<article className='form-article'>
						<div className='form-field uncorrect-field'>
							<input
								className='form-input-field'
								name='surname'
								onChange={handleInput}
								id='lastName'
								required
							/>
							<label className='form-label' htmlFor='lastName'>
								Прізвище<span>*</span>
							</label>
						</div>
						<p className='field-error'>
							<img src='/img/svg/Error.svg' alt="This field cam't be empty" />
							<span>Це поле не може бути пустим</span>
						</p>
					</article>
					<article className='form-article'>
						<div className='form-field'>
							<input
								className='form-input-field'
								name='name'
								onChange={handleInput}
								id='name'
								required
							/>
							<label className='form-label' htmlFor='name'>
								Ім'я<span>*</span>
							</label>
						</div>
						<p className='field-error'>
							<img src='/img/svg/Error.svg' alt="This field cam't be empty" />
							<span>Це поле не може бути пустим</span>
						</p>
					</article>
					<article className='form-article'>
						<div className='form-field uncorrect-field'>
							<input
								className='form-input-field'
								onChange={handleInput}
								type='password'
								id='password'
								name='password'
								required
							/>
							<label className='form-label' htmlFor='password'>
								Пароль<span>*</span>
							</label>
						</div>
						<p className='field-error'>
							<img src='/img/svg/Error.svg' alt="This field cam't be empty" />
							<span>Це поле не може бути пустим</span>
						</p>
						<p className='form-password-description'>
							Пароль має містити мінімум 8 символів (принаймні одна велика літера, одна мала літера,
							1 цифра)
						</p>
					</article>
					<article className='form-article '>
						<div className='form-field uncorrect-field'>
							<input
								className='form-input-field'
								onChange={handleInput}
								type='password'
								id='confirmPassword'
								name='confirmPassword'
								required
							/>
							<label className='form-label' htmlFor='confirmPassword'>
								Підтвердіть пароль<span>*</span>
							</label>
						</div>
						<p className='field-error'>
							<img src='/img/svg/Error.svg' alt="This field cam't be empty" />
							<span>Це поле не може бути пустим</span>
						</p>
					</article>
					<button className='form-submit' type='submit'>
						Продовжити
					</button>
				</form>
			</div>
		</div>
	)
}
export default observer(Registration)
