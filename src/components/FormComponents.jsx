import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

const FormComponents = () => {
  return (
    <div className='form-container'>
      <div className="grid">
        <div>
          <h4 className="headline">
            get in touch
          </h4>
          <p>
            6pacmind specialize in providing clarity for owners so that the business can grow.
          </p>
          <div className="flex">
            <span>
              <AiOutlineMail />
            </span>
            <span>
              <a href="mailto:goldsycamore@gmail.com">
                6pacmind@gmail.com
              </a>
            </span>
          </div>
          <div className="flex">
            <span>
              <AiOutlinePhone />
            </span>
            <span>
            <p>
                +234 801 2345 678
              </p>
            </span>
          </div>
        </div>
        <div>
          <h4 className="headline">
            send us a message
          </h4>
          <p>
            We are here to help, complete the form below and we will get back to you as soon as possible.
          </p>
          <form>
            <div className="form-input">
              <label>
                Name
              </label>
              <input type="text" name="name" placeholder="Jane Doe" />
            </div>
            <div className="form-input">
              <label>
                Email Address
              </label>
              <input type="text" name="email" placeholder="janedoe@mail.com" />
            </div>
            <div className="form-input">
              <label>
                Business Name
              </label>
              <input type="text" name="name" placeholder="Gold Sycamore" />
            </div>
            <div className="form-input">
              <label>How Can We Help</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Write your message here...'></textarea>
            </div>
            <button type="submit" className="button">  
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormComponents