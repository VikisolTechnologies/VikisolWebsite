import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/partners';

const PartnersSlider = () => {
  return (
    <>
    {/* partners */}
    <div className="mil-soft-bg">
        <div className="container mil-p-0-120">
            <Swiper
                {...SliderProps.milInfiniteSlider}
                className="swiper-container mil-infinite-show mil-up mil-mb-30"
            >
                {Data.row1.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`partners-slider-row1-item-${key}`}>
                <div className="mil-partner-frame" style={{"width": "60px"}}>
                    <img src={item.image} alt={item.alt} title={item.alt} />
                </div>
                </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                {...SliderProps.milInfiniteSliderReverse}
                className="swiper-container mil-infinite-show mil-up"
            >
                {Data.row2.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`partners-slider-row2-item-${key}`}>
                <div className="mil-partner-frame" style={{"width": "60px"}}>
                    <img src={item.image} alt={item.alt} title={item.alt} />
                </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
    {/* partners end */}
    </>
  );
};
export default PartnersSlider;