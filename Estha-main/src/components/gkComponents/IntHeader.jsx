"use client";


import React, { useEffect, useState } from 'react';
import '../../App.css';
import EsthaLogo from '../../assets/esthalogo1.svg';
import { SparklesCore } from '../../ui/sparkles';





export default function IntHeader({ imageUrl, Color, title, Quote, HBgImage, words }) {


    const [s, sesS] = useState(0);


    const headerImgStyle = {
        width: 'auto',
        height: '600px',
        marginLeft: '-2%',
        paddingTop: '10%',
    };

    useEffect(() => {
        sesS + 1
    })

    return (
        <div className="bg-white">
            <div className="h-[20rem] relative w-full bg-gradient-to-b from-orange-300 to-white flex flex-row items-center justify-evenly overflow-hidden rounded-md"
                style={{ backgroundImage: `url(${HBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

                <div
                    className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ea765e] to-[#eab77e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>


                <div className="flex flex-col items-center justify-center text-right">
                    <img
                        src={EsthaLogo}
                        alt="Estha Logo"
                        className="max-h-60 -mb-10 shadow-none"
                    />
                    <h1 className="text-2xl font-normal tracking-tight text-gray-900 sm:text-9xl esthafont">
                        Estha
                    </h1>
                    <h2>{title}</h2>
                    <p>{Quote}</p>

                </div>

                <div>

                </div>
                <div>

                </div>


                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-3/4 bg-gradient-to-tr from-[#d58258] to-[#dead80] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={4}
                        particleDensity={4}
                        className="w-full h-full"
                        particleColor="#048a85"
                    />
                </div>
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        background="transparent"
                        minSize={0.6}
                        maxSize={4}
                        particleDensity={4}
                        className="w-full h-full"
                        particleColor="#ff80b5"
                    />
                </div>
            </div>
        </div>
    );
}
