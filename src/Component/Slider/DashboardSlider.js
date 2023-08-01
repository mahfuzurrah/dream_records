import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import swiper_img from "../assets/img/Swiper_img/Swiper-bg.png";

export default function DashboardSlider() {
  return (
    <div>
      <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swipe_content">
                  <img src={swiper_img} alt="" />
                  <div className="text_content">
                    <p>Hello,</p>
                    <h1>Mahfuzur R.</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipe_content">
                  <img src={swiper_img} alt="" />
                  <div className="text_content">
                    <p>Hello,</p>
                    <h1>Mahfuzur R.</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipe_content">
                  <img src={swiper_img} alt="" />
                  <div className="text_content">
                    <p>Hello,</p>
                    <h1>Mahfuzur R.</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipe_content">
                  <img src={swiper_img} alt="" />
                  <div className="text_content">
                    <p>Hello,</p>
                    <h1>Mahfuzur R.</h1>
                  </div>
                </div>
              </SwiperSlide>
              {/* Add more slides here */}
            </Swiper>
    </div>
  )
}
