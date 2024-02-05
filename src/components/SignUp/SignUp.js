import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Store, setUserAuth, setUser } from '../../store/store';
import "./Auth.css";
import { AuthService } from '../../services/AuthService';
//import Input from '../Input/Input';
import RadioInput from '../Input/RadioInput';


function Registration() {

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 0,
  });
  const [formError, setFormError] = useState({
    name: 'Це поле не може бути пустим',
    surname: 'Це поле не може бути пустим',
    email: 'Це поле не може бути пустим',
    password: 'Це поле не може бути пустим',
    confirmPassword: 'Це поле не може бути пустим',
  })

  const radioInputs = [
    {
      id: "buyer",
      name: "role",
      type: "radio",
      label: "Покупець",
      role: 0,
     checked: true,
    },
    {
      id: "seller",
      name: "role",
      type: "radio",
      label: "Продавець",
      role: 1, 
    },
    {
      id: "farmer",
      name: "role",
      type: "radio",
      label: "Фермер",
      role: 2, 
    },
  ]

  const [role, setRole] = useState(0);
  
    const [email, setEmail] = useState('');
    const [dirtyEmail, setDirtyEmail] = useState(false);
    const [emailError, setEmailError] = useState('Це поле не може бути пустим');

    const [name, setName] = useState('');
    const [dirtyName, setDirtyName] = useState(false);
    const [nameError, setNameError] = useState('Це поле не може бути пустим');

    const [surname, setSurname] = useState('');
    const [dirtySurname, setDirtySurname] = useState(false);
    const [surnameError, setSurnameError] = useState('Це поле не може бути пустим');

    const [password, setPwd] = useState('');
    const [dirtyPwd, setDirtyPwd] = useState(false);
    const [pwdError, setPwdError] = useState('Це поле не може бути пустим');

    const [confirmPassword, setMatchPwd] = useState('');
    const [dirtyConfirmPassword, setDirtyConfirmPassword] = useState(false);
    const [matchError, setMatchError] = useState('Це поле не може бути пустим');

  const [registrationStatus, setRegistrationStatus] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [visible, setVisible] = useState(false);
  const[visiblePwd, setVisiblePwd] = useState(false);

  useEffect(()=>{
    if(emailError || nameError || surnameError || pwdError || matchError) {
      setValidForm(false)
    } else {
      setValidForm(true);
    }
  },[emailError, nameError, surnameError, pwdError, matchError])
 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validForm) {
      //Store.register({role, email, surname, name, password, confirmPassword});
      AuthService.registration({role, email, surname, name, password, confirmPassword})
      .then( (response) =>{
        if (response.ok){
          console.log('Email sent successfully!', response.status);
          setRegistrationStatus(true);
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
      console.log(Store);
      
    } 
  };

  const emailHandler= (e) => {
    setEmail(e.target.value);
    let regEmail =/^[a-zA-Z0-9_'+*/^&=?~{}\-](\.?[a-zA-Z0-9_'+*/^&=?~{}\-])*\@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(\:\d{1,3})?)|(((([a-zA-Z0-9][a-zA-Z0-9\-]+[a-zA-Z0-9])|([a-zA-Z0-9]{1,2}))[\.]{1})+([a-zA-Z]{2,6})))$/;
      if (!regEmail.test(String(e.target.value).toLowerCase()) ){
        setEmailError('Email not valid!');
        if (!e.target.value) {
          setEmailError('Це поле не може бути пустим');
        }
      } else {
        setEmailError('')
      }
  }

  const surnameHandler= (e) => {
    setSurname(e.target.value);
    let reg =/^[А-Яа-яa-zA-Z]{2,16}$/;
      if (!reg.test(String(e.target.value).toLowerCase()) ){
        setSurnameError('Last Name not valid!');
        if (!e.target.value) {
          setSurnameError('Це поле не може бути пустим');
        }
      } else {
        setSurnameError('')
      }
  }

  const nameHandler= (e) => {
    setName(e.target.value);
    let reg =/^[А-Яа-яa-zA-Z]{2,16}$/;
      if (!reg.test(String(e.target.value).toLowerCase()) ){
        setNameError('Name not valid!');
        if (!e.target.value) {
          setNameError('Це поле не може бути пустим');
        }
      } else {
        setNameError('')
      }
  }

  const passwordHandler= (e) => {
    setPwd(e.target.value);
    let reg =/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      if (!reg.test(e.target.value)){
        setPwdError('Password not valid!');
        if (!e.target.value) {
          setPwdError('Це поле не може бути пустим');
        }
      } else {
        setPwdError('')
      }
  }
  const confirmPasswordHandler= (e) => {
    setMatchPwd(e.target.value);
      if (e.target.value && (e.target.value !== password)){
        setMatchError('Password not match!');
        if (!e.target.value) {
          setMatchError('Це поле не може бути пустим');
        }
      } else {
        setMatchError('')
      }
  }

  const roleHandler = (e) => {
    setRole(Number(e.target.value));
    console.log('role', role);
  }

  const  handlerBlur = (e) =>{
    switch (e.target.name) {
      case 'email': 
      setDirtyEmail(true); break;
      case 'surname':
        setDirtySurname(true); break;
      case 'name':
        setDirtyName(true); break;
      case 'password':
        setDirtyPwd(true); break;
      case 'confirmPassword':
        setDirtyConfirmPassword(true);
        default: break;
    }
  }

  // useEffect(()=>{
  //   if (Store.isAuth){
  //     console.log('store.isAuth', Store.isAuth);
  //     setRegistrationStatus(true);
  //     navigate(from, { replace: true });
  //   }


  // },[registrationStatus]);

  // setUser.call(Store, {});
  // setUserAuth.call(Store, false);

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
            <NavLink className='link-btn' to='/login'>
              {' '}
							Увійдіть
            </NavLink>
          </span>
        </p>

        <form className='auth-form' onSubmit={handleSubmit}>
          <h3 className='form-title'>Створіть акаунт</h3>
          <div className='form-radio'>
            {radioInputs.map((element) => (
              <RadioInput {...element} 
              key ={element.id} 
              onChange={roleHandler}
              defaultChecked ={element.checked}
              />
            ))}
          </div>

          <div className='form-article'>
            <div
              className={!dirtyEmail? "form-field" :
              !emailError && email.length>1 ? "correct-field form-field":
              "form-field uncorrect-field"}
            >
              <input
                className='form-input-field'
                onChange={emailHandler}
                type='email'
                id='email'
                name='email'
                value={email}
                required
                onBlur={handlerBlur}
              />
              <label className='form-label' htmlFor='email'>
								e-mail<span>*</span>
              </label>
            </div>
            {(dirtyEmail && emailError ) && <p className='field-error'>
              <img src='/img/svg/Error.svg' alt="This field cam't be empty" />
              <span>{emailError}</span>
            </p>}
          </div>

          <div className='form-article'>
            <div className={!dirtySurname? "form-field" :
              !surnameError && surname.length>1 ? "correct-field form-field":
              "form-field uncorrect-field"}>
              <input
                className='form-input-field'
                name='surname'
                onChange={surnameHandler}
                id='lastName'
                value={surname}
                onBlur={handlerBlur}
                required
              />
              <label className='form-label' htmlFor='lastName'>
								Прізвище<span>*</span>
              </label>
            </div>
            {(dirtySurname && surnameError ) && <p className='field-error'>
              <img src='/img/svg/Error.svg' alt="This field cam't be empty" />
              <span>{surnameError}</span>
            </p>}
          </div>

          <div className='form-article'>
            <div className={!dirtyName? "form-field" :
              !nameError && name.length>1 ? "correct-field form-field":
              "form-field uncorrect-field"}>
              <input
                className='form-input-field'
                name='name'
                onChange={nameHandler}
                id='name'
                value={name}
                onBlur={handlerBlur}
                required
              />
              <label className='form-label' htmlFor='name'>
								Ім'я<span>*</span>
              </label>
            </div>
            {(dirtyName && nameError ) && <p className='field-error'>
              <img src='/img/svg/Error.svg' alt="This field cam't be empty" />
              <span>{nameError}</span>
            </p>}
          </div>
          <div className='form-article'>
            <div className={!dirtyPwd? "form-field" :
              !pwdError && password.length>1 ? "correct-field form-field":
              "form-field uncorrect-field"}>
              <input
                className='form-input-field'
                onChange={passwordHandler}
                type={visiblePwd? 'text' : 'password'}
                id='password'
                name='password'
                value={password}
                onBlur={handlerBlur}
                required
              />
              <label className='form-label' htmlFor='password'>
								Пароль<span>*</span>
              </label>
              <div className='show-password' type="button" onClick={()=>{setVisiblePwd(!visiblePwd)}}>
                    {!visiblePwd?  <img src='/img/svg/Icon _ Eye.svg' alt='show password'/>
                            : <img src='/img/svg/Icon _ Eye_Shown.svg' alt='hide password'/>}
              </div>
            </div>
            {(dirtyPwd && pwdError) && <p className='field-error'>
              <img src='/img/svg/Error.svg' alt="This field cam't be empty" />
              <span>{pwdError}</span>
            </p>}
            <p className='form-password-description'>
							Пароль має містити мінімум 8 символів (принаймні одна велика літера, одна мала літера,
							1 цифра)
            </p>
            
          </div>
          <div className='form-article '>
            <div className={!dirtyConfirmPassword? "form-field" :
              !matchError && confirmPassword.length>1 ? "correct-field form-field":
              "form-field uncorrect-field"}>
              <input
                className='form-input-field'
                onChange={confirmPasswordHandler}
                type={visible? 'text' : 'password'}
                id='confirmPassword'
                name='confirmPassword'
                value={confirmPassword}
                onBlur={handlerBlur}
                required
                              />
              <label className='form-label' htmlFor='confirmPassword'>
								Підтвердіть пароль<span>*</span>
              </label>
              <div className='show-password' type="button" onClick={()=>{setVisible(!visible)}}>
                    {!visible?  <img src='/img/svg/Icon _ Eye.svg' alt='show password'/>
                            : <img src='/img/svg/Icon _ Eye_Shown.svg' alt='hide password'/>}
              </div>
            </div>
            {(dirtyConfirmPassword && matchError ) && <p className='field-error'>
              <img src='/img/svg/Error.svg' alt="This field cam't be empty" />
              <span>{matchError}</span>
            </p>}
          </div>
          <button className='form-submit button' type='submit' disabled={!validForm}>
						Продовжити
          </button>
        </form>
      </div>
    </div>
  );
}
export default Registration;
