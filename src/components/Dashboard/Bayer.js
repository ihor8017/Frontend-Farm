import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout/Logout';

export default function Bayer ()  {
  return (
    <>
      <h1>Bayer dashboard</h1>
      <br></br>
      <NavLink to="/main">Main</NavLink>
      <br></br>
      <Logout/>
    </>

  );
}
