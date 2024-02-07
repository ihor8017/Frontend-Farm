import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, NavLink} from "react-router-dom"

export default function ResetPassword () {
    const navigate = useNavigate();
    const params = useParams();

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
    const [err, setErr] = useState();

    useEffect( (e) => {
      if (pwdError || matchError) {
        setValidForm(false);
      } else {
        setValidForm(true)
      }
      
    },[pwdError, matchError])


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
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (params.token) {
        
            try {
              const response = await axios.put('http://sasha2235-001-site1.ftempurl.com/api/Auth/ResetPassword',
              JSON.stringify({password, confirmPassword}), 
              {
                headers: {
                  'Content-Type': 'application/json',
                },
                
              });
              setRegistrationStatus(true);
            } catch (error) {
              console.log(error?.response.data.error)
              setErr(error?.response.data.error);
            }
        
     }
    } 

    const  handlerBlur = (e) =>{
      switch (e.target.name) {
        case 'password':
          setDirtyPwd(true); break;
        case 'confirmPassword':
          setDirtyConfirmPassword(true);
          default: break;
      }
    }
    

    return (
      registrationStatus ?      
          (<div >
            <img  alt="success_img"  />
            <h1>Email verified successfully</h1>
            <NavLink to="/login">
              <button >Login</button>
            </NavLink>
          </div>)
           :
        <div>
            <form onSubmit={handleSubmit}>
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
            {err && <p className="field-error">{err}</p>}
          </div>
            <button className='form-submit button' type='submit' disabled={!validForm}>
						Продовжити
          </button>   
            </form>

        </div>)
    
}