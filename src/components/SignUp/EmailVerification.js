import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import { Store, setUserAuth } from '../../store/store';


function EmailVerification() {
  const navigate = useNavigate();

  const param = useParams();
  console.log('param', param.token);
  const [validUrl, setValidUrl] = useState('');

  if (param.token) {
    Store.emailConfirm(param.token);
  }
  useEffect(()=>{
    if (Store.isAuth){
      console.log('store.isAuth', Store.isAuth);
      setValidUrl(true);
    }

  },[Store.isAuth]);

  setUserAuth.call(Store, false);
  // useEffect(() => {

  //   // console.log('token', token);

  //   if (token) {

  //     store.emailConfirm(token);
  //     navigate('/login');

  //     } //else {
  //   //   console.error('Email verification token not found!');
  //   //  // navigate('/verification-error');
  //   // }
  // }, [ location.search]);

  return (
    <h1>Hello User
      {validUrl ? (
        <div >
          <img  alt="success_img"  />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button >Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </h1>
  );// or display a loading spinner
}

export default EmailVerification;
