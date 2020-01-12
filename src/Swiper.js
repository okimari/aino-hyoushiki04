import React from 'react';
import Swiper from 'react-id-swiper';
//import { Autoplay } from "swiper/dist/js/swiper.esm";
import img from './img.png';
import 'swiper/css/swiper.css';
import './Swiper.css';



const params = {
    initialSlide: 3,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    },
    navigation: {
        //nextEl: ".swiper-button-next",
        //prevEl: ".swiper-button-prev"
    },
    spaceBetween: 50,
    loop: true,
    autoplay: true,
    //getSwiper: updateSwiper // Get swiper instance callback
};


const SwiperBox = () => (
    <Swiper{...params}>
        <div style={{ background: "#F26152", textAlign: "center" }}><img src={img} className="img" alt="img" /></div>
        <div style={{ background: "#F26152", textAlign: "center" }}><img src={img} className="img" alt="img" /></div>
        <div style={{ background: "#F26152", textAlign: "center" }}><img src={img} className="img" alt="img" /></div>
        <div style={{ background: "#F26152", textAlign: "center" }}><img src={img} className="img" alt="img" /></div>
        <div style={{ background: "#F26152", textAlign: "center" }}><img src={img} className="img" alt="img" /></div>
    </Swiper >
)




export default SwiperBox;