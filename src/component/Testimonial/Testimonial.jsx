import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import SectionHeader from '../common/SectionHeader';
import Slide from './Slider.jsx';
import './Testimonial.css';
import datas from './data.jsx';
var testimonialItem = datas.items
const Testimonial = () => {

  const [data, setdata] = useState(testimonialItem);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    },3000)
    return () => clearInterval(slider)
  }, [index])



  return (
    <>
     <section className="Testimonial" id="clients">
        <div className="container">
            <div className="testimonial_heading">
               <SectionHeader meta={data.meta }  title={data.title}  />
            </div>
            <div className="slide">
              {data.map((item, valueIndex) => {
                return <Slide key= {item.id} {...item} valueIndex = {valueIndex} index = {index}/>
              })}

              <div className="slide_button">
                <button className="btn_shadow prev_btn" onClick={() => {
                  setIndex(index -1)}}>
                  <AiOutlineArrowLeft/>
                </button>
                 <button className="btn_shadow next_btn" onClick={() => setIndex (index +1)}>
                   <AiOutlineArrowRight/>
                 </button>
              </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Testimonial;