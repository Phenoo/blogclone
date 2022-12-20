import React from 'react'
import { Link } from 'react-router-dom'
import BlogContainer from '../components/BlogContainer'

const Article = () => {
  return (
    <div className="article-section">
      <section>
        <div className="center">
          <h4 className="headline">
            our latest articles
          </h4>
          <p className='p-tag'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fuga voluptatem placeat magni voluptatibus enim eius molestias, veniam doloribus suscipit voluptas, provident tempora optio excepturi.
          </p>
        </div>
        <div className="article-container trigrid">
          <BlogContainer />
        </div>
        <div className="center">
          <br />
          <button className="button">
            <Link to={`/blogs`}>
              see more
            </Link>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Article