import style from './home.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './swiper-bundle.min.css';


const Home = () => {

  const [data, setData] = useState([]);
  const [dataWithImage, setDataWithImage] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const API = 'https://jsonplaceholder.typicode.com/users';



  const getData = async () => {
    axios.get(API).then((res) => {
      setData(res.data);

      if (res.data.length>0) {
        getImages(res.data);
      }

    }).catch((err) => {
      console.log(err)
    });
  }


  const getImages = (data) => {
    const images = [
      'https://images.pexels.com/photos/3775125/pexels-photo-3775125.jpeg',
      'https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/12192379/pexels-photo-12192379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3772519/pexels-photo-3772519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1059180/pexels-photo-1059180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];

      let newData = data.map(value => {
        return (
          images.map(image => {
            return (
              {...value, src: image}
            )
          })
        )
      })

      setDataWithImage(newData[0]);
  }

  console.log("JSON With Image Data",dataWithImage);
  return (
    <div className={style.cards}>
      {dataWithImage && dataWithImage.map((user,index) => {
          return (
            <Card
              key={index}
              name={user.name}
              username = {user.username}
              email = {user.email}
              company = {user.company.name}
              src = {user.src}
            />
          )
        })
      }
    </div>
    )
}

export default Home;