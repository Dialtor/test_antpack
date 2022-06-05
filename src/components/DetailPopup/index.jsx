import React from 'react';
import ReactDOM from 'react-dom';
import style from'./detail.module.css';
import { useEffect } from 'react';

const detail = document.querySelector("#detail");
export default ({onClose, setOnClose, user}) => {

  const closePopUp = () => {
    const containerPopup = document.querySelector("#container_popop");
    const btnClose = document.querySelector('#btn_close_popup');

    btnClose.addEventListener("click", ()=>{
      console.log("closed")
    })
  }

  useEffect(() => {
    if (setOnClose === true) {
      closePopUp();
    }
  }, []);

  return ReactDOM.createPortal(
    onClose &&
    (
      <div id="container_popup" className={style.div_container}>
        {
          user.map(value => {
            return (
              <div className={style.div_info_container}>
                <div className={style.flex_left_container}>
                <img src={value.src} alt="profile-photo" />
                <button  id="btn_close_popup" onClick={()=>setOnClose(false)}>cerrar</button>
                </div>
                <div className={style.flex_right_container}>
                </div>
              </div>
            )
          })
        }
      </div>
    ),detail
  );

}