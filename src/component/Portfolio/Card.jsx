import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronRight, BsHandThumbsUp, BsHeart } from 'react-icons/bs';

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <>
     <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="card_img" onClick={toggleModal}/>
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
          <div className='total_like'>
             <div>
               <BsHeart/>
             </div>
             <div>
               {props.totalLike} 
             </div>

          </div>
        </div>
        <div className="title">
           <h2 onClick={toggleModal}>{props.title}</h2>
        </div>
     </div>

     {/* popup box */}

     {modal && (
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content d_flex">
          <div className="modal-img left">
            <img src={props.image} alt="img" />
          </div>
          <div className="modal-text right">
             <span>Featured - Design</span>
             <h1>{props.title}</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className="button f_flex mtop">
                <button className='btn_shadow'>
                  LIKE THIS <BsHandThumbsUp/>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT <BsChevronRight/>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <AiOutlineClose/>
              </button>
          </div>
        </div>
      </div>
     )}

    </>
  )
}

export default Card