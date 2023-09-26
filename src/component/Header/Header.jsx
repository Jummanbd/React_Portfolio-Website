import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LogoImage from '../../assets/logo.png';
import Button from '../common/Button';
import Logo from '../common/Logo';
import './Header.css';
import data from './navData.jsx';
const Header = () => {
    // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
    
  return (      
    <>
      <header className='header'>
        <div className="container d_flex">
            <div className="logo">
                <Logo url={LogoImage}/>
            </div>
            <div className="navlink ">
              <div className=" nav_wrap">
              <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              {data.map((item, index) => {
                return  (
                <>
                  <li key={index}>
                     <a href={item.path}>{item.title}</a>
                  </li>
                
                
                </>
                )
              })}
            </ul>
              <Button text='Buy Now' className='home-btn'/>
              </div>

                <button className="toggle" onClick={() => setMobile(!Mobile)}>

                    {Mobile ?  <AiOutlineClose className  =" close home-btn menu-btn"/>  : <AiOutlineMenu className='open'/>  }
                  </button>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
