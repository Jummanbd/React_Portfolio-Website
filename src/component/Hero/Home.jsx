import React from "react";
import { Typewriter } from "react-simple-typewriter";
import data from '../Hero/data.jsx';
import SectionHeader from "../common/SectionHeader.jsx";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
          <SectionHeader meta={data.meta } metaClass = {'hero_meta'} title={data.title}  />
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            <p>{data.desc}</p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>{data.userSocial.sect_social}</h4>
                {data.userSocial.skillIcon.map((item) => {
                    return (
                      <button className="btn_shadow">
                        {item.icons}
                      </button>
                    )
                  })}
              </div>
              <div className="col_1">
                <h4>{data.userSkill.sect_skill}</h4>
                {data.userSkill.skillImage.map((item) => {
                    return (
                      <button className="btn_shadow">
                        <img src={item.image} alt="img_skills" />
                      </button>
                    )
                  })}
              </div>
              
            </div>
          </div>
          <div className='right'>
            <div className="right_img">
              <img src={data.image} alt="hero_img" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home