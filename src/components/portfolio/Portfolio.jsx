import React from 'react'
import './Portfolio.css';
import hoc from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import Sidebar from "../../img/sidebar.png";
import BookingApp from '../../img/booking app in pixels.png'
import EXpTracker from '../../img/exp tracker in pixels.png'
import BlogApp from '../../img/blog app in pixels.png'
import Ecommerce from "../../img/ecommerce.png";
import chatApp from '../../img/chat app in pixels.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';


function Portfolio() {
  return (
    <div className="portfolio" Id='Portfolio'>
      
        <span>Recent projects</span>
        <span>List</span>




{/* {slider} */}

        <Swiper
       
        modules={[Pagination]}
                slidesPerView={3}
                spaceBetween={50}
                grabCursor={true}
                pagination={{clickable:true}}
        className='portfolio-slider'>
<SwiperSlide>
    <img src={BookingApp} alt=""/>
    
</SwiperSlide>

<SwiperSlide>
    <img src={EXpTracker}alt=""/>
</SwiperSlide>

<SwiperSlide>
<img src={chatApp}alt=""/>
</SwiperSlide>

<SwiperSlide>
  
    <img src={BlogApp}alt=""/>
</SwiperSlide>







        </Swiper>
        </div>
  );
};

export default Portfolio