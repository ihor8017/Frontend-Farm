import axios from "axios";
import React, {useState} from "react";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [validReset, setValidReset] = useState(false);
    const [err, setErr] = useState();
    const  handleSubmit  = async (e) => {
        e.preventDefault();
        if (email !== "") {
            try {
                const response = await axios.put('http://sasha2235-001-site1.ftempurl.com/api/Auth/ForgotPassword',JSON.stringify({email}),
                {
                  headers: {
                    'Content-Type': 'text/json',
                  },
                  
                } );
                setValidReset(true);
                console.log('validReset', response);
                      } catch (error) {
              console.log(error?.response.data.error)
              setErr(error?.response.data.error);
            }
           
        }
    };

    const handleInput = (e) => {
       setEmail(e.target.value);
    }

    return (
      validReset? <div color="red"> Check your email</div> :
        <div>
        <h2>Зміна паролю</h2>
        <h3 className='form-title'>Забули пароль? </h3>
        <form onSubmit={handleSubmit}>
        <div className='form-article'>
            <div className='form-field'>
              <input
                className='form-input-field'
                onChange={handleInput}
                type='email'
                id='email'
                name='email'
                value={email}
              />
              <label className='form-label' htmlFor='email'>
								e-mail
              </label>
            </div>
            {err && <p className="field-error">{err}</p>}
          </div>
          <button className='form-submit' type='submit'>
          Змінити пароль
          </button>
        </form>
        <p>Вже маєте верифікацію? <NavLink to="/login">Введіть код</NavLink></p>
        </div>
    );
}