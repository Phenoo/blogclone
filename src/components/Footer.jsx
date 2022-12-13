import React from 'react'
import Logo from './Logo'

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
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
              <div className="foot">
                <h4 className="headline">
                  Categories
                </h4>
                <ul>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
              <div className="foot">
                <h4 className="headline">
                  set up
                </h4>
                <ul>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
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