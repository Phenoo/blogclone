import React from 'react'


import Helmet from 'react-helmet'
import ContactHome from '../components/ContactHome'
import FormComponents from '../components/FormComponents'


const Contact = () => {
  return (
    <div className='contact-page'>
      <Helmet>
        <title>
          6thpacmind
        </title>
      </Helmet>
      <ContactHome />
    <section>
      <FormComponents />
    </section>
    </div>
  )
}

export default Contact