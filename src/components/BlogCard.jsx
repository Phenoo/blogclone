import React from 'react'
import Img1 from '../assets/item1.jpeg'
import { Link } from 'react-router-dom';

import Moment from 'moment'
import moment from 'moment';

const BlogCard = ({post}) => {
  
  const scrollTo = () => {
    let element = document.getElementById('nav');

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  const formatDate = Moment(post.date).format("MMM Do, YYYY.")
  const minsAgo = moment(post.date).local().startOf('seconds').fromNow();
  return (
    <article className="blog-card">
      <div className="image">
        <Link to={`/blog/${post.slug.current}`} onClick={() => scrollTo()}>
          <img src={Img1} alt="blog-card" />
        </Link>
      </div>
      <div className="text">
        <h6>
          {formatDate}
        </h6>
        <h4>
          {post.title}
        </h4>
        <div className="category">
          <h5>
            {minsAgo}
          </h5>
        </div>
      </div>
    </article>
  )
}

export default BlogCard