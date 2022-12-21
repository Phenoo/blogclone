import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/author.jpeg'


const Aboutus = () => {
  return (
    <div className="aboutus">
      <section>
        <h4 className="headline center">
          about the author
        </h4>
        <div className='grid'>
          <div className="center">
            <img src={Img1} alt='about' />
          </div>
          <div>
            <p>
            Ukusare Faith is the creative director behind the 6-Pac Mind.
            An initiative that sprang from what she called her 5am spirit awake exercise, a ritual that involved both mind and body fitness.
            She realized what having the word of God in her spirit and on her mind can do for her every day. She began posting it on her twitter page with the hashtag mind fitness, 
            encouraging people on the benefit of focused thinking which is the same thing has meditation. She believes that the mind is a force to man,
            and the state of your mind can influence and propel you in the right or wrong direction, motivate you or keep you stagnant.
            She realized that motivational quotes only keep you going for a short period of time like a cup of coffee that wears off by mid-day then
            you need another cup, or like a corset for women that you put on to give you that illusion of a perfect shape then you take it off. 
            </p>
            <br />
            <p>
            Sadly, that’s how the minds of many works, they find themselves easily motivated and demotivated, always cycling between fear and courage,
            willing and unwilling. 
            </p>
            <br />
            <p>
            She came to understand that there is a constant state of mind one can have that keeps them constantly 
            feeling motivated, charged up, energized, irrespective of the situations and occurrences around them, 
            they always get the sense of I can do it and I will do it.  Which is a state of a mind that has been built consistently. 
            She believes that just the way your body can be built and trained to be fit, your mind also can be built and trained. 
            </p>
            <br />
            <button className="button">
              <Link to='/about'>
                read more
              </Link>
            </button>
          </div>
        </div>
      
      </section>
    </div>
  )
}

export default Aboutus