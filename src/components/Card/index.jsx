import style from './card.module.css';
import iconCompany from '../../assets/svg/company.svg';
import iconEmail from '../../assets/svg/email.svg';
import iconCity from '../../assets/svg/location.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



export default function Card({ username, email, name, company,city, src, onClose, setOnClose, handlerUser,id}) {

  return (
    <div className={style.card} id="selector-1">
      <div className={style.imgBox}>
        <img src={src} alt="profile" />
        <div className={style.addImage}>
          {/* <img src="https://freeiconshop.com/wp-content/uploads/edd/upload-cloud-outline.png" alt="" /> */}
        </div>
      </div>
      {/* <div className={style.icon_close}></div> */}
      <div className={style.content}>
        <div className={style.details}>
          <h2>{name}<br></br><span>@{username}</span></h2>
          <div className={style.flex_left_container}>
            <div>
              <img src={iconEmail} width="20px" alt="icon-item" />
              <p>{email}</p>
            </div>
            <div>
              <img src={iconCompany} width="20px" alt="icon-item" />
              <p>{company}</p>
            </div>
            <div>
              <img src={iconCity} width="20px" alt="icon-item" />
              <p>{city}</p>
            </div>
          </div>
          <button className={style.button} onClick={()=> [setOnClose(!onClose),handlerUser(id)]}>More Info</button>
        </div>
      </div>
    </div>
  )
}


