import React from 'react'
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProfilePic1 from '../../img/profile1.jpg';
import ProfilePic2 from '../../img/profile2.jpg'; 
import ProfilePic3 from '../../img/profile3.jpg';
import ProfilePic4 from '../../img/profile4.jpg';
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';
export default function Testimonial() {

   const  clients=[
        {
            img:ProfilePic1,
            review:"Handles the hardest situations calmly,with an excellent top notch leadership quality."
        },
        {
            img:ProfilePic2,
            review:"Prioritising the right works at right time and a great multitasker. ",

        },
        {
            img:ProfilePic3,
            review:"Communication and fluency in language is versatile.",
            
        },
        {
            img:ProfilePic4,
            review:"Much appreciatable for flexibilty in working hours during critical project release times,work comes first than anything else for her.",
            
        },
    ];
  return (
    <div className="t-wrapper" id="Testimonials">
        <div className="t-heading">
            <span>Feedback and Ratings</span>
            <span>received from </span>
            <span>Co-Workers and Clients!</span>
            <div className="blur t-blur1"
             style={{background:"var(--purple)"}}>
                  </div>



<div className="blur t-blur2" 
style={{background:"skyblue"}}>
    </div>     
    </div>


    {/* {/*slider/*}        */}
            <Swiper


                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable:true}}
                grabCursor="pointer">
{
    clients.map((client,index)=>
    {
        return(
            <SwiperSlide key={index}>
                <div className="testimonial">
                <img src={client.img} alt=""/>
                <span>{client.review}</span>
                </div>
            </SwiperSlide>
        );
    })
}
            </Swiper>
            
            </div>
            
  );
};
