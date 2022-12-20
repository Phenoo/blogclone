import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
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
                    training
                  </NavLink>
                </li>
                <li  onClick={() => setNavbar(!navbar)}>
                  <NavLink to='/contact'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    contact us
                  </NavLink>
                </li>
              </ul>
            </div>
            <button className='button none'>
              get started
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