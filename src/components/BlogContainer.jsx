import React, {useEffect, useState,} from 'react'
import BlogCard from './BlogCard'
import {client} from '../lib/client'
import { Link } from 'react-router-dom';

const BlogContainer = () => {
  const [posts, setPosts] = useState([]);
  
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  
  const fetchData = async () => {
    const query = '*[_type == "post"]';
    const post = await client.fetch(query);
    setPosts(post);
    console.log(post);
  }
  useEffect(() => {
    fetchData();
  }, [])

  const filterItems = posts?.filter((item, index) => index < 3);


  return (
    <div className="blog-container">
        <div className="center">
          <h4 className="headline">
            our latest articles
          </h4>
          <p className='p-tag'>
            The 6pacmind helps you to build a renewed mind, keep tabs with our latest updates 
            by subscribing to our newsletters and post notifications.
          </p>
        </div>
      <div className="article-container trigrid">
        	  {filterItems &&
              filterItems?.map(
                (post) => <BlogCard key={post._id} post={post} />
              )
            }
      </div>
      <br /> 
      <div className='center'>
        <button className='button' onClick={() => scrollTo('nav')}>
          <Link to='/blogs'>
            let's take a tour
          </Link>
        </button>
      </div>
    </div>
  )
}

export default BlogContainer