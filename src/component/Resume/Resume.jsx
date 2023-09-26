import React from 'react';
import SectionHeader from '../common/SectionHeader.jsx';
import Card from './Card.jsx';
import './Resume.css';
import data from './data.jsx';
const Resume = () => {
  return (
    <>
     <section className="Resume" id="resume">
        <div className="container top">
            <div className='resume_heading'>
             <SectionHeader meta={data.meta }  title={data.title}  />
            </div>
          <div className="content-section resume_section mtop d_flex">
            <div className="left">
              <SectionHeader meta={'2007-2010'}  title={'Education Quality'}  />
             <div className="content">
                 {data.items.map((item, id) => {
                    if(item.category === 'education'){
                        return <Card key = {id} title = {item.title} year= {item.year} rate ={item.rate} desc = {item.desc}/>
                    }
                 })}
             </div>
            </div>

            <div className="left">
              <SectionHeader meta={'2007-2010'}  title={'Job Experience'}  />
             <div className="content">
                 {data.items.map((item, id) => {
                    if(item.category === 'experience'){
                        return <Card key = {id} title = {item.title} year= {item.year} rate ={item.rate} desc = {item.desc}/>
                    }
                 })}
             </div>
            </div>
          </div>
        </div>
     </section>
    </>
  )
}

export default Resume