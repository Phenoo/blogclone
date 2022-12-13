import React from 'react'

import Img1 from '../assets/THE WELL.png'
import Img2 from '../assets/HIIP.png'
import Img3 from '../assets/PODCAST.png'

const Tour = () => {
  return (
        <div className="tour">
          <h2>
            tour guide
          </h2>
          <br /> 
          <article>
            <h4>
              Well
            </h4>
            <div className="grid">
              <div>
                <img src={Img1} alt="" />
              </div>
              <div>
                <p>
                You know how sometimes you are tired, that you cannot do any serious exercise but you need to stretch so you opt for some yoga, 
                even though some will argue that yoga is a serious complex exercise, for the sake of this, we agree. So that’s what the well signifies, most times we have heard complex words, and just need something light to reach us, that’s the well. It was coined for the story of the Samaritan woman at the well when she met Jesus, she was not looking for anything complex and Jesus did not offer her that either, he just simply spoke to her heart in a way she felt safe, 
                relaxed, and heard. That is what the well is, come to have a stretch of the mind
                </p>
              </div>
            </div>
          </article>
          <article>
            <h4>
              HIIP
            </h4>
            <div className="grid">
              <div>
                <img src={Img2} alt="" />
              </div>
              <div>
              <p>
                Of course, you know you cannot develop any muscles without undergoing some serious rigorous exercise. 
                So definitely if our goal is a 6-pac fit mind then we need to do some High-Intensity training, in this case, 
                High-intensity prayer. Why prayer? You ask, because it is the only way to break strongholds. 
                for the weapon of our warfare are not carnal but mighty through God in pulling than strongholds 2cor 10:4,
                and to arrive at the destination of a fit mind, some strongholds need to be pulled down, those wrong beliefs, 
                wrong way of thinking, ideologies, need to first cast way. And there is no strong thing that does not require a stronger thing to break who is powerful enough to enter the house of a strong man and plunder his goods? Only someone even stronger, someone who could tie him up and then plunder his (Mark 3:27). 
                <br />
                That house is referring to your mind, our minds. There is some reasoning that motivational talks cannot get rid of,
                you cannot convince it away, it needs to be cast down, and destroyed, and what is stronger than the word of God, 
                and the power of our tongue? So come on let’s get training
                </p>
              </div>
            </div>
          </article>
          <div>
            <h4>
              Blog
            </h4>
            <p>
            This is the general workspace of the site; it holds the different posts for the site
            </p>
          </div>
          <article>
            <h4>
              Podcast
            </h4>
            <div className="grid">
              <div>
                <p>
                  6pac mind podcast is the official podcast of the 6pac mind. <br />
                  No excuses, gym on a go, plug and listen.
                </p>
              </div>
              <div>
                <img src={Img3} alt="podcast" />
              </div>
            </div>
          </article>
          <div>
            <h4>
              Training
            </h4>
            <p>
            Of course, what is a gym without a trainer or a sort of instructor to show us the steps to take and guide us? The trainer section will include various people who have expertise to give us an in-depth understanding. In the form of books, audio, and video.

            </p>
          </div>
        </div>
  )
}

export default Tour