import style from './home.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';


const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const API = 'https://jsonplaceholder.typicode.com/users';



  const getData = async () => {
    axios.get(API).then((res) => {
      setData(res.data);
      // console.log(data[0])
    }).catch((err) => {
      console.log(err)
    });
  }

  const images = [];
for (let i = 1; i <= 10; i++) {
  // const element = images.src = `../../assets/img/avatar${i}.jpg`;
  images.push(`../../assets/img/avatar${i}.jpg`);
}

console.log(images)

  return (
    <div className={style.cards}>
      {data && data.map((user) => {
          return (
            <Card
              name={user.name}
              username = {user.username}
              email = {user.email}
              company = {user.company.name}
            />
          )
        })
      }
    </div>
    )
}

export default Home;