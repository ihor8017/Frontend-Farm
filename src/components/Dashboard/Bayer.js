import React from 'react';
import { NavLink } from 'react-router-dom';

import UserPage from '../../pages/UserPage';

export default function Bayer ()  {
  return (
    <>
      <UserPage/>
      <h1>Bayer dashboard</h1>
      <br></br>
      <NavLink to="/main">Main</NavLink>
      <br></br>
      
      
    </>

  );
}
