import React, {useState, useEffect} from 'react'
import Ghome from '../components/Ghome'
import BlogCard from '../components/BlogCard'
import { client } from '../lib/client'
import BlogContainer from '../components/BlogContainer'



const Hiip = () => {
  const [posts, setPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);

  const fetchData = async () => {
    const query = '*[_type == "post"]';
    const post = await client.fetch(query);
    setPosts(post);
    setFilterPosts(posts.filter((work) => work.tag.includes('hiip')));
  }

  
  useEffect(() => {
    fetchData();
  })


  return (
    <div>
      <Ghome title="HIIP" />
      <section>
      <br />
        <br />
      <div className="center">
          <h4 className='headline'>
            featured articles
          </h4>
        </div>
        <div className=' article-container trigrid'>
            { filterPosts &&
              filterPosts?.map(
                (post) => <BlogCard key={post._id} post={post} />
              )
            }
            </div>
          <BlogContainer />
      </section>
    </div>
  )
}

export default Hiip