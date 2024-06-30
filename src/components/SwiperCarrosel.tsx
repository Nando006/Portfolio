import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { ISwiperCarrosel } from '../../utils/interface';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { shuffleArray } from '../../utils/functions/ShuffleArray';

export default function SwiperCarrosel({ data, title }: ISwiperCarrosel) {
   // Embaralhar os dados
   const shuffledData = shuffleArray([...data]);

   return (
      <div className=" bg-neutral-800 p-5 rounded-2xl shadow-lg border-4 border-orange-700">
         <p className="flex space-x-2 flex-row px-3 text-sm font-bold font-kanit">
            <span>{title}</span>
            <span className="text-xs text-orange-300 hidden min-[408px]:block">- Arraste na horizontal</span>
         </p>
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
               408: {
                  slidesPerView: 2,
                  spaceBetween: 40
               },
               715: {
                  slidesPerView: 3,
                  spaceBetween: 80
               },
               815: {
                  slidesPerView: 3,
                  spaceBetween: 40
               },
               915: {
                  slidesPerView: 4,
                  spaceBetween: 40
               }
            }}
            className="p-5 shadow-inner shadow-black/80 rounded-xl"
         >
            {
               shuffledData.map((item: any, index: number) => (
                  <SwiperSlide key={index} className="select-none">
                     <div className="w-[150px] h-[100px] bg-gray-800/30 rounded-lg shadow-md shadow-black/50 cursor-grab active:cursor-grabbing hover:scale-110 duration-300 p-2 flex flex-col items-center">
                        <span className="text-sm font-bold">{item.title}</span>
                        <img
                           src={item.img}
                           alt={item.title}
                           className="w-16"
                        />
                     </div>
                  </SwiperSlide>
               ))
            }
         </Swiper>
      </div>
   );
};