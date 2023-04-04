import React, { useState } from 'react'
import { navLinks } from '../constants'
import { close, logoText, menu } from '../assets'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">

      {/* Brand Logo */}
      <img src={logoText} alt="hoobank" className='w-[124px] h-[32px]' />

      {/* Menu for Large screen */}
      <ul className='sm:flex hidden list-none justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Menu for Small screen */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* Hamburger menu icon */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* Nav Lists */}
        <div className={`${toggle ? "flex" : "hidden"} absolute top-20 right-0 mx-4 my-2 p-6 bg-black-gradient min-w-[140px] rounded-xl sidebar`}>
          <ul className='flex flex-col list-none justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar