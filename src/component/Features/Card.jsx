import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
const Card = (props) => {
  return (
    <div className="box btn_shadow">
        <img src={props.image} alt="card_img" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href="/">
           <FaArrowRightLong/> 
        </a>
    </div>
  )
}

export default Card;