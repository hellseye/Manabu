import React from 'react'
import './header.css'
import manabu_logo from '../assets/img/unnamed.png'
import pro_pic from '../assets/img/pro_pic.png'
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = useAuth();

  return (
    <div className='nav'>
      <img src={manabu_logo} alt="" className='Logo' />

      <div className='search-box'>
        <input type="text" placeholder='Search' className='Search' />
        <button className='button'><span><ion-icon name="search-outline"></ion-icon></span></button>
      </div>

      <ul>
        <li><Link to={"/"}>Decks</Link></li>
        <li><Link to={"/letters"}>Letters</Link></li>
      </ul>

      <div className='header-right'>
        <span className='header-greeting'>Hi, {user?.name?.split(" ")[0]} 👋</span>
        <img src={pro_pic} alt="profile" className='profile' />
        <button className='logout-btn' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Header