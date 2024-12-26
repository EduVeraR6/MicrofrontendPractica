import { useEffect } from 'react';
import axiosInstance from 'CGLASS-react/axiosInterceptor';


interface Props {
  name : string;
}

export default function Home({name} : Props) {


  useEffect(() => {

    axiosInstance.get('/AgeAplicaciones')
    .then((response : any) => {
      console.log(response.data);
    })
    .catch((error: any) => {
      console.error(error);
    });
  },
  []);



  return (
    <div>Home: {name}</div>
  )
}
