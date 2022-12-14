import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import Dropdown from './DropDown'
import Logo from './Logo'

import {BsChevronDown} from 'react-icons/bs'

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
                <li>
                  <Dropdown
                    trigger={<button className='flex'>
                      <span className='span'>
                        Blogs
                      </span>
                      <span>
                        <BsChevronDown />
                      </span>
                    </button>}
                    menu={[
                      <Link to='well'>the well</Link>,
                      <Link to='podcast'> podcast</Link>,
                      <Link to='hiip'>hiip </Link>,
                      <Link to='training'>training</Link>
                    ]}
                  />
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