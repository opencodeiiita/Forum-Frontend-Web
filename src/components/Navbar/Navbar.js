import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-400 p-6">
      <div className="flex items-center w-[2%] mr-6">
        <img src={logo} alt="Logo" className="md:scale-125 scale-[3.9]" />
      </div>
      <div className="nav-links w-[30%] flex hidden lg:flex lg:items-center justify-between mr-3">
        <a href="#home" className="block text-xl mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
          Home
        </a>
        <a href="#profile" className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
          Profile
        </a>
        <a href="#community" className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
          Community
        </a>
        <a href="#notification" className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-gray-400">
          Notification
        </a>
      </div>
    </nav>
  )
}

