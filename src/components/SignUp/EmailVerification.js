import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { AuthService } from '../../services/AuthService';


const  EmailVerification =()  => {
  const param = useParams();
  const [validUrl, setValidUrl] = useState(false);
  const [error, setError] = useState('');
 const fetchToken = async () => {
  if (param.token) {
   
    try {
      const response = await AuthService.emailConfirmation(param.token);
      if (!response.ok) {
        setError('Failed to confirm, response status from server:', response.status);
      }
      setValidUrl(true);

    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }
 }
  
  useEffect(()=>{
      fetchToken();

  },[param.token]);


  return (
    <>
    <h1>Hello User</h1>
      {validUrl ? (
        <div >
          <img  alt="success_img"  />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button >Login</button>
          </Link>
        </div>
      ) : (
        <>
                <h1>404 Not Found</h1>
                {error && <p className='field-error'>{error}</p>}
        </>

      )}
    </>
    
    
  );// or display a loading spinner
}

export default EmailVerification;
