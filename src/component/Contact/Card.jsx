import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Card = ({image, details_title, details_office, details_desc, details_phone, details_email, social_title, social_icon_f, social_icon_i, social_icon_L}) => {
  console.log(social_icon_f, social_icon_L, social_icon_i);
  return (
        <div className="box box_shodow">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="details">
            <h1>{details_title}</h1>
            <p>{details_office}</p>
            <p>{details_desc}</p>
            <p>{details_phone}</p>
            <p>{details_email}</p>
            <span>{social_title}</span>
            <div className="button f_flex">
                <button className='btn_shadow'> 
                 <FaFacebookF/>
                </button>
                <button className='btn_shadow'>
                    <FaInstagram/>
                </button>

                <button className='btn_shadow'>
                    <FaLinkedinIn/>
                </button>
            </div>
         </div>
       </div>
  )
}

export default Card
