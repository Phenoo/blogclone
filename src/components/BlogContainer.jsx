import React, {useEffect, useState,} from 'react'
import BlogCard from './BlogCard'
import {client} from '../lib/client'

const BlogContainer = () => {
  const [posts, setPosts] = useState([]);

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
      <h4 className="headline">
        latest articles
      </h4>
      <div className="article-container trigrid">
        	  {filterItems &&
              filterItems?.map(
                (post) => <BlogCard key={post._id} post={post} />
              )
            }
      </div>
      <br /> 
      <div className='center'>
        <button className='button'>
          see more
        </button>
      </div>
    </div>
  )
}

export default BlogContainer