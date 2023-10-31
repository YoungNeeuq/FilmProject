import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Main.css" // import CSS file
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"

const BannerMain = () => {
  return (
    <div className="xl:mt-24 lg:mt-24 mt-14">
      {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        direction="horizontal"
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        cubeEffect={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        breakpoints={{
          // Custom breakpoints here
          640: {
            slidesPerView: 10,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          1024: {
            slidesPerView: 4
          }
        }}
      >
        <SwiperSlide className="w-fit">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="w-fit">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="w-fit">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="w-fit">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="w-fit">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="w-fit">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="w-fit ">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="w-fit">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="w-fit">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="w-fit">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="w-fit">
          <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper> */}
      <div className=" container mx-auto flex gap-10">
        <div className="text-white">
          <h2>Often searched</h2>
          <div className="flex"></div>
          <h2>Actors</h2>
          <div className="flex"></div>
        </div>
        <div className=" flex gap-2  image-container relative xl:mx-20 mx-3">
          <img className="z-10" src="../../assets/img/mainpage/1.png" alt="" />
          <img className="z-10" src="../../assets/img/mainpage/2.png" alt="" />
          <img className="z-10" src="../../assets/img/mainpage/3.png" alt="" />
          <div className="absolute -inset-7 bg-gradient-to-r from-[#4c6aa7] to-[#772462] rounded-lg blur-xl opacity-95 xl:w-[100%] w-[100%] lg:w-[100%]  xl:h-[84%] lg:h-[84%] h-[75%] xl:top-[9%] top-[10%] left-0 mx-auto"></div>
        </div>
      </div>
    </div>
  )
}

export default BannerMain
