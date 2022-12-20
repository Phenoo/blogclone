import moment from 'moment';
import React, { useEffect, useState } from 'react'
import {  useParams} from 'react-router-dom'
import {client, urlFor} from '../lib/client'



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
                    <h6>
                      {minsAgo}
                    </h6>
                  </div>
                  <h6>
                    {item.author}
                  </h6>
                  <h6 className='grey'>
                    <em>{minsAgo}</em>
                  </h6>
                  <div className="image">
                    
                  </div>
                  <br />
                  <section>
                    <p>
                    {item.body}
                    </p>
                    <br />
                  </section>
                </article>
              )
            })
          }
        </article>
      </section>
    </div>
  )
}

export default Single