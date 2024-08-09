"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const SingleMasjidPage = ({ color }) => {

    const params = useParams()
    console.log(params)

    const [temple, setTemple] = React.useState([])


    const getData = async () => {
        await axios.get(`http://localhost:5000/masjid`)
        // await axios.get(apiurl)
            .then((response) => {

                setTemple(response.data.find((masjid) => masjid.id === params.id))
                // etTeampel(response.data)
                console.log(response.data)
            })
            .catch((error) => console.log("Error:" + error))
    }

    useEffect(() => {
        getData()
    }, [params.id])



    const [isLive, setIsLive] = useState(false);

    const handleLiveButtonClick = () => {
        if (isLive) {
            setIsLive(false)
        }
        if (!isLive) {
            setIsLive(true)
        }
    };


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
            <div className=' flex flex-col md:gap-4 lg:gap-10 gap-7 w-full p-4 md:p-6 lg:p-8  bg-gradient-to-tr from-orange-300 to-white h-full shadow-md '>

                <div className=' flex flex-col md:flex-row lg:flex-row items-center   p-5 gap-10  bg-white rounded-md '>
                    <img src={temple.imageurl} alt="" className='  h-[60%]  rounded-lg hover:scale-105 transition duration-300 transform-gpu' />

                    <div className='flex flex-col p-10'>
                        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4 hover:underline hover:text-blue-500 transition duration-300">{temple.name}</h1>
                        <p className="text-md md:text-lg mb-6">{temple.shortDescription}</p>
                        <div className="flex flex-wrap mb-6">
                            <p className="w-full pr-4 mb-4">
                                <strong>Location:</strong> {temple.location}
                            </p>
                        </div>

                    <button onClick={handleLiveButtonClick} className={`h-[50px] w-[90px] bg-${temple.color}-500 rounded-md font-semibold`}>Live</button>
                        {isLive && (
                            <div>
                                <iframe className='my-2 self-center h-[25vh] lg:h-[30vh] w-full rounded-lg bg-slate-400 hover:scale-105 transition' src={temple.liveurl} title="|| SVBC TTD LIVE STREAMING || SVBC TTD" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            </div>
                        )}
                    </div>
                </div>

                <div className=' flex w-full flex-col    lg:flex-row items-center p-10 justify-between  bg-white rounded-md'>
                    <div className=' '>
                        <h1 className='font-bold  text-4xl mb-10'>{temple.name} Arcitecture</h1>
                        <p className="text-lg">{temple.briefDescription}</p>
                    </div>
                    <div className=' items-center justify-center'>
                        <img src={temple.arcitectureImageURL} alt={`Architecture of ${temple.name}`} className=" w-[50vw] md:w-[60vw]  lg:w-[70vw]  pr-4 mb-4 hover:scale-105 transition duration-300 transform-gpu" />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>

    )
}


export default SingleMasjidPage