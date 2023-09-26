import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from './Card.jsx';
import './Features.css';
import data from './data.jsx';
const Features = () => {
  return (
     <section className='features top' id='features'>
        <div className="container">
         <div className="heading">
         <SectionHeader meta={data.meta }  title={data.title}  />
         </div>
          <div className="content grid">
            {data.items.map((item, index) => {
               return (
                  <Card key = {index} image = {item.image} title={item.title} desc= {item.desc}/>
               )
            })}
          </div>
        </div>
     </section>
    
  )
}

export default Features
