import React from 'react';
import testimonialCSS  from './../Testimonial/Testimonial.module.css'

import star from './../../assets/star.png'
import {Swiper, SwiperSlide} from 'swiper/react';


import user3 from './../../assets/user3.png'
import user2 from './../../assets/user2.png'
import user1 from './../../assets/user1.png'

import 'swiper/css'
import { Autoplay } from 'swiper/modules';

function Testimonial () {
    return (
        <div className={`${testimonialCSS.testimonialWrapper} section`}>
            <h1 className="section_title">
                Clients are Always Satisfied  <br /> with Us
                <img src={star} alt="" />
            </h1>      

            <Swiper
                spaceBetween={30}
                slidesPerView={2} 
                loop={true}
                breakpoints={
                    {
                        0:{
                            slidesPerView: 1
                        },
                        900:{
                            slidesPerView:2
                        }

                    }
                }
                autoplay={
                    {
                        delay: 2500,
                    }
                }
                modules={[Autoplay]}

                className={testimonialCSS.swiper}>
                <SwiperSlide>
                    <div className={testimonialCSS.swiperCard}>
                        <div className={testimonialCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nemo vel praesentium, pariatur quis porro hic saepe veniam excepturi tenetur, unde officiis fuga esse, quisquam vitae cumque ab dicta alias.</p>
                        <div className={testimonialCSS.profile}>
                            <img src={user1} alt="" />
                            <h3>Sir Lucman <span>Faculty</span></h3>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={testimonialCSS.swiperCard}>
                        <div className={testimonialCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nemo vel praesentium, pariatur quis porro hic saepe veniam excepturi tenetur, unde officiis fuga esse, quisquam vitae cumque ab dicta alias.</p>
                        <div className={testimonialCSS.profile}>
                            <img src={user2} alt="" />
                            <h3>Sir Jojo <span>Fuculty</span></h3>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={testimonialCSS.swiperCard}>
                        <div className={testimonialCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nemo vel praesentium, pariatur quis porro hic saepe veniam excepturi tenetur, unde officiis fuga esse, quisquam vitae cumque ab dicta alias.</p>
                        <div className={testimonialCSS.profile}>
                            <img src={user3} alt="" />
                            <h3>Sir Mubin <span>Fuculty</span></h3>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Testimonial