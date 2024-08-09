import React from 'react';
import EsthaLogo from '../../assets/esthalogo1.svg';
import { TextGenerateEffect } from '../../ui/text-generate-effect';
import ImageSlider from './ImageSlider';

const TempelsHeader = ({ imageUrl, Color, title, Quote, HBgImage, words, Images }) => {
    return (

        <section className='flex flex-col  items-center justify-center  '>
            <ImageSlider images={Images} className="flex flex-col z-0 " />
            <div className="flex flex-row h-[150px] rounded-lg bg-white bg-opacity-50 p-4 absolute md:gap-10 lg:gap-20   hover:bg-white  hover:scale-102  transition
               ">
                <div className='flex  items-center justify-center'> 
                 <img
                    src={EsthaLogo}
                    alt="Estha Logo"
                    className="h-[250px] w-[250px]"
                />
                   
                </div>
                <div className='flex  flex-col justify-center  items-center'>  
                    <h2 className=' text-4xl font-mono  font-bold '>
                    <TextGenerateEffect  words={title} />
                    </h2>
                    
                    <TextGenerateEffect className="mt-6 text-3xl font-semibold leading-8 text-gray-700" words={Quote} />
                </div>
            </div>
        </section>

    )
}
// ?

export default TempelsHeader