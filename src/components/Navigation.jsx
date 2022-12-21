import React, { useState } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import Logo from './Logo'

const Navigation = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <nav id="nav">
        <section>
          <header>
            <Logo />
            <div className={`menulist ${navbar ? 'show' : ''}`}>
              <ul>
                <li  onClick={() => setNavbar(!navbar)}>
                  <NavLink to='/'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    home
                  </NavLink>
                </li>
                <li  onClick={() => setNavbar(!navbar)}>
                  <NavLink to='/about'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    about us
                  </NavLink>
                </li>
                <li  onClick={() => setNavbar(!navbar)}>
                  <NavLink to='/blogs'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    blogs
                  </NavLink>
                </li>
                <li  onClick={() => setNavbar(!navbar)}>
                  <NavLink to='/well'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    well
                  </NavLink>
                </li>
                <li  onClick={() => setNavbar(!navbar)}>
                  <NavLink to='/podcast'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    podcast
                  </NavLink>
                </li>
                <li  onClick={() => setNavbar(!navbar)}>
                  <NavLink to='/hiip'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    hiip 
                  </NavLink>
                </li>
                <li  onClick={() => setNavbar(!navbar)}>
                  <NavLink to='/training'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    trainer
                  </NavLink>
                </li>
              </ul>
            </div>
            <button className='button none'>
              <Link to='/contact'>
                talk to us
              </Link>
            </button>
            <button className='mobile' onClick={() => setNavbar(!navbar)}>
              {
                navbar ? <FaTimes /> : <FaBars />
              }
            </button>
          </header>
        </section>
    </nav>
  )
}

export default Navigation