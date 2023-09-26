import React from 'react';
import SectionHeader from '../common/SectionHeader.jsx';
import Card from './Card.jsx';
import './Portfolio.css';
import data from './data.jsx';
const Portfolio = () => {
  return (
    <section className='Portfolio top' id='portfolio'>
        <div className="container">
        <SectionHeader meta={data.meta }  title={data.title}  />
        <div className="content grid">
          {data.items.map((item, index) => {
            return (
              <Card key={index} image={item.image} category={item.category} totalLike={item.totalLike} title={item.title}/>
            )
          })}
        </div> 
        </div>

    </section>
  )
}

export default Portfolio