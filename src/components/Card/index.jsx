import style from './card.module.css';
import iconCompany from '../../assets/svg/company.svg';
import iconEmail from '../../assets/svg/email.svg';
// import imgSrc from '../../assets/img/avatar'


export default function Card({ username, email, name, company, images }) {


  // let counter = 0;
  // const newArray = images.map(element  => {
  //   counter = counter + 1;
  //   element.src == "" ? {...images, src: `../../assets/img/avatar${counter}.jpg`} : element
  // })

  // console.log(newArray)


  return (
    <div className={style.card} id="selector-1">
      <div className={style.imgBox}>
        <img src={images} alt="profile" />
        {/* https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png */}
        {/* https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
        <div className={style.addImage}>
          <img src="https://freeiconshop.com/wp-content/uploads/edd/upload-cloud-outline.png" alt="" />
        </div>
      </div>
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
          </div>
          <button className={style.button}>More Info</button>
        </div>
      </div>
    </div>
  )
}


