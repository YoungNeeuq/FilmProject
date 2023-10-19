import { useState, useEffect } from "react"
import Slider from "react-slick"
import axios from "axios"
import "./Main.css" // import CSS file
const ContentMain = () => {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  useEffect(() => {
    axios.get("https://652604c767cfb1e59ce7d148.mockapi.io/Content").then(response => {
      setMovies([])
      setSeries([])
      response.data.map(data => {
        if (data.page === "main") {
          if (data.type === "movies") {
            setMovies(old => [...old, data])
          }
          if (data.type === "series") {
            setSeries(old => [...old, data])
          }
        }
      })
    })
  }, [])

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
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
    <div className="bg-[#040714] rounded-lg xl:mx-16 lg:mx-12 md:mx-5 mx-3 ">
      {/* Start movies */}
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 mx-10">
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
      <div className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb- lg:mb-16 md:mb-12 mx-10">
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
    </div>
  )
}

export default ContentMain
