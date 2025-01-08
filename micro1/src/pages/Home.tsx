import React, { useEffect } from 'react'
import interceptor from 'Shell/services/interceptor'


export default function Home() {

  useEffect(() => {

    interceptor.get('/AgeAplicaciones')
    .then((response : any) => {
      console.log(response.data);
    })
    .catch((error: any) => {
      console.error(error);
    });
  },
  []);


  return (
    <div>Home</div>
  )
}
