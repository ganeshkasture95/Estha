"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TempleCard from '../../components/TempleCard';
import IntHeader from '../../components/gkComponents/IntHeader';
const BackendTest = ({Religion,HBgImage,APIURL}) => {
  

  
  
  const [tempels, setTeampels] = useState([])

  const getData = async () => {
    await axios.get(APIURL)
      .then((response) => {
        setTeampels(response.data)
      })
      .catch((error) => console.log("Error:" + error))
  }


  useEffect(() => {
    getData()
  }, [])

  return (
  <>
  <h1>{Religion}</h1>
   <IntHeader

      HBgImage={HBgImage}

   
   />


    <div className='grid grid-cols-3'>
      {
        tempels.map((temple) => (
          <div key={temple.name}>
            <TempleCard
              templeName={temple.name}
              city={temple.location}
              imageUrl={temple.imageurl}
              religionName={temple.religon}
            />
          </div>
        ))}
    </div>
  </>

  )
}

export default BackendTest