import React from 'react';
import { LuQuote } from 'react-icons/lu';
import data from './data.jsx';
const Slider = ({id, image, design, name, offcer, post, date, desc, valueIndex, index }) => {
    let position = "nextSlide"
  if (valueIndex === index) {
    position = "activeSlide"
  }
  if (valueIndex === index - 1 || (index === 0 && valueIndex === data.length - 1)) {
    position = "lastSlide"
  }
  return (
    <>
     <article className={`d_flex ${position}`} key={id}>
     <div className='left box_shodow'>
          <div className='img'>
            <img src={image} alt='img' />
          </div>
          <div className='details mtop'>
            <span className='primary_color'>{design}</span>
            <h2>{name}</h2>
            <label>{offcer}</label>
          </div>
        </div>
        <div className="right">
            <div className="icon">
                <div className="quote">
                    <LuQuote/>
                </div>
            </div>
            <div className="content box_shodow mtop">
                <h1>{post}</h1>
                <h3>{date}</h3>
                <p>{desc}</p>
            </div>
        </div>
     </article>
    </>
  )
}

export default Slider;