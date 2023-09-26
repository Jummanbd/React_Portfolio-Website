import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from './Card';
import './Contact.css';
import data from './data';
const Contact = () => {
  const [dataed, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${dataed.fullname}. 
	My phone number is ${dataed.phone}. 
	My email address is ${dataed.email}. 
	My Subject on  ${dataed.subject}. 
	Here is my message I want to say : ${dataed.message}. 
	`
    )
  }
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
            <div className="contact_heading">
                <SectionHeader meta={data.meta } title={data.title}  />
            </div>
            <div className="content d_flex">
                <div className="left">
                    <Card {...data}/>
                </div>

                 
                <div className='right box_shodow'>
                  <form onSubmit={formSubmit}>
                    <div className='f_flex'>
                      <div className='input row'>
                        <span>YOUR NAME</span>
                        <input type='text' name='fullname' value={dataed.fullname} onChange={InputEvent} />
                      </div>
                      <div className='input row'>
                        <span>PHONE NUMBER </span>
                        <input type='number' name='phone' value={dataed.phone} onChange={InputEvent} />
                      </div>
                    </div>
                    <div className='input'>
                      <span>EMAIL </span>
                      <input type='email' name='email' value={dataed.email} onChange={InputEvent} />
                    </div>
                    <div className='input'>
                      <span>SUBJECT </span>
                      <input type='text' name='subject' value={dataed.subject} onChange={InputEvent} />
                    </div>
                    <div className='input'>
                      <span>YOUR MESSAGE </span>
                      <textarea cols='30' rows='10' name='message' value={dataed.message} onChange={InputEvent}></textarea>
                    </div>
                    <button className='btn_shadow'>
                      SEND MESSAGE 
                    </button>
                  </form>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
