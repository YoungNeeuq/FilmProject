import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Main.css" // import CSS file
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"

const BannerMain = () => {
  return (
    <div className=" mt-24">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
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
          <div className="large-slide">
            <img src="../../assets/img/mainpage/banner/avatar.png" alt="slide_image" />
          </div>
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
      </Swiper>
    </div>
  )
}

export default BannerMain
