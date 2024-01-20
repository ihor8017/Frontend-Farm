import { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Context } from '../..';
import { observe } from 'mobx';

function EmailVerificationSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const {store} = useContext(Context);

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');


    if (token) {
      const verifyEmail = async () => {
        store.emailConfirm(token);
        //navigate('/verification-success');
      };
    } else {
      console.error('Email verification token not found!');
      //history.push('/verification-error');
    }
  }, [ location.search]);

  return null; // or display a loading spinner
}

export default observe(EmailVerificationSuccess);
