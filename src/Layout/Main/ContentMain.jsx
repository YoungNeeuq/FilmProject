import { useState, useEffect } from "react"
import Slider from "react-slick"
import axios from "axios"
import ReactPlayer from "react-player"
import "./Main.css" // import CSS file
import { BsChevronDown } from "react-icons/bs"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
const ContentMain = () => {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [cartoons, setCartoons] = useState([])
  const [weeklytops, setWeeklytops] = useState([])
  const [videos, setVideos] = useState([])
  useEffect(() => {
    axios.get("https://652604c767cfb1e59ce7d148.mockapi.io/Content").then(response => {
      setMovies([])
      setSeries([])
      setCartoons([])
      response.data.map(data => {
        if (data.page === "main") {
          if (data.type === "movies") {
            setMovies(old => [...old, data])
          }
          if (data.type === "series") {
            setSeries(old => [...old, data])
          }
          if (data.type === "cartoons") {
            setCartoons(old => [...old, data])
          }
          if (data.type === "weeklytop") {
            setWeeklytops(old => [...old, data])
          }
          if (data.type === "video") {
            setVideos(old => [...old, data])
          }
        }
      })
    })
  }, [])
  const settingsicon = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }
  const settingsvideo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }
  const settingsweekly = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className="bg-[#040714] rounded-lg xl:mx-16 lg:mx-12 md:mx-5 mx-3 xl:mt-28 lg:mt-10 mt-3 overflow-hidden ">
      {/* Start bar */}
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 mb-8 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 icon pt-7">
        <Slider {...settingsicon}>
          <div className="custom-flex">
            <img className="xl:w-[14%] lg:w-[14%] w-[16px]" src="../../assets/img/icon/ghim.png" alt="" />
            <p className="text-white xl:text-base lg:text-base text-[11px]">Looked</p>
          </div>
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
        </Slider>
      </div>
      {/* End bar */}

      {/* Start video */}
      {/* <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2">
        <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-8 lg:mb-5 md:mb-4 mb-3">
          Continue Watching
        </h4>
        <Slider {...settingsvideo}>
          {videos.map(video => (
            <div className="player-wrapper" key={video.id}>
              <ReactPlayer
                className="react-player rounded-xl"
                url={video.image}
                width="100%"
                height="350px"
                controls={true}
              />
            </div>
          ))}
        </Slider>
      </div> */}
      {/* End video */}

      {/* Start movies */}
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2">
        <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-8 lg:mb-5 md:mb-4 mb-3">
          Movies
        </h4>
        <Slider {...settings}>
          {movies.map(movie => (
            <div
              className=" before: self-center xl:h-[320px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10 relative group"
              key={movie.id}
            >
              <img src={movie.image} className=" rounded-lg w-full h-full object-cover" alt={`movie-${movie.id}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100">
                <div className="animate-slideIn mb-2 font-bold xl:text-base lg:text-base text-[8px]">{movie.title}</div>
                <div className="animate-slideIn xl:text-base lg:text-base text-[6px]">{movie.time}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* End movies */}

      {/* Start series */}
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb- lg:mb-16 md:mb-12 mb-2 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 z-10">
        <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-8 lg:mb-5 md:mb-4 mb-3">
          Series
        </h4>
        <Slider {...settings}>
          {series.map(serie => (
            <div
              className=" self-center xl:h-[320px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10 relative group"
              key={serie.id}
            >
              <img src={serie.image} className=" rounded-lg w-full h-full object-cover" alt={`serie-${serie.id}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100">
                <div className="animate-slideIn mb-2 font-bold xl:text-base lg:text-base text-[8px]">{serie.title}</div>
                <div className="animate-slideIn xl:text-base lg:text-base text-[6px]">{serie.time}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* End series */}

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
            <div className="flex xl:gap-10 gap-2 absolute xl:bottom-20 lg:bottom-20 bottom-3 ">
              <div className="flex xl:gap-2 lg:gap-2 gap-1 bg-[#3E394D] opacity-70 xl:px-6 xl:py-2 px-1 py-0 rounded-lg justify-center text-white border-2 button-banner">
                <img className="imgbanner" src="../../assets/img/icon/thinking.png" alt="" />
                <h3 className="my-auto xl:text-xl lg:text-xl text-[10px]">Mood</h3>
                <BsChevronDown className="my-auto"></BsChevronDown>
              </div>
              <div className="flex xl:gap-2 lg:gap-2 gap-1 bg-[#3E394D] opacity-70 xl:px-6 xl:py-2 px-3 py-0 rounded-lg justify-center text-white border-2 button-banner">
                <img className="imgbanner" src="../../assets/img/icon/friends.png" alt="" />
                <h3 className="my-auto xl:text-xl lg:text-xl text-[10px]">With somebody</h3>
                <BsChevronDown className="my-auto"></BsChevronDown>
              </div>
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
      {/* ENd banner content */}

      {/* Start cartoons */}
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb- lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2">
        <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-8 lg:mb-5 md:mb-4 mb-3">
          Cartoons
        </h4>
        <Slider {...settings}>
          {cartoons.map(cartoon => (
            <div
              className=" self-center xl:h-[320px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10 w-2/3 relative group"
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
        </Slider>
      </div>
      {/* End cartoons */}

      {/* Start weekly top */}
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb- lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 weeklytop">
        <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-8 lg:mb-5 md:mb-4 mb-3">
          Weekly Top
        </h4>
        <Slider {...settingsweekly}>
          {weeklytops.map(weeklytop => (
            <div
              className=" self-center xl:h-[350px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10 mb-2  relative group"
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
        </Slider>
      </div>
      {/* End weekly top */}
      <div className=" flex gap-2  image-container relative xl:mx-20 mx-3">
        <img className="z-10" src="../../assets/img/mainpage/1.png" alt="" />
        <img className="z-10" src="../../assets/img/mainpage/2.png" alt="" />
        <img className="z-10" src="../../assets/img/mainpage/3.png" alt="" />
        <div className="absolute -inset-7 bg-gradient-to-r from-[#4c6aa7] to-[#772462] rounded-lg blur-xl opacity-95 xl:w-[100%] w-[100%] lg:w-[100%]  xl:h-[84%] lg:h-[84%] h-[75%] xl:top-[9%] top-[10%] left-0 mx-auto"></div>
      </div>
    </div>
  )
}

export default ContentMain
