import React from 'react';
import ReactDOM from 'react-dom';
import style from'./detail.module.css';
import { useEffect } from 'react';
import iconCompany from '../../assets/svg/company.svg';
import iconEmail from '../../assets/svg/email.svg';

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
              <div id={value.id} className={style.div_info_container}>
                <div className={style.flex_left_container}>
                  <img src={value.src} alt="profile-photo" />
                  <button id="btn_close_popup" onClick={() => setOnClose(false)}>Close</button>
                </div>
                <div className={style.flex_right_container}>
                <button className={style.btn_close_popup_mobile} onClick={() => setOnClose(false)}>Close</button>
                  <div>
                  <div className={style.title_info_address}>
                    <h3>Contact Info</h3>
                    </div>
                    <p><span>Name: </span>{value.name}</p>
                    <p><span>User: </span>@{value.username}</p>
                    <p><span>Company: </span>{value.company.name}</p>
                    <p><span>Email: </span>{value.email}</p>
                    <p><span>WebSite: </span><a href="#">{value.website}</a></p>
                  </div>
                  <div>
                    <div className={style.title_info_address}>
                    <h3>Address Info</h3>
                    </div>
                    <p><span>City: </span>{value.address.city}</p>
                    <p><span>Suite: </span>{value.address.suite}</p>
                    <p><span>Zip Code: </span>{value.address.zipcode}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    ),detail
  );

}