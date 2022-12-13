import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Navigation = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav id="nav">
        <section>
          <header>
            <Logo />
            <div className={`menulist ${navbar ? 'show' : ''}`}>
              <ul onClick={() => setNavbar(!navbar)}>
                <li>
                  <NavLink to='/'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    about us
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/blogs'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    blogs
                  </NavLink>
                </li>
                <li>
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
          </header>
        </section>
    </nav>
  )
}

export default Navigation