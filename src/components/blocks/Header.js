import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout/Logout';
import "./header.css";

export default function Header() {
  return (
    <div className='header'>
        <NavLink className='header__logo'>
        <img src="/img/svg/Logo.svg" alt="logo" />
            </NavLink>
        <ul className='header-navigation'>
            <li className='header-navigation__item icon-link'>
                <button type="button" className='button-icon'>
                    <span className='visually-hidden'>Notice</span>           
                </button>
            </li>
            <li className='header-navigation__item icon-link'>
                <button type="button" className='button-icon button-icon--notice'>
                    
                    <span className='visually-hidden'>Profile</span>
                </button>
            </li>
            <li className='header-navigation__item icon-link'>
                <Logout/>
            </li>
        </ul>
      
    </div>
  )
}
