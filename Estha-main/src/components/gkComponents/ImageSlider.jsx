// src/ImageSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./imageslider.css"; // Create this file for custom styles

const ImageSlider = ({ images }) => {
  const settings = {    
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase:"",
  };

  return (
    <div className="image-slider ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} >
            <img src={image} alt={`Slide ${index}`} className=  " h-[250px] w-full   object-cover"  />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;