import React from 'react';
import { type Slide } from '../RightCol/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './styles.scss';
import { SliderLeftChevron, SliderRightChevron } from '../Icons';

interface SliderProps {
  slider: Slide[];
}

function Slider({ slider }: SliderProps): JSX.Element {
  return (
    <>
      <Swiper
        pagination={true}
        navigation={{
          prevEl: '#slider-prev',
          nextEl: '#slider-next',
        }}
        modules={[Pagination, Navigation]}
        className="slider"
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider__header">
              <h3 className="slider__title">{item.header}</h3>
              <div className="slider__chevrons">
                <button className="slider__chevron" id="slider-prev">
                  <SliderLeftChevron className="h-5 w-5 text-midnight" />
                </button>
                <button className="slider__chevron" id="slider-next">
                  <SliderRightChevron className="h-5 w-5 text-midnight" />
                </button>
              </div>
            </div>
            <p className="slider__paragraph">{item.paragraph}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
