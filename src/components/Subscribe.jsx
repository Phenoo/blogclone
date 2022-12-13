import React from 'react'
import Img1 from '../assets/item2.jpeg'


const Subscribe = () => {
  return (
    <div className="subscribe">
      <section>
        <div className="grid">
          <div className="text">
            <h4 className="headline">
              get the best news update to you
            </h4>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis odio quisquam corrupti nam molestias expedita magnam error rem in sapiente.
            </p>
            <br />
            <div className="form-input flex">
              <input type="email"  placeholder='Enter Your Email Address'/>
              <button className="btn">subscribe</button>
            </div>
          </div>
          <div className="image">
            <img src={Img1} alt="subscribe" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Subscribe