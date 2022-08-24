import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.jpg'

const Logo = () => {
  return (
    <Link to="/home" className="flex items-center">
        <img src={logo} className="h-6 sm:h-8" alt="Cegedim"/>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-logo-text-color">Cegedim</span>
    </Link>

  )
}

export default Logo;