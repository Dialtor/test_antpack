import style from './home.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { useGetUser } from '../../hooks/useGetUser';
import Detail from '../../components/DetailPopup';



const Home = () => {

  const [dataWithImage, setDataWithImage] = useState([]);
  const [onClose, setOnClose] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    getData();
    AnimationSwipe();
  }, []);

  const {getData} = useGetUser({setDataWithImage});

  const handlerUser = (id) => {
    const user = dataWithImage.filter(item => id === item.id);
    setUser(user);
  }


  const AnimationSwipe = () => {
    const slider = document.querySelector('#cards_container');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    //   console.log(walk);
    });
  }
  

  // console.log("JSON With Image Data",dataWithImage);
  return (
    <div id="cards_container" className={style.cards}>
      <Detail
          onClose = {onClose}
          setOnClose = {setOnClose}
          user = {user}
      />
      {dataWithImage && dataWithImage.map((user,index) => {
          return (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              username = {user.username}
              email = {user.email}
              company = {user.company.name}
              city = {user.address.city}
              src = {user.src}
              onClose = {onClose}
              setOnClose = {setOnClose}
              handlerUser = {handlerUser}
            />
          )
        })
      }
    </div>
    )
}

export default Home;