import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.jpg'

const Logo = () => {
  return (
    <Link to="/page1" className="flex items-center">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-logo-text-color">Cegedim</span>
    </Link>

  )
}

export default Logo;