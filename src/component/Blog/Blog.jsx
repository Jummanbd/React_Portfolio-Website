import React from 'react';
import '../Portfolio/Portfolio.css';
import SectionHeader from '../common/SectionHeader.jsx';
import './Blog.css';
import Card from './Card.jsx';
import data from './data.jsx';
const Blog = () => {
  return (
    <>
     <section className='Portfolio Blog' id = 'blog'>
        <div className="container top">
          <SectionHeader meta={data.meta }  title={data.title}  />
        <div className="content grid">
          {data.items.map((item, index) => {
            return (
              <Card key={index} image={item.image} date={item.date} title_one={item.title_one} title_two={item.title_two} title_three={item.title_three} desc_one={item.desc_one} desc_two={item.desc_two} desc_three={item.desc_three} />
            )
          })}
        </div>
        </div>
      </section>     
    </>
  )
}

export default Blog
