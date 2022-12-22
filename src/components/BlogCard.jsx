import React from 'react'
import { Link } from 'react-router-dom';

import Moment from 'moment'
import { urlFor } from '../lib/client';

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
  return (
    <article className="blog-card">
      <div className="image">
        <Link to={`/blog/${post.slug.current}`} onClick={() => scrollTo()}>
          <img src={urlFor(post.mainImage)} alt="blog-card" />
        </Link>
      </div>
      <div className="text">
        <div className="flex">
          <h6>
          by  Ukusare Faith 
          </h6>
          <h6>
          - {formatDate}
        </h6>
        </div>
        
        <h4>
          {post.title}
        </h4>
        <div className="">
          <p>
            {
              `${ post.body[0].children[0].text.substring(0, 150)}...`
            }
          </p>
        </div>
      </div>
    </article>
  )
}

export default BlogCard