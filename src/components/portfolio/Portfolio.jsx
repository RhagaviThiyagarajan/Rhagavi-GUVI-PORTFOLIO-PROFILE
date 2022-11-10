import React from "react";
import "./Portfolio.css";

import Github from "@iconscout/react-unicons/icons/uil-github";
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
          <a href="https://github.com/RhagaviThiyagarajan/PORTFOLIO-bookingApp-FrontEnd.git">
            <Github color="white" size="2rem" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://mern-exp-tracker.netlify.app/">
            <img src={EXpTracker} alt="" />
          </a>

          <a href="https://github.com/RhagaviThiyagarajan/PORTFOLIO-EXP_TRACKER-FRONTEND.git">
            <Github color="white" size="2rem" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://chatapp-mern-portfolio.netlify.app/">
            <img src={chatApp} alt="" />
          </a>

          <a href="https://github.com/RhagaviThiyagarajan/blogApp-final-react-frontend.git">
            <Github color="white" size="2rem" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://main--blogappreactnode.netlify.app/">
            <img src={BlogApp} alt="" />
          </a>
          <a href="https://github.com/RhagaviThiyagarajan/blogApp-final-react-frontend.git">
            <Github color="white" size="2rem" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
