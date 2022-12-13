import React from 'react'
import Helmet from 'react-helmet'
import AboutHome from '../components/About/AboutHome'
import AboutStory from '../components/About/AboutStory'

const About = () => {
  return (
    <div className='about-page'>
      <Helmet>
        <title>
        6th Pac | About
        </title>
      </Helmet>
      <AboutHome />
      <AboutStory />
    </div>
  )
}

export default About