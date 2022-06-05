import React from 'react';
import ReactDOM from 'react-dom';
import style from'./detail.module.css';

const detail = document.querySelector("#detail");
export default ({onClose, setOnClose, user}) => {


  return ReactDOM.createPortal(
    onClose &&
    (
      <div className={style.div_container}>
        <button onClick={()=>setOnClose(false)}>cerrar</button>
        {
          user.map(value => {
            return (
              value.name
            )
          })
        }
      </div>
    ),detail
  );

}