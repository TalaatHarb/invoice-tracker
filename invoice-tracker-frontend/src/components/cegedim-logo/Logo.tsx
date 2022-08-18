import React from 'react'
import logo from '../../assets/Logo.jpg'

const Logo = () => {
  return (
    <a href="#" className="flex items-center">
        <img src={logo} className="h-6 sm:h-8" alt="Cegedim"/>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-logo-text-color">Cegedim</span>
    </a>

  )
}

export default Logo;