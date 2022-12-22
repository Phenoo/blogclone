import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <section>
          <div className="footer-container">
            <div className="fourgrid">
            <div className="foot">
              <Logo />
              <p>
                6pacmind is a whole mind fitness site dedicated to building and strengthening the core of your inner man.
              </p>
            </div>
              <div className="foot">
                <h4 className="headline">
                  links
                </h4>
                <ul>
                  <li>
                    <Link to='/about'>
                      about us
                    </Link>
                  </li>
                  <li>
                    <Link to='/blogs'>
                      blogs
                    </Link>
                  </li>
                  <li>
                    <Link to='/well'>
                      well
                    </Link>
                  </li>                  
                  <li>
                    <Link to='/podcast'>
                      podcast
                    </Link>
                  </li>
                  <li>
                    <Link to='/hiip'>
                      hiip
                    </Link>
                  </li>
                  <li>
                    <Link to='/trainer'>
                      trainer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="foot">
                <h4 className="headline">
                  policy
                </h4>
                <ul>
                  <li>Privacy Polcy</li>
                  <li>Terms and conditions </li>
                  <li>terms of use</li>
                </ul>
              </div>
              <div className="foot">
                <h4 className="headline">
                  contact us
                </h4>
                <ul className='social'>
                  <li>
                    <a href="#a">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#a">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#a">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#a">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className='copy'>
              &copy; copyright 2022 6th pac limited. all rights reserved.
          </p>
        </section>
      </div>
    </footer>
  )
}

export default Footer