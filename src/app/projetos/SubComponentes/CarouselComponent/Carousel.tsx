import {register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {CarouselProps} from '../../../../types/ProjectTypes';

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    if (images.length === 0) {
        return null;
    }
    return (
      <div className='container-carousel'>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className='carousel-item'>
              <img 
                src={image.url} 
                alt={image.descricao}
              />
            </SwiperSlide>  
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Carousel;
