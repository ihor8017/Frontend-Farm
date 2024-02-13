import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout/Logout';
import UserPage from '../../pages/UserPage';

export default function Seller ()  {
  return (
    <>
      <h1>Seller dashboard</h1>
      <br></br>
      <NavLink to="/main">Main</NavLink>
      <br></br>
      <UserPage/>
      <Logout/>
    </>

  );
}
