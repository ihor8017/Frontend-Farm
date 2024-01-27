import React, { useEffect, useContext, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

function EmailVerification() {
  const navigate = useNavigate();
  const {store} = useContext(Context);
  const param = useParams();
  console.log('param', param);
  const [validUrl, setValidUrl] = useState();

  if (param.token) {
    store.emailConfirm(param.token);
  }
  useEffect(()=>{
    if (store.isAuth){
      console.log('store.isAuth', store.isAuth);
      setValidUrl(true);
    }

  },[store.isAuth]);

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
      {/* {validUrl ? (
        <div >
          <img  alt="success_img"  />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button >Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )} */}
    </h1>
  );// or display a loading spinner
}

export default observer(EmailVerification);

