import moment from 'moment';
import React, { useEffect, useState } from 'react'
import {  useParams} from 'react-router-dom'
import {client, urlFor} from '../lib/client'
import BlockContent from '@sanity/block-content-to-react'

import Comment from '../components/Comment'

const Single = () => {
  const [single, setSingle] = useState(null);
  const {slug} = useParams();

  const fetchSingleData = async () => {
    const query = `*[slug.current == "${slug}"]`;
    const post = await client.fetch(query);
    setSingle(post);

  }
  useEffect(() => {
    fetchSingleData();
  })




  return (
    <div className='single-page'>
      <section>
        <article>
          {
            single && single.map(item => {
              const minsAgo = moment(item.date).local().startOf('seconds').fromNow();
              return (
                <article className="single-container" key={item.slug}>
                  <div className="center">
                    <h4 className='headline'>
                      {item.title}
                    </h4>
                  </div>
                  <div className="center">
                    <div className="image">
                      {item.mainImage && item.mainImage.asset &&
                        <img src={urlFor(item.mainImage )} alt={item.title} />
                      }
                    </div>
                  </div>
                  <div>
                    <h6 className='author'>
                      by  Ukusare Faith 
                    </h6>
                    <h6 className='grey'>
                      {minsAgo}
                    </h6>
                  </div>
                  <br />
                  <article>
                    <BlockContent 
                      blocks={item.body}
                      projectId="wjj0ccq4"
                      dataset="production"
                    />
                  </article>
                </article>
              )
            })
          }
        </article>
        <Comment />
      </section>
    </div>
  )
}

export default Single