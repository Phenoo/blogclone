import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'

const Article = () => {
  const data = [{
    id: 1,
    name: 'trainings',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },
  {
    id: 2,
    name: 'courses',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id:3,
    name: 'coaching',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },
  {
    id: 4,
    name: 'trainings',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },
  {
    id: 5,
    name: 'courses',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id:6,
    name: 'coaching',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  }
  ]
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
          {
            data.map(item => {
              return (
                <BlogCard key={item.id} item={item} />
              )
            })
          }
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