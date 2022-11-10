import React from "react";
import "./Portfolio.css";
import Github from "../../img/github.png"
import hoc from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Sidebar from "../../img/sidebar.png";
import BookingApp from "../../img/booking app in pixels.png";
import EXpTracker from "../../img/exp tracker in pixels.png";
import BlogApp from "../../img/blog app in pixels.png";
import Ecommerce from "../../img/ecommerce.png";
import chatApp from "../../img/chat app in pixels.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

function Portfolio() {
  return (
    <div className="portfolio" Id="Portfolio">
      <span>Recent projects</span>
      <span>List</span>

      {/* {slider} */}

      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={50}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://booking-app-mern.netlify.app/">
            <img src={BookingApp} alt="" />
           
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://mern-exp-tracker.netlify.app/">
            <img src={EXpTracker} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={chatApp} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://main--blogappreactnode.netlify.app/">
            <img src={BlogApp} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
