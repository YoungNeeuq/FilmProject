import { useState, useEffect } from "react"
import axios from "axios"
import "./Main.css" // import CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { faPlay, faForwardStep } from "@fortawesome/free-solid-svg-icons"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
;("use client")

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { NavLink } from "react-router-dom"
// eslint-disable-next-line react/prop-types
const ScrollAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px 0px"
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
const ContentMain = () => {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [cartoons, setCartoons] = useState([])
  const [weeklytops, setWeeklytops] = useState([])
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://652604c767cfb1e59ce7d148.mockapi.io/Content")
        const data = response.data
        const moviesData = []
        const seriesData = []
        const cartoonsData = []
        const weeklytopsData = []
        const videosData = []

        data.forEach(item => {
          if (item.page === "main") {
            if (item.type === "movies") {
              moviesData.push(item)
            }
            if (item.type === "series") {
              seriesData.push(item)
            }
            if (item.type === "cartoons") {
              cartoonsData.push(item)
            }
            if (item.type === "weeklytop") {
              weeklytopsData.push(item)
            }
            if (item.type === "video") {
              videosData.push(item)
            }
          }
        })

        setMovies(moviesData)
        setSeries(seriesData)
        setCartoons(cartoonsData)
        setWeeklytops(weeklytopsData)
        setVideos(videosData)
      } catch (error) {
        // Xử lý lỗi tại đây
      }
    }

    fetchData()
  }, [])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4.5
    }
  }
  const responsivew = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  }
  const responsivev = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3.5,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.3
    }
  }
  const responsivei = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 8,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  }
  return (
    <div className="bg-[#040714] rounded-lg xl:mx-16 lg:mx-12 md:mx-5 mx-3 xl:mt-8 lg:mt-2 mt-2 overflow-hidden ">
      {/* Start bar */}
      <ScrollAnimation>
        <div
          className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 mb-8 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 icon pt-7"
          id="icon"
          draggable="true"
        >
          <Carousel showDots={true} responsive={responsivei}>
            <div className="custom-flex">
              <img className="xl:w-[14%] lg:w-[16%] w-[16px]" src="../../assets/img/icon/movies.png" alt="" />
              <p className="text-white xl:text-base lg:text-base text-[11px]">Movies</p>
            </div>

            <div className="custom-flex">
              <img className="xl:w-[14%] lg:w-[16%] w-[16px]" src="../../assets/img/icon/video.png" alt="" />
              <p className="text-white mb-1 xl:text-base lg:text-base text-[11px]">Series</p>
            </div>

            <div className="custom-flex">
              <img className="xl:w-[14%] lg:w-[14%] w-[16px]" src="../../assets/img/icon/popcorn.png" alt="" />
              <p className="text-white xl:text-base lg:text-base text-[11px]">Cartoons</p>
            </div>

            <div className="custom-flex">
              <img className="xl:w-[14%] lg:w-[16%] w-[16px]" src="../../assets/img/icon/star.png" alt="" />
              <p className="text-white xl:text-base lg:text-base text-[11px]">Top</p>
            </div>

            <div className="custom-flex">
              <img className="xl:w-[14%] lg:w-[14%] w-[16px]" src="../../assets/img/icon/dowload.png" alt="" />
              <p className="text-white xl:text-base lg:text-base text-[11px]">Download</p>
            </div>

            <div className="custom-flex">
              <img className="xl:w-[14%] lg:w-[16%] w-[16px]" src="../../assets/img/icon/tv.png" alt="" />
              <p className="text-white xl:text-base lg:text-base text-[11px]">New</p>
            </div>

            <div className="custom-flex">
              <img className="xl:w-[14%] lg:w-[16%] w-[16px]" src="../../assets/img/icon/love.png" alt="" />
              <p className="text-white xl:text-base lg:text-base text-[11px]">Like</p>
            </div>
            <div className="custom-flex cursor-pointer">
              <img className="xl:w-[14%] lg:w-[14%] w-[16px]" src="../../assets/img/icon/ghim.png" alt="" />
              <p className="text-white xl:text-base lg:text-base text-[11px]">Looked</p>
            </div>
          </Carousel>
        </div>
      </ScrollAnimation>
      {/* End bar */}

      {/* Start video */}
      <ScrollAnimation>
        <div
          className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 watching z-0"
          draggable="true"
        >
          <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-4 lg:mb-3 md:mb-2 mb-2">
            Continue Watching
          </h4>

          <Carousel showDots={true} responsive={responsivev}>
            {videos.map(video => (
              <div
                className=" before: self-center xl:h-[250px] lg:h[250px] md:h-[200px] h-[100px] hover:scale-110 transition-transform z-10 relative xl:mx-6 mx-2"
                key={video.id}
              >
                <img src={video.image} className=" rounded-lg w-full h-full object-cover" alt={`video-${video.id}`} />
                <div className="absolute top-2 left-2 flex flex-col items-center justify-center bg-opacity-50 text-white">
                  <div className=" mb-2 font-bold xl:text-lg lg:text-base text-[8px]">{video.title}</div>
                </div>
                <div className=" flex absolute top-[49%] left-1/2 -translate-x-1/2 flex-col items-center justify-center bg-opacity-50 text-white z-10 cursor-pointer">
                  <FontAwesomeIcon icon={faPlay} size="2xl" style={{ color: "#ffffff" }} />
                </div>
                <div className=" flex absolute top-[43%] left-[49%] -translate-x-1/2 flex-col items-center justify-center bg-opacity-30 text-white rounded-full bg-white p-7 border-2 border-opacity-60 border-[#d5d6d8] cursor-pointer"></div>
                <div className=" flex absolute top-[52%] left-[33%] -translate-x-1/2 flex-col items-center justify-center bg-opacity-50 text-white z-10 cursor-pointer">
                  <FontAwesomeIcon icon={faForwardStep} size="lg" style={{ color: "#ffffff" }} rotation={180} />
                </div>
                <div className=" flex absolute top-[49%] left-[33%] -translate-x-1/2 flex-col items-center justify-center bg-opacity-30 text-white rounded-full bg-white p-4 cursor-pointer border-2 border-opacity-60 border-[#d5d6d8]"></div>
                <div className=" flex absolute top-[52%] right-[29%] -translate-x-1/2 flex-col items-center justify-center bg-opacity-50 text-white z-10 cursor-pointer">
                  <FontAwesomeIcon icon={faForwardStep} size="lg" style={{ color: "#ffffff" }} />
                </div>
                <div className=" flex absolute top-[49%] right-[23%] -translate-x-1/2 flex-col items-center justify-center bg-opacity-30 text-white rounded-full bg-white p-4 cursor-pointer border-2 border-opacity-60 border-[#d5d6d8]"></div>
              </div>
            ))}
          </Carousel>
        </div>
      </ScrollAnimation>
      {/* End video */}

      {/* Start movies */}
      <ScrollAnimation>
        <div
          className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 "
          draggable="true"
        >
          <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-4 lg:mb-3 md:mb-2 mb-2">
            Movies
          </h4>
          <Carousel showDots={true} responsive={responsive}>
            {movies.map(movie => (
              <div
                className=" before: self-center xl:h-[330px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10 relative group xl:mx-4 mx-1"
                key={movie.id}
              >
                <img src={movie.image} className=" rounded-lg w-full h-full object-cover" alt={`movie-${movie.id}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100">
                  <div className="animate-slideIn mb-2 font-bold xl:text-base lg:text-base text-[8px]">
                    {movie.title}
                  </div>
                  <div className="animate-slideIn xl:text-base lg:text-base text-[6px]">{movie.time}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </ScrollAnimation>
      {/* End movies */}
      <ScrollAnimation>
        {/* Start series */}
        <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb- lg:mb-16 md:mb-12 mb-2 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 z-10">
          <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-4 lg:mb-3 md:mb-2 mb-2">
            Series
          </h4>
          <Carousel showDots={true} responsive={responsive}>
            {series.map(serie => (
              <div
                className=" self-center xl:h-[330px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10 relative group xl:mx-4 mx-1"
                key={serie.id}
              >
                <img src={serie.image} className=" rounded-lg w-full h-full object-cover" alt={`serie-${serie.id}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100">
                  <div className="animate-slideIn mb-2 font-bold xl:text-base lg:text-base text-[8px]">
                    {serie.title}
                  </div>
                  <div className="animate-slideIn xl:text-base lg:text-base text-[6px]">{serie.time}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </ScrollAnimation>
      {/* End series */}
      <ScrollAnimation>
        {/* Start banner content */}
        <div className=" relative xl:mb-20 mb-6 -z-0 ">
          <div className="absolute -inset-7 bg-gradient-to-r from-[#4c6aa7] to-[#772462] rounded-lg blur-2xl opacity-95 w-[94%] lg:top-2 lg:h-[98%] h-[94%] top-2 mx-auto"></div>
          <div
            className=" lg:flex flex xl:gap-10 lg:gap-2 md:gap-8 lg:mx-12 md:mx-8 sm:mx-4 mx-2 xl:rounded-3xl lg:rounded-3xl rounded-md bg-gradient-to-r from-banner1 to-banner2
       relative  overflow-hidden xl:h-[650px] lg:h-[540px]  h-[200px] "
          >
            <div className="xl:p-12 basis-3/5 lg:p-4 md:p-8 sm:p-5 p-1 z-10 relative">
              <div className=" xl:block lg:block md:hidden sm:hidden hidden  circlePosition w-[450px] h-[350px]  rounded-full absolute -bottom-32 -left-32 blur-[60px] -z-10"></div>
              <h1 className="xl:leading-tight xl:text-7xl lg:text-6xl text-[22px] text-white font-bold lg:mb-10 md:mb-8 sm:mb-7 mb-5 header">
                Suggest what to see in the evening
              </h1>
              <div className="flex xl:gap-10 gap-2 absolute xl:bottom-20 lg:bottom-20 bottom-3 banner-dropdown ">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex xl:gap-2 lg:gap-2 gap-1 bg-[#3E394D] opacity-70 xl:px-6 xl:py-2 px-[1px] py-[1px] xl:rounded-lg rounded-md justify-center text-white xl:border-2 border">
                      <img className="imgbanner" src="../../assets/img/icon/thinking.png" alt="" />
                      <h3 className="my-auto xl:text-xl lg:text-xl text-[10px]">Mood</h3>
                      <ChevronDownIcon
                        className="xl:-mr-1 xl:h-5 xl:w-5 w-3 text-gray-400 my-auto"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute  z-10 mt-2 w-full  top-[-185px] rounded-md bg-black border  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item className="flex">
                          {({ active }) => (
                            <a
                              href=""
                              className={classNames(
                                active ? "bg-gray-100 text-gray-900" : "text-white",
                                "block px-4 py-2 text-md"
                              )}
                            >
                              So happy
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100 text-gray-900" : "text-white",
                                "block px-4 py-2 text-md"
                              )}
                            >
                              So sad
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100 text-gray-900" : "text-white",
                                "block px-4 py-2 text-md"
                              )}
                            >
                              So love
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? "bg-gray-100 text-gray-900" : "text-white",
                                  "block w-full px-4 py-2 text-left text-md"
                                )}
                              >
                                So so
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex xl:gap-2 lg:gap-2 gap-1 bg-[#3E394D] opacity-70 xl:px-6 xl:py-2 px-[1px] py-[1px] xl:rounded-lg rounded-md justify-center text-white xl:border-2 border">
                      <img className="imgbanner" src="../../assets/img/icon/friends.png" alt="" />
                      <h3 className="my-auto xl:text-xl lg:text-xl text-[8px]">With somebody</h3>
                      <ChevronDownIcon
                        className="xl:-mr-1 xl:h-5 xl:w-5 w-3 text-gray-400 my-auto"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute  z-10 mt-2  top-[-185px] rounded-md bg-black border w-full shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item className="flex">
                          {({ active }) => (
                            <a
                              href=""
                              className={classNames(
                                active ? "bg-gray-100 text-gray-900" : "text-white",
                                "block px-4 py-2 text-md "
                              )}
                            >
                              With friend
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100 text-gray-900" : "text-white",
                                "block px-4 py-2 text-md "
                              )}
                            >
                              With family
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100 text-gray-900" : "text-white",
                                "block px-4 py-2 text-md "
                              )}
                            >
                              With homie
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? "bg-gray-100 text-gray-900" : "text-white",
                                  "block w-full px-4 py-2 text-left text-md "
                                )}
                              >
                                With lover
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* <div className="flex xl:gap-2 lg:gap-2 gap-1 bg-[#3E394D] opacity-70 xl:px-6 xl:py-2 px-3 py-0 rounded-lg justify-center text-white border-2 button-banner">
                  <img className="imgbanner" src="../../assets/img/icon/friends.png" alt="" />
                  <h3 className="my-auto xl:text-xl lg:text-xl text-[10px]">With somebody</h3>
                  <BsChevronDown className="my-auto"></BsChevronDown>
                </div> */}
              </div>
            </div>
            <div className=" basis-2/5 grid grid-cols-2 z-0 xl:gap-7 gap-2 lg:gap-3 relative banner ">
              <div className="z-10">
                <img
                  className=" xl:rounded-2xl lg:rounded-2xl rounded-md xl:mb-7 mb-2"
                  src="../../assets/img/conjuring-3.webp"
                  alt=""
                />
                <img className=" xl:rounded-2xl lg:rounded-2xl rounded-md" src="../../assets/img/ave.jpeg" alt="" />
              </div>
              <div className="z-10">
                <img
                  className=" xl:rounded-2xl lg:rounded-2xl rounded-md xl:mb-7 mb-2"
                  src="../../assets/img/fate-the-winx-saga.jpg"
                  alt=""
                />
                <img className=" xl:rounded-2xl lg:rounded-2xl rounded-md" src="../../assets/img/behom.jpg" alt="" />
              </div>
              <div className=" circlePosition w-[250px] h-[500px] bg-[#24324F] rounded-full absolute lg:top-0 lg:-left-32 -top-36 -right-36  lg:blur-[40px] blur-[20px] z-0"></div>
              <div className=" circlePosition w-[550px] h-[450px] bg-[#440F37] rounded-full absolute -bottom-32 -left-48 blur-[70px] z-0"></div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      {/* ENd banner content */}

      {/* Start cartoons */}
      <ScrollAnimation>
        <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb- lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2">
          <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-4 lg:mb-3 md:mb-2 mb-2">
            Cartoons
          </h4>
          <Carousel showDots={true} responsive={responsive}>
            {cartoons.map(cartoon => (
              <div
                className=" self-center xl:h-[320px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10 relative group xl:mx-4 mx-1"
                key={cartoon.id}
              >
                <img
                  src={cartoon.image}
                  className=" rounded-lg w-full h-full object-cover"
                  alt={`cartoon-${cartoon.id}`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100">
                  <div className="animate-slideIn mb-2 font-bold xl:text-base lg:text-base text-[8px]">
                    {cartoon.title}
                  </div>
                  <div className="animate-slideIn xl:text-base lg:text-base text-[6px]">{cartoon.time}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </ScrollAnimation>
      {/* End cartoons */}
      <ScrollAnimation>
        {/* Start weekly top */}
        <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb- lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 weeklytop">
          <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-4 lg:mb-3 md:mb-2 mb-2">
            Weekly Top
          </h4>
          <Carousel showDots={true} responsive={responsivew}>
            {weeklytops.map(weeklytop => (
              <div
                className=" self-center xl:h-[350px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10 mb-2  relative group xl:mx-[40px] mx-3"
                key={weeklytop.id}
              >
                <img
                  src={weeklytop.image}
                  className=" rounded-lg w-full h-full object-cover "
                  alt={`weeklytop-${weeklytop.id}`}
                />
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100">
                  <div className="animate-slideIn mb-2 font-bold xl:text-base lg:text-base text-[8px]">{weeklytop.title}</div>
                  <div className="animate-slideIn xl:text-base lg:text-base text-[6px]">{weeklytop.time}</div>
                </div> */}

                <p
                  className="text-[#868E9A] absolute xl:text-[230px] lg:text-[170px] text-7xl font-bold 
              xl:top-[150px] xl:-right-16 lg:top-12 md:-bottom-5 md:-right-10 sm:-bottom-5 sm:-right-6 -right-4 -bottom-3"
                >
                  {weeklytop.about}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </ScrollAnimation>
      {/* End weekly top */}
      <ScrollAnimation>
        <NavLink
          className=" flex gap-2  image-container relative xl:mx-20 mx-3 xl:max-w-full max-w-[113px]"
          to="/behance"
        >
          <img className="z-10" src="../../assets/img/mainpage/1.png" alt="" />
          <img className="z-10" src="../../assets/img/mainpage/2.png" alt="" />
          <img className="z-10" src="../../assets/img/mainpage/3.png" alt="" />
          <div className="absolute -inset-7 bg-gradient-to-r from-[#4c6aa7] to-[#772462] rounded-lg blur-xl opacity-95 xl:w-[100%] w-[100%] lg:w-[100%]  xl:h-[84%] lg:h-[84%] h-[75%] xl:top-[9%] top-[10%] left-0 mx-auto"></div>
        </NavLink>
      </ScrollAnimation>
    </div>
  )
}

export default ContentMain
