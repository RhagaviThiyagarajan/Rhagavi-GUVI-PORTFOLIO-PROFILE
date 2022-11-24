import React from "react";
import "./Portfolio.css";

import Github from "@iconscout/react-unicons/icons/uil-github";
import { UilLink } from "@iconscout/react-unicons";
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
      <span></span>
      <span>Projects</span>

      {/* {slider} */}

      <Swiper
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={100}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div>
          <span>Description</span>
            <li>Booking.com with Admin access</li>
            <a
              href="https://booking-app-mern.netlify.app/"
              target="_blank"
              without
              rel="noreferrer"
            >
              Netlify
              <UilLink color="white" size="2rem">
                click here to navigate
              </UilLink>
            </a>
          </div>

          <div>
            <a
              href="https://github.com/RhagaviThiyagarajan/PORTFOLIO-bookingApp-FrontEnd.git"
              target="_blank"
              without
              rel="noreferrer"
            >
              Github
              <Github color="white" size="2rem" />
            </a>
          </div>

          <div>
          
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
          <span> Description</span>
          <li>Expense Tracker Using MERN and Redux</li>
            <a
              href="https://mern-exp-tracker.netlify.app/"
              target="_blank"
              without
              rel="noreferrer"
            >
              Netlify<UilLink color="white" size="2rem"></UilLink>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/RhagaviThiyagarajan/PORTFOLIO-EXP_TRACKER-FRONTEND.git"
              target="_blank"
              without
              rel="noreferrer"
            >
              Github <Github color="white" size="2rem" />
            </a>
          </div>
        
        </SwiperSlide>

        <SwiperSlide>
          <div>
          <span>Description</span>
          <li>Real Time Chat App using Socket.io </li>
          <a
            href="https://chatapp-mern-portfolio.netlify.app/"
            target="_blank"
            without
            rel="noreferrer"
          >
            Netlify<UilLink color="white" size="2rem">
              
            </UilLink>
          </a>
          </div>

          <div>
          <a
            href="https://github.com/RhagaviThiyagarajan/ChatApp-frontEnd-final.git"
            target="_blank"
            without
            rel="noreferrer"
          >
            Github<Github color="white" size="2rem" />
          </a>
          </div>


       
        </SwiperSlide>

        <SwiperSlide>
          <div>
          <span>Description</span>
          <li>Blog App using CRUD</li>
          <a
            href="https://main--blogappreactnode.netlify.app/"
            target="_blank"
            without
            rel="noreferrer"
          >
           Netlify <UilLink color="white" size="2rem">
              click here to navigate
            </UilLink>
          </a>
          </div>


          <div>
          <a
            href="https://github.com/RhagaviThiyagarajan/blogApp-final-react-frontend.git"
            target="_blank"
            without
            rel="noreferrer"
          >
          Github  <Github color="white" size="2rem" />
          </a>
          </div>


         
          
        </SwiperSlide>
      </Swiper>

  
    
        <div></div>
      </div>
    
  );
}

export default Portfolio;
