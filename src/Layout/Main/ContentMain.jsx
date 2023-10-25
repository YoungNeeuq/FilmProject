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
          slidesToShow: 6,
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
          slidesToShow: 6,
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
    <div className="bg-[#040714] rounded-lg xl:mx-16 lg:mx-12 md:mx-5 mx-3 mt-24 ">
      {/* Start bar */}
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 icon">
        <Slider {...settingsicon}>
          <div className="custom-flex">
            <img src="../../assets/img/icon/ghim.png" alt="" />
            <p className="text-white ">Looked</p>
          </div>
          <div className="custom-flex">
            <img src="../../assets/img/icon/movies.png" alt="" />
            <p className="text-white">Movies</p>
          </div>

          <div className="custom-flex">
            <img src="../../assets/img/icon/video.png" alt="" />
            <p className="text-white mb-1">Series</p>
          </div>

          <div className="custom-flex">
            <img src="../../assets/img/icon/popcorn.png" alt="" />
            <p className="text-white">Cartoons</p>
          </div>

          <div className="custom-flex">
            <img src="../../assets/img/icon/star.png" alt="" />
            <p className="text-white">Top</p>
          </div>

          <div className="custom-flex">
            <img src="../../assets/img/icon/dowload.png" alt="" />
            <p className="text-white">Download</p>
          </div>

          <div className="custom-flex">
            <img src="../../assets/img/icon/tv.png" alt="" />
            <p className="text-white">New</p>
          </div>

          <div className="custom-flex">
            <img src="../../assets/img/icon/love.png" alt="" />
            <p className="text-white">Like</p>
          </div>
        </Slider>
      </div>
      {/* End bar */}

      {/* Start video */}
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2">
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
      </div>
      {/* End video */}

      {/* Start movies */}
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2">
        <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-8 lg:mb-5 md:mb-4 mb-3">
          Movies
        </h4>
        <Slider {...settings}>
          {movies.map(movie => (
            <div
              className=" self-center xl:h-[300px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10"
              key={movie.id}
            >
              <img src={movie.image} className=" rounded-lg w-full h-full object-cover" alt={`movie-${movie.id}`} />
            </div>
          ))}
        </Slider>
      </div>
      {/* End movies */}

      {/* Start series */}
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb- lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2">
        <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-8 lg:mb-5 md:mb-4 mb-3">
          Series
        </h4>
        <Slider {...settings}>
          {series.map(serie => (
            <div
              className=" self-center xl:h-[300px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10"
              key={serie.id}
            >
              <img src={serie.image} className=" rounded-lg w-full h-full object-cover" alt={`serie-${serie.id}`} />
            </div>
          ))}
        </Slider>
      </div>
      {/* End series */}

      {/* Start banner content */}
      <div className=" relative mb-20 ">
        <div className="absolute -inset-7 bg-gradient-to-r from-[#4c6aa7] to-[#772462] rounded-lg blur-2xl opacity-95 w-[94%] mx-auto"></div>
        <div
          className=" lg:flex md:block sm:block block xl:gap-10 lg:gap-2 md:gap-8 lg:mx-12 md:mx-8 sm:mx-4 mx-2 rounded-3xl  bg-gradient-to-r from-banner1 to-banner2
       relative  overflow-hidden xl:h-[650px] lg:h-[550px]  md:h-[1250px] h-[700px] sm:h-[1000px]"
        >
          <div className="xl:p-12 basis-3/5 lg:p-4 md:p-8 sm:p-5 p-1 z-10 relative">
            <div className=" xl:block lg:block md:hidden sm:hidden hidden  circlePosition w-[450px] h-[350px]  rounded-full absolute -bottom-32 -left-32 blur-[60px] -z-10"></div>
            <h1 className=" leading-8 xl:text-7xl lg:text-6xl  md:text-4xl sm:text-4xl text-[35px] text-white font-bold lg:mb-10 md:mb-8 sm:mb-7 md-5">
              Suggest what to see in the evening
            </h1>
            <div className="flex gap-10 absolute bottom-20">
              <div className="flex gap-2 bg-[#3E394D] opacity-70 px-6 py-2 rounded-lg justify-center text-white border-2">
                <img src="../../assets/img/icon/thinking.png" alt="" />
                <h3 className="my-auto text-xl">Mood</h3>
                <BsChevronDown className="my-auto"></BsChevronDown>
              </div>
              <div className="flex gap-2 bg-[#3E394D] opacity-70 px-6 py-2 rounded-lg justify-center text-white border-2">
                <img src="../../assets/img/icon/friends.png" alt="" />
                <h3 className="my-auto text-xl">With somebody</h3>
                <BsChevronDown className="my-auto"></BsChevronDown>
              </div>
            </div>
          </div>
          <div className=" basis-2/5 grid grid-cols-2 z-0 gap-7 lg:gap-3 relative ">
            <div className="z-10">
              <img className=" rounded-2xl mb-7" src="../../assets/img/conjuring-3.webp" alt="" />
              <img className=" rounded-2xl" src="../../assets/img/ave.jpeg" alt="" />
            </div>
            <div className="z-10">
              <img className=" rounded-2xl mb-7" src="../../assets/img/fate-the-winx-saga.jpg" alt="" />
              <img className=" rounded-2xl" src="../../assets/img/behom.jpg" alt="" />
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
              className=" self-center xl:h-[300px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10 w-2/3"
              key={cartoon.id}
            >
              <img
                src={cartoon.image}
                className=" rounded-lg w-full h-full object-cover"
                alt={`cartoon-${cartoon.id}`}
              />
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
              className=" self-center xl:h-[300px] lg:h[250px] md:h-[200px] h-[140px] hover:scale-110 transition-transform z-10 relative"
              key={weeklytop.id}
            >
              <img
                src={weeklytop.image}
                className=" rounded-lg w-full h-full object-cover "
                alt={`weeklytop-${weeklytop.id}`}
              />
              <p
                className="text-[#868E9A] absolute xl:text-[250px] lg:text-[170px] md:text-[150px] sm:text-[110px] text-7xl font-bold 
              xl:top-20 xl:-right-16 lg:top-12 md:-bottom-5 md:-right-10 sm:-bottom-5 sm:-right-6 -right-4 -bottom-3"
              >
                {weeklytop.about}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      {/* End weekly top */}
      <div className=" flex gap-2 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 xl:ml-20 lg:ml-10 md:ml-8">
        <img src="../../assets/img/mainpage/1.png" alt="" />
        <img src="../../assets/img/mainpage/2.png" alt="" />
        <img src="../../assets/img/mainpage/3.png" alt="" />
      </div>
    </div>
  )
}

export default ContentMain
