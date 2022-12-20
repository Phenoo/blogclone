import React, {useState, useEffect} from 'react'
import Ghome from '../components/Ghome'
import { client } from '../lib/client'
import BlogCard from '../components/BlogCard'
import BlogContainer from '../components/BlogContainer'


const Trainings = () => {
  const [posts, setPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);

  const fetchData = async () => {
    const query = '*[_type == "post"]';
    const post = await client.fetch(query);
    setPosts(post);
    setFilterPosts(posts.filter((work) => work.category.includes('training')));
  }

  
  useEffect(() => {
    fetchData();
  })
  return (
    <div>
      <Ghome title="training" />
      <section>
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
          <BlogContainer />
      </section>

    </div>
  )
}

export default Trainings