import { NavLink } from 'react-router-dom'
import s from './Registration.module.css'

const Registration = () => {
  function handleShowPassword(e){
    // e.target
  }
	return (
		<div>
			<p>
				Уже маєте обліковий запис?
				<NavLink to='/authorization'>Увійдіть</NavLink>
			</p>
			<h1>Створіть акаунт</h1>
			<form action='submit'>
				<div>
					<div>
						<input type='radio' id='buyer' name='role' value='buyer' checked />
						<label for='buyer'>Покупець</label>
					{/* </div>
					<div> */}
						<input type='radio' id='seller' name='role' value='seller' />
						<label for='seller'>Продавець</label>
					{/* </div>
					<div> */}
						<input type='radio' id='farmer' name='role' value='farmer' />
						<label for='farmer'>Фермер</label>
					</div>
				</div>

        <div>
          <div><input type="email" placeholder='e-mail'/></div>
          <div><input type="text" placeholder='Прізвище'/></div>
          <div><input type="text" placeholder={'Ім\'я'} /></div>
          <div><input type="password" placeholder='Пароль'/><button type='button' onClick={()=>handleShowPassword()}></button></div>
          <div><input type="password" placeholder='Підтвердіть пароль'/></div>
        </div>
        
        <button type='submit'>Продовжити</button>
			</form>
		</div>
	)
}

export default Registration
