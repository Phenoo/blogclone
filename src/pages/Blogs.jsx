import React, {useEffect, useState,} from 'react'
import {client} from '../lib/client'
import BlogCard from '../components/BlogCard'

import Ghome from '../components/Ghome'


const Blogs = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const query = '*[_type == "post"]';
    const post = await client.fetch(query);
    setPosts(post);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='blog'>
      <Ghome title='latest articles' />
      <section>
        <div className='article-section'>
          <div className="center">
            <h4 className="headline">
              latest articles
            </h4>
          </div>
          <div className="article-section trigrid">
            {posts &&
                posts?.map(
                  (post) => <BlogCard key={post._id} post={post} />
                )
              }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs