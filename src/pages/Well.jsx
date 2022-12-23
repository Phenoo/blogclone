import React, {useState, useEffect} from 'react'
import Ghome from '../components/Ghome'
import BlogCard from '../components/BlogCard'
import BlogContainer from '../components/BlogContainer'
import { client } from '../lib/client'


const Well = () => {
  const [posts, setPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);

  const fetchData = async () => {
    const query = '*[_type == "post"]';
    const post = await client.fetch(query);
    setPosts(post);
    setFilterPosts(posts.filter((work) => work.tag.includes('well')));
  }

  
  useEffect(() => {
    fetchData();
  })

  return (
    <div>
      <Ghome title='Well' />
      <section>
        <div className='article-section'>
          <div className="center">
            <h4 className='headline'>
              featured articles
            </h4>
          </div>
          <div className=' article-section trigrid'>
          { filterPosts &&
                filterPosts?.map(
                  (post) => <BlogCard key={post._id} post={post} />
                )
              }
          </div>
        </div>
        <BlogContainer />
      </section>
    </div>
  )
}

export default Well