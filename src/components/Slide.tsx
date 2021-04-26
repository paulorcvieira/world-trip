import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import continents from '../utils/database'

import { SlideItem } from './SlideItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slide() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{width: '100%', flex: '1', height: '100%'}}
    >
      {continents.map(({ slug, description, carousel }) => (
        <SwiperSlide key={carousel.title}>
          <SlideItem
            title={carousel.title}
            description={description}
            link={slug}
            imageUrl={carousel.imageUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}