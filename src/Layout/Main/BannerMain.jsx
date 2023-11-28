import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Main.css" // import CSS file
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
import { AiOutlineCaretRight } from "react-icons/ai"

// eslint-disable-next-line react/prop-types
const BannerMain = ({ search }) => {
  return (
    <div className="xl:mt-24 lg:mt-24 mt-16 pt-10 ">
      {!search ? (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          direction="horizontal"
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          cubeEffect={true}
          spaceBetween={100}
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
              slidesPerView: 3,
              spaceBetween: -100
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
          <SwiperSlide>
            <div className=" w-fit">
              <img className="shadow-lg" src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
              {/* <div className="-z- absolute -inset-7 bg-gradient-to-r from-[#4c6aa7] to-[#772462] rounded-lg blur-lg opacity-95 w-[102%] lg:-top-2 lg:h-[100%] h-[100%] top-2 mx-auto"></div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-fit">
            <img src="../../assets/img/mainpage/banner/avatar.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="w-fit">
            <img src="../../assets/img/mainpage/banner/f8.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="w-fit">
            <img src="../../assets/img/mainpage/banner/ratched.png" className=" rounded-3xl" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="w-fit">
            <img src="../../assets/img/mainpage/banner/you.png" className=" rounded-3xl" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="w-fit">
            <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="w-fit ">
            <img src="../../assets/img/mainpage/banner/ratched.png" className=" rounded-3xl" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="w-fit">
            <img src="../../assets/img/mainpage/banner/you.png" className=" rounded-3xl" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="w-fit">
            <img src="../../assets/img/mainpage/banner/f8.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="w-fit">
            <img src="../../assets/img/mainpage/banner/old.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="w-fit">
            <img src="../../assets/img/mainpage/banner/avatar.png" alt="slide_image" />
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
      ) : (
        <div className="  lg:ml-[15%] mx-4 flex gap-12 -mb-20">
          <div className="text-white">
            <h2 className="xl:text-2xl font-semibold mb-3">Often searched</h2>
            <div className="flex lg:gap-12 gap-6 mb-20">
              <img src="../../assets/img/mainpage/search/thor.png"></img>
              <img src="../../assets/img/mainpage/search/fast.png"></img>
              <img src="../../assets/img/mainpage/search/ginny.png"></img>
              <img src="../../assets/img/mainpage/search/little.png"></img>
              <img src="../../assets/img/mainpage/search/raya.png"></img>
            </div>
            <h2 className="xl:text-2xl font-semibold mb-3">Actors</h2>
            <div className="flex text-[#D6D6D6] gap-14">
              <div>
                <div className="flex gap-3 text-[15px] mb-8">
                  <p>Leonardo DiCaprio</p>
                  <AiOutlineCaretRight className="my-auto"></AiOutlineCaretRight>{" "}
                </div>
                <div className="flex gap-3 text-[15px]">
                  <p>Robert Downney Jr</p>
                  <AiOutlineCaretRight className="my-auto"></AiOutlineCaretRight>{" "}
                </div>
              </div>

              <div>
                <div className="flex gap-3 text-[15px] mb-8">
                  <p>Johnny Depp</p>
                  <AiOutlineCaretRight className="my-auto"></AiOutlineCaretRight>{" "}
                </div>
                <div className="flex gap-3 text-[15px]">
                  <p>Brad Pitt</p>
                  <AiOutlineCaretRight className="my-auto"></AiOutlineCaretRight>{" "}
                </div>
              </div>

              <div>
                <div className="flex gap-3 text-[15px] mb-8">
                  <p>Jared Leto</p>
                  <AiOutlineCaretRight className="my-auto"></AiOutlineCaretRight>{" "}
                </div>
                <div className="flex gap-3 text-[15px]">
                  <p>Tom Cruise</p>
                  <AiOutlineCaretRight className="my-auto"></AiOutlineCaretRight>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-2  image-container relative">
            <img className="z-10 lg:w-[650px]" src="../../assets/img/mainpage/search/banner.png" alt="" />
            <div
              className="absolute -inset-7 bg-gradient-to-r from-[#4c6aa7] to-[#772462]
           rounded-lg blur-xl opacity-95 xl:w-[90%] w-[100%] lg:w-[100%]  xl:h-[65%] 
           lg:h-[84%] h-[75%] xl:top-[8%] top-[10%] -left-4 mx-auto"
            ></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BannerMain
