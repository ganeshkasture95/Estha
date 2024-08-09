"use client";

import { Calendar } from "@/components/ui/calendar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import festivals from "../../Constants/festivals";
import Footer from "../../components/Footer";
import TempelsHeader from "../../components/gkComponents/TempelsHeader";



const PilgreamPlacesPage = ({ apiUrl, color, title, Quote, HBgImage, YtVideo }) => {

    const [tempels, setTeampels] = useState([])

    const getData = async () => {
        await axios.get(apiUrl)
            .then((response) => {
                setTeampels(response.data)
            })
            .catch((error) => console.log("Error:" + error))
    }

    useEffect(() => {
        getData()
    })

    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "/contact",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];

    return (
        <section className={` bg-gradient-to-b from-${color}-200 to-white flex flex-col justify-center`} >
            <div>
                {/* <FloatingNav navItems={navItems} /> */}
                <TempelsHeader
                    Images={HBgImage}
                    title={title}
                    Quote={Quote}
                    BColor={color}
                />
            </div>
            <div className="grid grid-flow-col grid-cols-4 pt-4" style={{ background: { color } }} >
                <div className=" hidden   flex-col  pt-4  items-center  justify-start  xl:flex md:flex  gap-4 ">
                    <Calendar />
                    <div className="flex flex-col gap-2 items-center">
                        <h1 className="text-2xl font-bold">Upcoming Festivals</h1>
                            {festivals.map((item) => {
                                return (
                                    <div key={item} className=" h-20 p-4 w-full px-4 py-1 bg-gradient-to-b from-orange-200 to-white rounded-md">
                                        <h1 className=" text-xl font-sans font-bold">{item.name}</h1>
                                        <h3>{item.date}</h3>
                                    </div>
                                )
                            })}
                        </div>
                    
                </div>
                <div className='grid grid-cols-1  col-span-full   xl:grid-cols-3 md:grid-cols-2 w-full'>
                    {tempels.map((temple, index) => {
                        return (
                            <div className="w-full" key={index}>
                                {/* <Link to={`/${temple.id}`} className="w-full"> */}
                                <Link to={`/${title}/${temple.id}`} className="w-full">
                                    <div className="border-2 border-grey-500  p-5 m-5 rounded-lg flex bg-slate-50  shadow-md transform transition hover:scale-105  w-auto" style={{ height: '130px' }}>
                                        <div>
                                            <img src={temple.imageurl} alt="img" className="w-20 h-20 rounded-2xl mr-4" />
                                        </div>
                                        <div className={``}>
                                            <h3 className={`font-bold`}>{temple.name}</h3>
                                            <h5>{temple.location}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>



            </div>

            <Footer />
        </section>

    )
}

export default PilgreamPlacesPage

// ?



{/* 
                    <div className='flex flex-col flex-wrap'>
                        {tempels.map((temple) => {
                            return (
                                <div className="flex justify-center" key={temple.name}>
                                    <div className="border-2 border-grey-500 p-5 m-5 rounded-lg flex bg-slate-50 shadow-md transform transition hover:scale-105 w-1/3" style={{ height: '130px' }}>
                                        <div>
                                            <img src={temple.imageurl} alt="img" className="w-20 h-20 rounded-2xl mr-4" />
                                        </div>
                                        <div>
                                            <h3 className='font-bold'>{temple.name}</h3>
                                            <h5>{temple.location}</h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    */}


{/* {Array.isArray(tempels) && tempels.length > 0 ? (
                        <div className='flex flex-col flex-wrap'>
                            {tempels.map((temple) => (
                                <div key={temple.name} className=" w-full h-[25px]">
                                    <TempleCard
                                        templeName={temple.name}
                                        city={temple.location}
                                        imageUrl={temple.imageurl}
                                        religionName={temple.religon}
                                       
                                       />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>No temples found</div>
                    )} */}
