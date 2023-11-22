import { SiNestjs } from 'react-icons/si';
import { FaAngular } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import {TbBrandTypescript} from 'react-icons/tb';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import './icons.style.css'
import 'swiper/css'
import 'swiper/css/pagination';

export function Icons() {

    return(
   <div className='App'>

      <div className='My_name'>Tudo Que Eu Tenho</div>

    <div className='icon_face'>
 <Swiper
       modules={[Navigation, Pagination, A11y]}
       spaceBetween={1}
       slidesPerView={4}
       pagination={{ clickable: true }}>
   <SwiperSlide>
   <div className="shadow shadow1">
      <SiNestjs/>
      </div>
      </SwiperSlide>
      <SwiperSlide>
   <div className="shadow shadow2">
        <FaAngular/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
   <div className="shadow shadow3">
        <SiSpring/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
   <div className="shadow shadow4">
        <FaReact/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
   <div className="shadow shadow5">
        <SiNodedotjs/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
   <div className="shadow shadow6">
        <TbBrandTypescript/>
        </div>
      </SwiperSlide>
      
</Swiper>


     </div>
     </div>
   )
}