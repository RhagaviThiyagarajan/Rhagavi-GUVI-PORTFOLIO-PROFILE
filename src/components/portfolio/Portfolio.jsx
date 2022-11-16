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
          <a href="https://booking-app-mern.netlify.app/"  target="_blank"  without rel="noreferrer" >
            <img src={BookingApp} alt="" />
          </a>
          <a href="https://github.com/RhagaviThiyagarajan/PORTFOLIO-bookingApp-FrontEnd.git" target="_blank"  without rel="noreferrer" >
            <Github color="white" size="2rem" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://mern-exp-tracker.netlify.app/" target="_blank"  without rel="noreferrer" >
            <img src={EXpTracker} alt="" />
          </a>

          <a href="https://github.com/RhagaviThiyagarajan/PORTFOLIO-EXP_TRACKER-FRONTEND.git" target="_blank"  without rel="noreferrer" >
            <Github color="white" size="2rem" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://chatapp-mern-portfolio.netlify.app/" target="_blank"  without rel="noreferrer" >
            <img src={chatApp} alt="" />
          </a>

          <a href="https://github.com/RhagaviThiyagarajan/ChatApp-frontEnd-final.git" target="_blank"  without rel="noreferrer" >
            <Github color="white" size="2rem" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://main--blogappreactnode.netlify.app/"  target="_blank"  without rel="noreferrer" >
            <img src={BlogApp} alt="" />
          </a>
          <a href="https://github.com/RhagaviThiyagarajan/blogApp-final-react-frontend.git"  target="_blank"  without rel="noreferrer" >
            <Github color="white" size="2rem" />
          </a>
        </SwiperSlide>
      </Swiper>

      <div className="portfolio" Id="Portfolio">
      <span>Projects Outline</span>
      <div>
      <li>Expense Tracker Using MERN and Redux</li>
      <li>Real Time Chat App using Socket.io </li>
      <li>Booking.com  with Admin access</li>
      <li>Blog App using CRUD</li>
      </div>
      </div>

    </div>
  );
}

export default Portfolio;
