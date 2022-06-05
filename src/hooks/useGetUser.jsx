import axios from 'axios';


export const useGetUser = ({setDataWithImage}) => {
  const API = 'https://jsonplaceholder.typicode.com/users';

  const getData = async () => {
    axios.get(API).then((res) => {

      if (res.data.length > 0) {
        getImages(res.data);
      }

    }).catch((err) => {
      console.log(err)
    });
  }


  const getImages = (data) => {
    let images = {
      0: 'https://images.pexels.com/photos/3775125/pexels-photo-3775125.jpeg',
      1: 'https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      2: 'https://images.pexels.com/photos/12192379/pexels-photo-12192379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      3: 'https://images.pexels.com/photos/3772519/pexels-photo-3772519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      4: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      5: 'https://images.pexels.com/photos/1059180/pexels-photo-1059180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      6: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      7: 'https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      8: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      9: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  };


    let newData = data.map((value, index) => {
      return (
        {...value, src: images[index]}
      )
    })

    setDataWithImage(newData);
    console.log(newData)
  }

  return {
    getData
  }
}

